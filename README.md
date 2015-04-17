##js表单选择中国大学、大学专业、中国省市区三级联动


[TOC]

由于做了几个教育网站，经常跟大学、专业报名、考生籍贯等信息打交道，把网站常用的中国大学js选择、大学专业js选择等资源共享。

###json信息库

**大学信息json库**：`universitySelect/chinaUniversityList.js`

由于业务没有扩展到国际~~~目前只有中国的大学

**大学专业json库**：`majorSelect/majorList.js`

手工从51job上复制、目前只有本科专业，没有专科专业信息。

**省市区县地方信息库**： `chinaCitySelect/chinaCityList.js`

###jquery操作表单联动

文件夹中各有一个`*Select.js`、都是简单的js操作，注释写的比较全。可以按照自己的要求修改

###例子

如果需要对例子中提供的模板样式修改，建议根据json信息库，重新自己写js。

样式都是统一的~

![大学](http://ww1.sinaimg.cn/bmiddle/005ItG0Rjw1er918dsr1tj310q0mgahs.jpg)

![地区](http://ww3.sinaimg.cn/bmiddle/005ItG0Rjw1er915yjq9fj310u0nstfq.jpg)

![专业](http://ww3.sinaimg.cn/bmiddle/005ItG0Rjw1er912q3nyjj30zu0pgdna.jpg)

github地址：https://github.com/yidiandianlan/openSelect/