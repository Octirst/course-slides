module.exports = {
  apps: [{
    name: 'course-slides',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '/var/www/course-slides',
    instances: 2,  // 根据服务器 CPU 核心数调整
    exec_mode: 'cluster',  // 集群模式，充分利用多核 CPU
    env_file: '/var/www/course-slides/.env.production',  // 加载环境变量文件
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/course-slides/error.log',
    out_file: '/var/log/course-slides/out.log',
    log_file: '/var/log/course-slides/combined.log',
    time: true,
    autorestart: true,
    max_memory_restart: '500M',  // 超过 500MB 自动重启
    watch: false
  }]
};
