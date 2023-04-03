(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1201:function(a,t,r){"use strict";r.r(t);var s=r(4),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"多数据源-读写分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多数据源-读写分离"}},[a._v("#")]),a._v(" 多数据源（读写分离）")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mybatis/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("yudao-spring-boot-starter-mybatis")]),a._v(" "),t("OutboundLink")],1),a._v("技术组件，除了提供 MyBatis 数据库操作，还提供了如下 2 种功能：")]),a._v(" "),t("ul",[t("li",[a._v("数据连接池：基于 "),t("a",{attrs:{href:"https://github.com/alibaba/druid",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alibaba Druid "),t("OutboundLink")],1),a._v("实现，额外提供监控的能力。")]),a._v(" "),t("li",[a._v("多数据源（读写分离）：基于 "),t("a",{attrs:{href:"https://github.com/baomidou/dynamic-datasource-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[a._v("Dynamic Datasource "),t("OutboundLink")],1),a._v("实现，支持 Druid 连接池，可集成 "),t("a",{attrs:{href:"https://www.iocoder.cn/Seata/install/?yudao",target:"_blank",rel:"noopener noreferrer"}},[a._v("Seata "),t("OutboundLink")],1),a._v("实现分布式事务。")])]),a._v(" "),t("h2",{attrs:{id:"_1-数据连接池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据连接池"}},[a._v("#")]),a._v(" 1. 数据连接池")]),a._v(" "),t("blockquote",[t("p",[a._v("友情提示：")]),a._v(" "),t("p",[a._v("如果你未学习过 Druid 数据库连接池，可以后续阅读 "),t("a",{attrs:{href:"http://www.iocoder.cn/Spring-Boot/datasource-pool/?yudao",target:"_blank",rel:"noopener noreferrer"}},[a._v("《芋道 Spring Boot 数据库连接池入门》 "),t("OutboundLink")],1),a._v("文章。")])]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.alibaba"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("druid-spring-boot-starter"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"_1-1-druid-监控配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-druid-监控配置"}},[a._v("#")]),a._v(" 1.1 Druid 监控配置")]),a._v(" "),t("p",[a._v("在 "),t("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-server/src/main/resources/application-local.yaml",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("application-local.yaml")]),a._v(" "),t("OutboundLink")],1),a._v("配置文件中，通过 "),t("code",[a._v("spring.datasource.druid")]),a._v(" 配置项，仅仅设置了 Druid "),t("strong",[a._v("监控")]),a._v("相关的配置项目，具体数据库的设置需要使用 Dynamic Datasource 的配置项。如下图所示：")]),a._v(" "),t("img",{attrs:{src:r(569)}}),a._v(" "),t("h3",{attrs:{id:"_1-2-druid-监控界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-druid-监控界面"}},[a._v("#")]),a._v(" 1.2 Druid 监控界面")]),a._v(" "),t("p",[a._v("① 访问后端的 "),t("code",[a._v("/druid/index.html")]),a._v(" 路径，例如说本地的 "),t("code",[a._v("http://127.0.0.1:48080/druid/index.html")]),a._v(" 地址，可以查看到 Druid 监控界面。如下图所示：")]),a._v(" "),t("img",{attrs:{src:r(570)}}),a._v(" "),t("p",[a._v("② 访问前端的 [基础设施 -> MySQL 监控] 菜单，也可以查看到 Druid 监控界面。如下图所示：")]),a._v(" "),t("img",{attrs:{src:r(571)}}),a._v(" "),t("h2",{attrs:{id:"_2-多数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-多数据源"}},[a._v("#")]),a._v(" 2. 多数据源")]),a._v(" "),t("p",[a._v("友情提示：")]),a._v(" "),t("p",[a._v("如果你未学习过多数据源，可以后续阅读 "),t("a",{attrs:{href:"http://www.iocoder.cn/Spring-Boot/dynamic-datasource/?yudao",target:"_blank",rel:"noopener noreferrer"}},[a._v("《芋道 Spring Boot 多数据源（读写分离）入门》 "),t("OutboundLink")],1),a._v("文章。")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.baomidou"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("dynamic-datasource-spring-boot-starter"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-1-多数据源配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-多数据源配置"}},[a._v("#")]),a._v(" 2.1 多数据源配置")]),a._v(" "),t("p",[a._v("在 "),t("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-server/src/main/resources/application-local.yaml#L30-L58",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("application-local.yaml")]),a._v(" "),t("OutboundLink")],1),a._v("配置文件中，通过 "),t("code",[a._v("spring.datasource.dynamic")]),a._v(" 配置项，配置了 Master-Slave 主从两个数据源。如下图所示：")]),a._v(" "),t("img",{attrs:{src:r(572)}}),a._v(" "),t("h3",{attrs:{id:"_2-2-数据源切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-数据源切换"}},[a._v("#")]),a._v(" 2.2 数据源切换")]),a._v(" "),t("h4",{attrs:{id:"_2-2-1-master-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-master-注解"}},[a._v("#")]),a._v(" 2.2.1 @Master 注解")]),a._v(" "),t("p",[a._v("在方法上添加 "),t("a",{attrs:{href:"https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/annotation/Master.java",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("@Master")]),a._v(" "),t("OutboundLink")],1),a._v("注解，使用名字为 "),t("code",[a._v("master")]),a._v(" 的数据源，即使用【主】库，一般适合【写】场景。示例如下图：")]),a._v(" "),t("img",{attrs:{src:r(573)}}),a._v(" "),t("p",[a._v("由于项目的 "),t("code",[a._v("spring.datasource.dynamic.primary")]),a._v(" 为 "),t("code",[a._v("master")]),a._v("，默认使用【主】库，所以无需手动添加 "),t("code",[a._v("@Master")]),a._v(" 注解。")]),a._v(" "),t("h4",{attrs:{id:"_2-2-2-slave-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-slave-注解"}},[a._v("#")]),a._v(" 2.2.2 @Slave 注解")]),a._v(" "),t("p",[a._v("在方法上添加 "),t("a",{attrs:{href:"https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/annotation/Slave.java",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("@Slave")]),a._v(" "),t("OutboundLink")],1),a._v("注解，使用名字为 "),t("code",[a._v("slave")]),a._v(" 的数据源，即使用【从】库，一般适合【读】场景。示例如下图：")]),a._v(" "),t("img",{attrs:{src:r(574)}}),a._v(" "),t("h4",{attrs:{id:"_2-2-3-ds-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-ds-注解"}},[a._v("#")]),a._v(" 2.2.3 @DS 注解")]),a._v(" "),t("p",[a._v("在方法上添加 "),t("a",{attrs:{href:"https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/annotation/DS.java",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("@DS")]),a._v(" "),t("OutboundLink")],1),a._v("注解，使用指定名字的数据源，适合多数据源的情况。示例如下图：")]),a._v(" "),t("img",{attrs:{src:r(575)}}),a._v(" "),t("h3",{attrs:{id:"_2-3-分布式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-分布式事务"}},[a._v("#")]),a._v(" 2.3 分布式事务")]),a._v(" "),t("p",[a._v("在使用 Spring "),t("code",[a._v("@Transactional")]),a._v(" 声明的事务中，无法进行数据源的切换，此时有 3 种解决方案：")]),a._v(" "),t("p",[a._v("① 拆分成多个 Spring 事务，每个事务对应一个数据源。如果是【写】场景，可能会存在多数据源的事务不一致的问题。")]),a._v(" "),t("p",[a._v("② 引入 Seata 框架，提供完整的分布式事务的解决方案，可学习 "),t("a",{attrs:{href:"https://www.iocoder.cn/Seata/install/?yudao",target:"_blank",rel:"noopener noreferrer"}},[a._v("《芋道 Seata 极简入门 》 "),t("OutboundLink")],1),a._v("文章。")]),a._v(" "),t("p",[a._v("③ 使用 Dynamic Datasource 提供的 "),t("a",{attrs:{href:"https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/annotation/DSTransactional.java",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("@DSTransactional")]),a._v(" "),t("OutboundLink")],1),a._v("注解，支持多数据源的切换，不提供绝对可靠的多数据源的事务一致性（强于 ① 弱于 ②），可学习 "),t("a",{attrs:{href:"https://www.yinxiang.com/everhub/note/ac0175c8-35f5-4d66-8cd3-c662d7a16441",target:"_blank",rel:"noopener noreferrer"}},[a._v("《DSTransactional 实现源码分析 》 "),t("OutboundLink")],1),a._v("文章。")]),a._v(" "),t("h2",{attrs:{id:"_3-分库分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-分库分表"}},[a._v("#")]),a._v(" 3. 分库分表")]),a._v(" "),t("p",[a._v("建议采用 ShardingSphere 的子项目 Sharding-JDBC 完成分库分表的功能，可阅读 "),t("a",{attrs:{href:"https://www.iocoder.cn/Spring-Boot/sharding-datasource/?yudao",target:"_blank",rel:"noopener noreferrer"}},[a._v("《芋道 Spring Boot 分库分表入门 》 "),t("OutboundLink")],1),a._v("文章，学习如何整合进项目")])])}),[],!1,null,null,null);t.default=e.exports},569:function(a,t,r){a.exports=r.p+"assets/img/img_166.effec3bf.png"},570:function(a,t,r){a.exports=r.p+"assets/img/img_167.ce2387e4.png"},571:function(a,t,r){a.exports=r.p+"assets/img/img_168.a79e1c07.png"},572:function(a,t,r){a.exports=r.p+"assets/img/img_169.735573be.png"},573:function(a,t,r){a.exports=r.p+"assets/img/img_170.7c66424d.png"},574:function(a,t,r){a.exports=r.p+"assets/img/img_171.7c243f47.png"},575:function(a,t,r){a.exports=r.p+"assets/img/img_172.f4c70667.png"}}]);