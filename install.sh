#!/usr/bin/env bash
echo '下载安装代码'
git clone https://github.com/BetterJS/badjs-installer.git
cd badjs-installer
echo '下载依赖模块'
npm run clone
echo '安装npm依赖'
npm run install
echo '导入mysql数据库(使用root账号到db badjs)'
mysql -u root -p badjs < ../badjs-web/db/create.sql
echo '启动badjs(需要sudo权限)'
sudo npm run start