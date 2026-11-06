---
title: C++语言学习笔记-入门篇（二）
top: false
cover: false
toc: true
mathjax: false
date: 2024-03-23 20:10:40
author: Devil__Zero
img:
coverImg:
password:
summary:
keywords:
tags:
  - C++
  - 程序设计
categories: 学习
---
# C++语言学习笔记-入门篇（二）
----
##顺序结构
顾名思义，顺序结构就是按照线性顺序执行代码，是面向过程的程序设计中最直观简洁的控制结构，下面给出一个简易的程序实例
```C++
#include <iostream>
using namespace std;
int main(){
    int a,b;
    cout<<"输入两个数a,b："<<endl;
    cin>>a>>b;
    cout<<"a+b="<<a+b<<endl;
    return 0
}
```
##选择结构
选择结构，即程序按照某个条件执行（出口只有一个）
###if条件语句
以`if(condition){}else if(condition){}else{}`组成，可以根据语义理解，下面给出一个程序实例
```C++
#include <iostream>
using namespace std;
int main(){
    int a;
    cout<<"输入一个整数"<<endl;
    cin>>a;
    if(a < 0) cout<<"a是负数"<<endl;
    else if(a == 0) cout << "a=0"<<endl;
    else cout << "a是正数" << endl;
    return 0;
}
```
###switch条件语句
以`switch(var){}case A: ;case B: ;... default: N;`组成，下面给出一个程序实例
```C++
#include <iostream>
using namespace std;
int main(){
    int a;
    cout<<"你今天要干什么，若睡觉输入1，学习输入2"<<endl;
    cin>>a;
    switch(a){
        case 1: cout<<"你怎么睡得着的，你这个年龄段，还睡得着觉，有点出息没有！"<<endl;break;
        case 2: cout<<"学个p，咱老李不学习也会打仗"<<endl;break;
        default: cout<<"Error!"<<endl;
    }
    return 0;
}