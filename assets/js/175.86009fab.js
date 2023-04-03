(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{984:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" docker安装")]),s._v(" "),n("h2",{attrs:{id:"docker的基本安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的基本安装"}},[s._v("#")]),s._v(" Docker的基本安装")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v(" 一、安装docker\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、Docker 要求 CentOS 系统的内核版本高于 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(" ，查看本页面的前提条件来验证你的CentOS 版本是否支持 Docker 。\n通过 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" 命令查看你当前的内核版本\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、使用 root 权限登录 Centos。确保 yum 包更新到最新。\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、卸载旧版本"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如果安装过旧版本的话"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  docker-common docker-selinux docker-engine\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils device-mapper-persistent-data lvm2\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、设置yum源\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("、可以查看所有仓库中所有docker版本，并选择特定版本安装\nyum list docker-ce "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--showduplicates")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("、安装docker\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#由于repo中默认只开启stable仓库，故这里安装的是最新稳定版17.12.0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("FQPN"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo yum install docker-ce-17.12.0.ce //这个才是安装的命令")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("、启动并加入开机启动\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);