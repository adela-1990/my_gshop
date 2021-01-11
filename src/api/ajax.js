// 封装一个ajax请求函数模块，返回值：promise
import axios from 'axios'


export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function(reslove, reject) {
        let promise
        if (type === 'GET') {
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }
        promise.then(response => {
            reslove(response.data)
        }).catch(error => { reject(error) })
    })

}