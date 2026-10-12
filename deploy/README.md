# 腾讯云单机测试环境

此方案在一台 Linux 云服务器上运行三个容器：PostgreSQL、EasyToLearn 应用、Caddy 网页入口。浏览器只访问 Caddy；数据库端口不映射到公网。测试环境使用每个浏览器独立的签名会话 Cookie，清除 Cookie 后无法找回原进度；公开发布前需要正式账号系统。

## 购买前确认

- 一台可通过 SSH 登录的腾讯云 Linux 云服务器，有公网 IP。建议选择 Ubuntu 24.04 LTS，并安装 Docker Engine 与 Docker Compose 插件。
- 服务器至少允许 80、443 端口入站；22 端口仅向管理员开放。不要开放 3000、5432 端口。
- 如果选择中国大陆地域，对外提供网站服务前先按腾讯云流程完成 ICP 备案。备案前需要内部验证时，可通过 SSH 隧道在自己的电脑上访问服务器的 `localhost:80`，不要直接开放公共网站。
- 数据库、题库和用户进度都保存在服务器磁盘上；为磁盘留出空间，并准备服务器外的备份位置。

Docker 安装请使用 Docker 官方 Ubuntu 安装指南：<https://docs.docker.com/engine/install/ubuntu/>。

## 首次部署

以下命令在云服务器上执行。先将本项目 `dev` 分支的最新代码推送到 GitHub，然后：

```sh
git clone --branch dev https://github.com/lujiameng4-debug/EasyToLearn.git
cd EasyToLearn
cp .env.example .env
openssl rand -hex 32
openssl rand -hex 32
```

将两次生成的不同随机值分别填入 `.env` 的 `POSTGRES_PASSWORD` 和 `SESSION_SECRET`。不要把真实密钥提交到 Git。首次只用 IP 访问时保留 `SITE_ADDRESS=:80` 和 `SESSION_COOKIE_SECURE=false`，且只用于测试数据；中国大陆地域备案前的内部测试请使用 SSH 隧道。

```sh
chmod 600 .env
docker compose up -d --build
docker compose run --rm app node backend/prisma/seed.js
docker compose run --rm app node backend/prisma/seed_dict_basic.js
docker compose ps
curl http://127.0.0.1/api/health
```

正常健康检查返回 `{"status":"ok","database":"ok"}`。在允许公网测试的地域，可访问 `http://服务器公网IP/`。中国大陆地域备案前，先在自己的电脑运行 `ssh -L 8080:127.0.0.1:80 用户名@服务器公网IP`，再打开 `http://localhost:8080/` 做内部检查。第一条种子命令会写入 22 个模块的题目；第二条仅导入少量基础词汇供查词功能试用。完整词典需要另行导入 ECDICT CSV。重复运行题库种子通常会更新题库内容并保留现有进度；不要使用 `db:seed:reset`。

## 绑定域名及 HTTPS

完成域名解析及适用的备案后，将域名的 A 记录指向服务器公网 IP。在 `.env` 中把 `SITE_ADDRESS` 改为实际域名，例如 `learn.example.com`，并把 `SESSION_COOKIE_SECURE` 改为 `true`。然后执行：

```sh
docker compose up -d
docker compose logs --tail=100 web
```

Caddy 将通过域名申请并续期 HTTPS 证书。访问 `https://你的域名/` 和 `https://你的域名/api/health`。申请证书时，域名必须已解析到服务器，并能从公网访问 80 和 443 端口。

## 更新与备份

更新测试环境：

```sh
git pull origin dev
docker compose up -d --build
```

应用启动时会执行已提交的 Prisma 迁移。题库发生变化时再运行一次种子命令。更新前建议备份数据库：

```sh
mkdir -p backups
docker compose exec -T db pg_dump -U easytolearn easytolearn > "backups/easytolearn-$(date +%Y%m%d-%H%M%S).sql"
```

备份文件还应复制到服务器之外，并定期演练恢复。`docker compose down -v` 会删除数据库卷，请勿用于日常更新。

## 本阶段的限制

- 每个浏览器有独立的测试身份，但尚无账号登录、跨设备同步或找回功能。
- 自定义题库及部分前端进度仍保存在浏览器本地，清除浏览器数据会丢失这部分内容。
- 当前方案仅准备普通练习服务；AI 评分模型和推理算力没有包含在内。
- PostgreSQL 与应用运行在同一台服务器，服务器故障会同时影响两者；公开上线前要落实异机备份、恢复和监控。
