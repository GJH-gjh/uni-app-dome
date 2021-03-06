/**
 * 全局配置文件
 * @version 1.0.0
 */

const ENV_BASE_URL = {
    development: 'http://test.mzdpgroup.com', //开发环境
    production: 'http://pos.mzdpgroup.com', //生产环境
}
const ENV_API_URL = {
    development: `${ENV_BASE_URL.development}/mzdp-mobile-new/`, //开发环境
    production: `${ENV_BASE_URL.production}/mzdp-mobile-new/`, //生产环境
}

export const BASE_URL = ENV_BASE_URL[process.env.NODE_ENV || 'development']; //后台根域名
export const API_URL = ENV_API_URL[process.env.NODE_ENV || 'development']; //后台接口域名
// export const HAS_LIVE = false; //后台是否开通直播权限,根据情况在manifest.json中，开启注释相应组件的引入。

// export const IMG_URL = 'https://shopro.7wpp.com'; //全局网络图片地址变量，css背景图片地址变量在uni.scss