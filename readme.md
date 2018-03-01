### 什么是webpack?
    webpack是一个用以对现代Javascript应用程序模块打包工具，它和gulp、grunt的不同之处在于webpack提供了
一整套前端模块化开发的解决法案；webpack把资源作为模块来处理，这里的资源不止于javascript,还包括html、
css、图片、字体等等。

### webpack的优点
1. 代码分割（code splitting），在开发过程中，webpack允许我们将代码按照不同职能分割成不同模块进行开发，并且在加载中可以按需加载，减少加载时间。
2. 插件化，webpack提供了丰富的插件接口，通过配置不同的插件，可以实现我们想要的效果，非常灵活。
3. 装载机制，webpack中，我们可以通过提供的loaders预处理项目文件，包括js、css、html、image等。
4. 高性能，webpack使用异步I/O流加载模块，并具有多个缓存级别，在渐进式编译中，速度表现很棒。
5. 开发方便，weback提供sourceMap和sourceUrl,方便开发者定位调试，并且通过中间件可以实现项目的热更新，这个在开发中很有作用。



