> # npm install -g typescript //全局安装ts

在vscode中自动编译ts文件成js文件
tsc --init //在当前目录下生成配置文件
把文件中的 outDir 改成编译后的js要存放的位置 //我猜应该是相对配置文件的位置吧
把strict严格模式由ture改成false
然后在Terminal->run task->Show All Tasks->tsc:watch tsconfig.json
