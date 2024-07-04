/*  vite打包工具
        vite 相较于webpack，vite采用了不同的运行方式
            * 开发时，并不对代码打包，而是直接采用esm的方式来运行项目   
            * 在项目部署时，在对项目进行打包
            * 默认源码地址为根目录
        yarn vite : 启动开发服务器
        yarn build : 打包项目
        yarn vite perview : 预览打包后的代码
    vite自动化构建
        yarn create vite 或 npm run vite@latest 或 pnpm create vite

    vite 配置文件
        yarn add
*/
import m1 from './m1'

// 引入css
import './css/index.css'

//
document.body.insertAdjacentHTML('beforeend', `<h2>vite</h2>`)

//
m1.h1();

