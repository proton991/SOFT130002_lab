# Lab8文档

2020年Web应用基础 for 19ss

17307130025


## 文件结构

/lab0

/lab1

/lab2

/lab3

/lab4

/lab5

/lab6

/lab7

/lab8

​	/lab08.html

​	/lab08.css

​	/lab08.js

​	/Lab08文档.md

​	/...（其他图片文件）


## 任务1
### 轮播实现的基本原理
共有5张图片, 实际html代码中放置了7张(为了实现轮播的连续性, 处于第一张图片时点击左侧箭头和最后一张图片时点击右侧箭头)
轮播通过改变wrap的style="left: -600px;"中left的数值实现
* 点击前一张箭头 left+600px
* 点击下一张箭头 left-600px
除此之外还要对2个特殊情况进行处理
left=-3600px和left=0px
此时显示的图片分别为第1张和第5张
这时需要手动设置left的值为-1200px和-2400px来防止left的值超出取值范围

下标的对应显示
通过showCurrentDot函数实现, 为对应的button元素添加class"on"

## 任务2
### 自动播放实现
利用setInterval函数, 每2s执行next_pic()函数
### 鼠标事件监听
onmouseenter/onmouseleave 设置响应的函数来实现
鼠标进入时通过clearInterval来停止轮播
鼠标退出时通过调用autoPlay函数来继续轮播

## 任务3
### 通过点击下标切换
根据下标计算left的值来实现图片的切换, 同时要注意第一张和第五张图片的特殊情况处理


## 任务4
通过jQuery实现, 鼠标点击单元格后为td添加input class并获取原内容将其填入input元素中
鼠标拾取焦点后移除input class并显示为修改后的值