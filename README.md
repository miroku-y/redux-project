#   react + react-router@4 + redux + webpack + es6/7

#   前言
    >   之前参与的项目都是使用到了蚂蚁金服的ANTD，这个UI组件虽然好用，项目开发效率高，但对于react-route的认知不会太深，对redux的使用过于方便，不利于学习，完全没有开发思路可言，纯粹的搬运工，这个项目好更深一点的练练手
     
#   说明
    >   是一个PC端的后台管理项目
    >   引用react、react-router@4
    >   引用redux进行状态管理
    >   引用mockjs进行数据渲染
    >   引用webpack进行打包编译，编码规范参照es6/7

#   项目运行
    >   cnpm install
    >   npm run dev
    >   如果要让登录、注册、监测页面进行交互，就要本地起个服务
        >phpStudy方便快捷，将项目中src/php文件夹丢入phpStudy指向的WWW文件中，运行phpStudy即可
        >注意请求路径，各人本地结构不一样，需要修改项目中接口路径

#   项目概览
    >   登录页面实现能校验错误信息；注册页面能够校验重复信息，将正确注册信息存入
   <img src="https://github.com/yangdongMC/redux-project/blob/master/src/images/project1.png"/>

    >   基础表格页面,使用mock构建的虚拟数据
   <img src="https://github.com/yangdongMC/redux-project/blob/master/src/images/project2.png"/>  

    >   分步表单页面,使用react-router@4实现嵌套子页面进行表单提交
   <img src="https://github.com/yangdongMC/redux-project/blob/master/src/images/project3.png"/>

    >   数据分析页面,使用echarts图表进行数据展示
   <img src="https://github.com/yangdongMC/redux-project/blob/master/src/images/project4.png"/>

    >   监控页面,实现分页功能
   <img src="https://github.com/yangdongMC/redux-project/blob/master/src/images/project5.png"/>