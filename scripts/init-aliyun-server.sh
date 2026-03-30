#!/bin/bash

# ========================================
# 阿里云服务器初始化脚本
# 首次部署前在服务器上执行一次即可
# ========================================

set -e

echo "========================================"
echo "🔧 开始初始化阿里云服务器"
echo "========================================"

# 1. 更新系统
echo "📦 步骤 1/8: 更新系统..."
apt update && apt upgrade -y

# 2. 安装 Node.js 20
echo "🟢 步骤 2/8: 安装 Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 验证安装
node -v
npm -v

# 3. 安装 pnpm
echo "📦 步骤 3/8: 安装 pnpm..."
npm install -g pnpm
pnpm -v

# 4. 安装 Git
echo "🔧 步骤 4/8: 安装 Git..."
apt install -y git
git --version

# 5. 安装 PM2
echo "🚀 步骤 5/8: 安装 PM2..."
npm install -g pm2
pm2 -v

# 6. 安装 Nginx
echo "🌐 步骤 6/8: 安装 Nginx..."
apt install -y nginx
systemctl start nginx
systemctl enable nginx

# 验证 Nginx
systemctl status nginx --no-pager -l

# 7. 创建应用目录
echo "📂 步骤 7/8: 创建应用目录..."
mkdir -p /var/www/course-slides
mkdir -p /var/log/course-slides
chown -R $USER:$USER /var/www/course-slides
chown -R $USER:$USER /var/log/course-slides

# 8. 配置防火墙（如果使用 ufw）
echo "🔒 步骤 8/8: 配置防火墙..."
if command -v ufw &> /dev/null; then
    ufw allow 22/tcp    # SSH
    ufw allow 80/tcp    # HTTP
    ufw allow 443/tcp   # HTTPS（如果后续配置 SSL）
    ufw --force enable
    ufw status
fi

echo "========================================"
echo "✅ 服务器初始化完成！"
echo "========================================"
echo ""
echo "📝 下一步操作："
echo "1. 配置 Nginx 反向代理（参考 docs/nginx.conf）"
echo "2. 在 GitHub 配置 Secrets"
echo "3. 推送代码触发自动部署"
