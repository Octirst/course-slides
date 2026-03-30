# 🚀 阿里云自动化部署使用指南

## 📋 目录

1. [首次部署：服务器初始化](#首次部署服务器初始化)
2. [配置 GitHub Secrets](#配置-github-secrets)
3. [触发自动部署](#触发自动部署)
4. [手动部署（可选）](#手动部署可选)
5. [常见问题](#常见问题)

---

## 🎯 方案对比

### Vercel 方式（之前）
```
推送代码 → GitHub → Vercel 自动构建部署 ✅ 零配置
```

### 阿里云方式（现在）
```
推送代码 → GitHub → GitHub Actions → SSH 到阿里云 → 自动部署 ✅ 同样自动化
```

---

## 首次部署：服务器初始化

### 步骤 1：上传初始化脚本到服务器

```bash
# 在本地执行
scp scripts/init-aliyun-server.sh root@你的服务器 IP:~/
```

### 步骤 2：SSH 登录服务器并执行初始化

```bash
# SSH 登录
ssh root@你的服务器 IP

# 执行初始化脚本
chmod +x init-aliyun-server.sh
./init-aliyun-server.sh
```

初始化脚本会自动完成：
- ✅ 安装 Node.js 20
- ✅ 安装 pnpm
- ✅ 安装 Git
- ✅ 安装 PM2
- ✅ 安装 Nginx
- ✅ 创建应用目录
- ✅ 配置防火墙

### 步骤 3：配置 Nginx

```bash
# 在服务器上执行
# 1. 创建 Nginx 配置文件
nano /etc/nginx/sites-available/course-slides

# 2. 粘贴 docs/nginx.conf 的内容，修改域名为你自己的

# 3. 启用站点
ln -s /etc/nginx/sites-available/course-slides /etc/nginx/sites-enabled/

# 4. 测试配置
nginx -t

# 5. 重启 Nginx
systemctl restart nginx
```

### 步骤 4：生成 SSH 密钥（用于 GitHub Actions 登录）

```bash
# 在本地执行（生成专门用于 GitHub Actions 的密钥）
ssh-keygen -t ed25519 -C "github-actions@course-slides" -f ~/.ssh/course-slides-deploy

# 将公钥上传到服务器
ssh-copy-id -i ~/.ssh/course-slides-deploy.pub root@你的服务器 IP

# 如果 ssh-copy-id 不可用，使用以下方法：
cat ~/.ssh/course-slides-deploy.pub | ssh root@你的服务器 IP "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### 步骤 5：配置生产环境变量

```bash
# 在服务器上执行
cd /var/www/course-slides

# 创建 .env.production 文件
nano .env.production

# 粘贴以下内容（AUTH_SECRET 使用强随机密钥）：
cat > .env.production << EOF
# NextAuth Secret（生产环境必须使用强随机密钥）
# 生成方法：openssl rand -base64 32
AUTH_SECRET=$(openssl rand -base64 32)

# Student Login Password
STUDENT_PASSWORD=zbti-ai-cs2025

# Node.js 环境
NODE_ENV=production
PORT=3000
EOF
```

---

## 配置 GitHub Secrets

在 GitHub 仓库页面，进入 **Settings → Secrets and variables → Actions**，添加以下 Secrets：

| Secret 名称 | 值 | 说明 |
|-----------|-----|------|
| `ALIYUN_SERVER_HOST` | 你的服务器公网 IP | 例如：`123.123.123.123` |
| `ALIYUN_SERVER_USER` | 服务器用户名 | 通常是 `root` |
| `ALIYUN_SSH_PRIVATE_KEY` | SSH 私钥内容 | 打开 `~/.ssh/course-slides-deploy` 文件，复制全部内容 |

### 详细步骤：

1. **添加服务器 IP**
   ```
   Name: ALIYUN_SERVER_HOST
   Value: 123.123.123.123  # 你的服务器 IP
   ```

2. **添加用户名**
   ```
   Name: ALIYUN_SERVER_USER
   Value: root
   ```

3. **添加 SSH 私钥**
   ```bash
   # 在本地执行，查看私钥内容
   cat ~/.ssh/course-slides-deploy
   
   # 复制全部内容（包括 BEGIN 和 END 行）
   # 粘贴到 GitHub Secret: ALIYUN_SSH_PRIVATE_KEY
   ```

---

## 触发自动部署

### 方式一：推送代码自动部署

```bash
# 日常开发推送代码
git add .
git commit -m "feat: 更新 PPT 内容"
git push origin main
```

GitHub Actions 会自动：
1. ✅ 检出代码
2. ✅ 安装依赖
3. ✅ 构建 Next.js
4. ✅ 构建 Slidev 幻灯片
5. ✅ 打包上传到阿里云
6. ✅ 自动重启应用

### 方式二：手动触发部署

在 GitHub 仓库页面：
1. 进入 **Actions** 标签
2. 选择 **"🚀 Deploy to Aliyun"** workflow
3. 点击 **"Run workflow"**
4. 选择分支，点击 **"Run workflow"**

---

## 手动部署（可选）

如果 GitHub Actions 出现问题，可以手动部署：

### 方法一：使用部署脚本

```bash
# 在本地项目根目录执行
export SERVER_HOST="你的服务器 IP"
export SERVER_USER="root"
chmod +x scripts/deploy-to-aliyun.sh
./scripts/deploy-to-aliyun.sh
```

### 方法二：完全手动

```bash
# 1. 构建
pnpm install
pnpm build
./scripts/build-slides.sh

# 2. 打包
tar -czf deploy.tar.gz .next public node_modules package.json ecosystem.config.js

# 3. 上传
scp deploy.tar.gz root@你的服务器 IP:~/

# 4. 部署
ssh root@你的服务器 IP << 'ENDSSH'
cd /var/www/course-slides
pm2 stop course-slides
rm -rf .next public node_modules
tar -xzf ~/deploy.tar.gz
pm2 restart course-slides
ENDSSH
```

---

## 📊 部署监控

### 查看应用状态

```bash
# SSH 登录服务器
ssh root@你的服务器 IP

# 查看 PM2 进程
pm2 status

# 查看详细日志
pm2 logs course-slides

# 查看实时监控
pm2 monit
```

### 查看 GitHub Actions 日志

访问：`https://github.com/你的用户名/course-slides/actions`

---

## ❓ 常见问题

### Q1: GitHub Actions 失败，提示 SSH 连接失败
**解决方案：**
1. 检查服务器安全组是否开放 22 端口
2. 确认 SSH 公钥已添加到 `~/.ssh/authorized_keys`
3. 检查 Secret 配置是否正确

### Q2: 部署后访问网站 502 错误
**解决方案：**
```bash
# 检查 PM2 是否运行
pm2 status

# 如果没有运行，启动应用
pm2 start ecosystem.config.js

# 查看错误日志
pm2 logs course-slides --err
```

### Q3: Nginx 配置问题
**解决方案：**
```bash
# 测试 Nginx 配置
nginx -t

# 查看 Nginx 日志
tail -f /var/log/nginx/course-slides-error.log
```

### Q4: 如何回滚到上一个版本？
**解决方案：**
```bash
# PM2 不支持版本回滚，需要手动操作
# 建议：保留最近 3 个版本的部署包在服务器上
# 回滚时解压旧版本并重启
```

### Q5: 如何配置 HTTPS？
**解决方案：**
```bash
# 安装 Certbot
apt install -y certbot python3-certbot-nginx

# 获取证书
certbot --nginx -d zbti-ai.top -d www.zbti-ai.top

# 自动续期
certbot renew --dry-run
```

---

## 🎉 部署完成检查清单

- [ ] 服务器初始化完成
- [ ] Nginx 配置完成并重启
- [ ] GitHub Secrets 配置完成
- [ ] 推送代码触发自动部署
- [ ] GitHub Actions 显示部署成功
- [ ] 访问网站正常
- [ ] PM2 进程正常运行
- [ ] 日志无错误信息

---

## 📝 与 Vercel 的对比

| 功能 | Vercel | 阿里云 + GitHub Actions |
|------|--------|----------------------|
| 自动化部署 | ✅ | ✅ |
| 构建缓存 | ✅ | ✅（Actions 缓存） |
| 回滚 | ✅ | ⚠️ 需手动 |
| 日志查看 | ✅ | ✅（PM2 + Actions） |
| 自定义域名 | ✅ | ✅ |
| HTTPS | ✅ 自动 | ⚠️ 需手动配置 |
| 成本控制 | ⚠️ 按量计费 | ✅ 固定费用 |
| 国内访问速度 | ⚠️ 海外 | ✅ 杭州节点 + ESA |
| 备案要求 | ❌ 不需要 | ✅ 必须 |

---

## 🔗 相关文档

- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [PM2 文档](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Nginx 文档](https://nginx.org/en/docs/)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
