var http = require('http');
import { config } from './config';
import { url } from '../untils/index';
var options = {
    hostname: config.host,
    port: config.port,
    basePath: '',
    path: '',
    method: '',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Length': '0'
    }
};
/**
 * get 请求封装
 * @param path String 路径
 * @param data Object 参数
 * @return {Promise<any>}
 */
export const get = function (path: string, data?: object) {
    options.method = 'GET';
    options.path = path
    // console.log('options', options);
    // options.path = url.urlSerialization(path,data);
    return new Promise((resolve, reject) => {
            var $http = http.request(options, (res: any) => {
                // console.log('STATUS: ' + res.statusCode);
                // console.log('HEADERS: ' + JSON.stringify(res.headers));
                res.setEncoding('utf8');
                res.on('data', (data: any) => {
                    try {
                        if (typeof data === 'string') data = JSON.parse(data)
                        resolve(data)
                    } catch (e) {
                        reject(data)
                    }
                });
            });
            $http.on('error', (e: any) => {
                console.log('错误: ' + e.message);
                reject(e)
            });
        $http.end();
    })
};
/**
 * post 请求封装
 * @param path String 路径
 * @param data Object 参数
 * @return {Promise<any>}
 */
export const post = function (path: string, data: any) {
    data = JSON.stringify(data)
    options.method = 'POST';
    options.path = path
    options.headers['Content-Type'] = 'application/json'
    options.headers['Content-Length'] = data.length
    return new Promise((resolve, reject) => {
        var $http = http.request(options, (res: any) => {
            // console.log('STATUS: ' + res.statusCode);
            // console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', (data: any) => {
                try {
                    if (typeof data === 'string') data = JSON.parse(data)
                    resolve(data)
                } catch (e) {
                    reject(data)
                }
            });
        });
        $http.on('error', (e: any) => {
            console.log('错误: ' + e.message);
            reject(e)
        });
        $http.write(data + "\n"); //发送请求
        $http.end();
    })
}