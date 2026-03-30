#!/bin/bash

# ========================================
# course-slides 自动化部署脚本
# 用于阿里云服务器部署
# ========================================

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 配置变量（通过 GitHub Secrets 传入）
SERVER_HOST="${1:-$SERVER_HOST}"
SERVER_USER="${2:-$SERVER_USER}"
SERVER_PORT="${3:-22}"
DEPLOY_PATH="${4:-/var/www/course-slides}"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}🚀 开始部署 course-slides${NC}"
echo -e "${GREEN}========================================${NC}"

# 检查必要的环境变量
if [ -z "$SERVER_HOST" ]; then
    echo -e "${RED}❌ 错误：SERVER_HOST 未设置${NC}"
    exit 1
fi

if [ -z "$SERVER_USER" ]; then
    echo -e "${RED}❌ 错误：SERVER_USER 未设置${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 部署目标：${SERVER_USER}@${SERVER_HOST}:${DEPLOY_PATH}${NC}"

# 1. 安装依赖
echo -e "${YELLOW}📦 步骤 1/6: 安装依赖...${NC}"
pnpm install --frozen-lockfile

# 2. 构建 Next.js 应用
echo -e "${YELLOW}🔨 步骤 2/6: 构建 Next.js 应用...${NC}"
pnpm build

# 3. 构建 Slidev 幻灯片
echo -e "${YELLOW}📊 步骤 3/6: 构建 Slidev 幻灯片...${NC}"
chmod +x scripts/build-slides.sh
./scripts/build-slides.sh

# 4. 打包部署文件
echo -e "${YELLOW}📦 步骤 4/6: 打包部署文件...${NC}"
DEPLOY_PACKAGE="deploy-$(date +%Y%m%d-%H%M%S).tar.gz"

# 创建临时部署目录
TEMP_DEPLOY_DIR=$(mktemp -d)
cp -r .next $TEMP_DEPLOY_DIR/
cp -r public $TEMP_DEPLOY_DIR/
cp -r node_modules $TEMP_DEPLOY_DIR/
cp package.json $TEMP_DEPLOY_DIR/
cp ecosystem.config.js $TEMP_DEPLOY_DIR/
cp .env.production $TEMP_DEPLOY_DIR/ 2>/dev/null || echo "⚠️  .env.production 不存在"

# 打包
cd $TEMP_DEPLOY_DIR
tar -czf $DEPLOY_PACKAGE .
cd -

echo -e "${GREEN}✅ 打包完成：$DEPLOY_PACKAGE${NC}"

# 5. 上传到服务器
echo -e "${YELLOW}☁️  步骤 5/6: 上传到阿里云服务器...${NC}"

# 创建 SSH 选项
SSH_OPTIONS="-o StrictHostKeyChecking=no -o ConnectTimeout=30"

# 上传部署包
scp $SSH_OPTIONS -P $SERVER_PORT $TEMP_DEPLOY_DIR/$DEPLOY_PACKAGE ${SERVER_USER}@${SERVER_HOST}:~/

# 6. 在服务器上执行部署
echo -e "${YELLOW}🔧 步骤 6/6: 在服务器上执行部署...${NC}"

# SSH 执行部署命令
ssh $SSH_OPTIONS -p $SERVER_PORT ${SERVER_USER}@${SERVER_HOST} << 'ENDSSH'
#!/bin/bash
set -e

DEPLOY_PATH="/var/www/course-slides"
DEPLOY_PACKAGE=~/deploy-*.tar.gz

echo "📂 进入部署目录..."
cd $DEPLOY_PATH

echo "🗑️  停止当前应用..."
pm2 stop course-slides || true

echo "🗑️  清理旧版本..."
rm -rf .next public node_modules

echo "📦 解压新版本..."
tar -xzf ~/deploy-*.tar.gz

echo "🧹 清理部署包..."
rm -f ~/deploy-*.tar.gz

echo "🚀 启动应用..."
pm2 start ecosystem.config.js || pm2 restart course-slides

echo "⏳ 等待应用启动..."
sleep 3

echo "✅ 检查应用状态..."
pm2 status course-slides

echo "📋 查看最新日志..."
pm2 logs course-slides --lines 5 --nostream
ENDSSH

# 清理临时文件
rm -rf $TEMP_DEPLOY_DIR

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ 部署完成！${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "${YELLOW}📝 访问地址：http://${SERVER_HOST}${NC}"
echo -e "${YELLOW}📊 查看状态：ssh ${SERVER_USER}@${SERVER_HOST} 'pm2 status'${NC}"
echo -e "${YELLOW}📋 查看日志：ssh ${SERVER_USER}@${SERVER_HOST} 'pm2 logs'${NC}"
