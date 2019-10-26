
# Shell脚本

#### npm查看安装过的模块或包
```shell
npm ls --depth 0
```
[npm docs](https://docs.npmjs.com/cli/ls)

#### 私有npm库
```shell
npm install -g verdaccio
npm install -g sinopia
```

#### 切换本地源
```shell
npm install -g nrm
```

#### cmd alias
```shell
@doskey hs=http-server ./ $*
```

#### adb tool
```shell
adb reverse tcp:8080 tcp:8080
```
#### cmd utf-8 中文显示
```
@echo off
REM 声明采用UTF-8编码
chcp 65001
echo test
echo 中文测试
pause
```