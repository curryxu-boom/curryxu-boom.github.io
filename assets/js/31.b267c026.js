(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1182:function(t,e,s){"use strict";s.r(e);var r=s(4),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"代码热加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码热加载"}},[t._v("#")]),t._v(" 代码热加载")]),t._v(" "),e("p",[t._v("在日常开发中，我们需要经常修改 Java 代码，手动重启项目，查看修改后的效果。如果在项目小时，重启速度比较快，等待的时间是较短的。但是随着项目逐渐变大，重启的速度变慢，等待时间 1-2 min 是比较常见的。")]),t._v(" "),e("p",[t._v("这样就导致我们开发效率降低，影响我们的下班时间，哈哈哈~")]),t._v(" "),e("p",[t._v("那么是否有方式能够实现，在我们修改完 Java 代码之后，能够不重启项目呢？答案是有的，通过 "),e("strong",[t._v("代码热加载")]),t._v(" 的方式。实现方案有三种：")]),t._v(" "),e("ol",[e("li",[t._v("spring-boot-devtools【不推荐】")]),t._v(" "),e("li",[t._v("IDEA 自带 HowSwap 功能【推荐】")]),t._v(" "),e("li",[t._v("JRebel 插件【最推荐】")])]),t._v(" "),e("h2",{attrs:{id:"_1-spring-boot-devtools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-boot-devtools"}},[t._v("#")]),t._v(" 1. spring-boot-devtools")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#using.running-your-application.hot-swapping",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring-boot-devtools "),e("OutboundLink")],1),t._v("是 Spring Boot 提供的开发者工具，它会监控当前应用所在的 classpath 下的文件发生变化，进行"),e("strong",[t._v("自动重启")]),t._v("。")]),t._v(" "),e("p",[t._v("devtools 存在重启速度较慢的问题，所以不推荐！")]),t._v(" "),e("h2",{attrs:{id:"_2-idea-自带-howswap-功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-idea-自带-howswap-功能"}},[t._v("#")]),t._v(" 2. IDEA 自带 HowSwap 功能")]),t._v(" "),e("p",[t._v("该功能是 IDEA Ultimate 旗舰版的专属功能，不支持 IDEA Community 社区版。")]),t._v(" "),e("h3",{attrs:{id:"_2-1-如何使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-如何使用"}},[t._v("#")]),t._v(" 2.1 如何使用")]),t._v(" "),e("p",[t._v("① 设置 Spring Boot 启动类，开启 HotSwap 功能。如下图所示：")]),t._v(" "),e("img",{attrs:{src:s(388)}}),t._v(" "),e("p",[t._v("② Debug 运行该启动类，等待项目启动完成。")]),t._v(" "),e("p",[t._v("③ 每次修改 Java 代码后，点击左下角的「热加载」按钮，即可实现代码热加载。如下图所示：")]),t._v(" "),e("img",{attrs:{src:s(389)}}),t._v(" "),e("h3",{attrs:{id:"_2-2-存在问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-存在问题"}},[t._v("#")]),t._v(" 2.2 存在问题")]),t._v(" "),e("p",[t._v("IDEA 自带 HowSwap 功能，支持比较有限，很多修改都不支持。例如说：")]),t._v(" "),e("ul",[e("li",[t._v("只能增加方法或字段但不可以减少方法或字段")]),t._v(" "),e("li",[t._v("只能增加可见性不能减少")]),t._v(" "),e("li",[t._v("只能维持已有方法的签名而不能修改等等。")])]),t._v(" "),e("p",[t._v("你可以认为，只支持方法内的代码修改热加载。")]),t._v(" "),e("p",[t._v("如果想要相对完美的方案，建议使用 JRebel 插件。")]),t._v(" "),e("h2",{attrs:{id:"_3-jrebel-插件【最推荐】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-jrebel-插件【最推荐】"}},[t._v("#")]),t._v(" 3. JRebel 插件【最推荐】")]),t._v(" "),e("p",[t._v("JRebel 插件是目前最好用的热加载插件，它支持 IDEA Ultimate 旗舰版、Community 社区版。")]),t._v(" "),e("h3",{attrs:{id:"_3-1-如何安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-如何安装"}},[t._v("#")]),t._v(" 3.1 如何安装")]),t._v(" "),e("p",[t._v("① 点击 "),e("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/4441-jrebel-and-xrebel/versions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/4441-jrebel-and-xrebel/versions "),e("OutboundLink")],1),t._v("地址，必须下载 "),e("strong",[t._v("2022.4.1")]),t._v(" 版本。如下图所示：")]),t._v(" "),e("img",{attrs:{src:s(390)}}),t._v(" "),e("p",[t._v("② 打开 [Preference -> Plugins] 菜单，点击「Install Plugin from Disk...」按钮，选择刚下载的 JRebel 插件的压缩包。如下图所示：")]),t._v(" "),e("img",{attrs:{src:s(391)}}),t._v(" "),e("p",[t._v("安装完成后，需要重启 IDEA 生效。")]),t._v(" "),e("p",[t._v("③ 打开 [Preference -> JRebel & XRebel] 菜单，输入 GUID address 为 "),e("code",[t._v("https://jrebel.qekang.com/1e67ec1b-122f-4708-87d0-c1995dc0cdaa")]),t._v(" ，邮件随便写，完成 JRebel 的激活。如下图所示：")]),t._v(" "),e("img",{attrs:{src:s(392)}}),t._v(" "),e("p",[t._v("之后，点击「Work Offline」按钮，设置 JRebel 为离线，避免因为网络问题导致激活失效。如下图所示：")]),t._v(" "),e("img",{attrs:{src:s(393)}}),t._v(" "),e("h3",{attrs:{id:"_3-2-如何使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-如何使用"}},[t._v("#")]),t._v(" 3.2 如何使用")]),t._v(" "),e("p",[t._v("① 点击「Debug With JRebel」按钮，使用 JRebel 启动项目。如下图所示：")]),t._v(" "),e("img",{attrs:{src:s(394)}}),t._v(" "),e("p",[t._v("② 每次修改 Java 代码后，点击左下角的「热加载」按钮，即可实现代码热加载。如下图所示：")]),t._v(" "),e("img",{attrs:{src:s(395)}})])}),[],!1,null,null,null);e.default=a.exports},388:function(t,e,s){t.exports=s.p+"assets/img/img.1183b3ae.png"},389:function(t,e,s){t.exports=s.p+"assets/img/img_1.ea2ba98c.png"},390:function(t,e,s){t.exports=s.p+"assets/img/img_2.9e0739ec.png"},391:function(t,e,s){t.exports=s.p+"assets/img/img_3.4d8feb46.png"},392:function(t,e,s){t.exports=s.p+"assets/img/img_4.d862755e.png"},393:function(t,e,s){t.exports=s.p+"assets/img/img_5.1be41158.png"},394:function(t,e,s){t.exports=s.p+"assets/img/img_6.f3713074.png"},395:function(t,e,s){t.exports=s.p+"assets/img/img_7.d995ea59.png"}}]);