# badjs-installer
badjs 快捷安装模块

#### 依赖以下组件：
- node.js
- mongodb 存储上报数据
- mysql 用于web管理系统数据存储，默认账号=root，密码=root，端口3306

在安装前请确保mongodb和mysql已经启动。

## docker 部署
[badjs-docker]( https://hub.docker.com/r/caihuijigood/badjs-docker/) 
``` bash 
// 下载images
docker pull caihuijigood/badjs-docker
// 启动
docker run -i -d -p 80:80 -p 8081:8081 docker.io/caihuijigood/badjs-docker bash badjs mysql=mysql://root:root@192.168.1.101:3306/badjs mongodb=mongodb://192.168.1.101:27017/badjs
```
 
> 其中 mysql 是指定你的mysql 数据库，  mongodburl 是指向你的mongodb,  这个两个参数都是必须的

## Linux | macOS 安装
复制这行代码到命令行执行
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/BetterJS/badjs-installer/master/install.sh)"
```
## Windows 安装
```bat
TODO
```

## 支持的npm 命令
```bat
npm run clone
npm run install
npm run start
```
