import 'whatwg-fetch';
import {browserHistory} from 'react-router';
export function delQueStr(url, ref) {
    var str = "";
    if (url.indexOf('?') != -1) {
        str = url.substr(url.indexOf('?') + 1);
    } else {
        return url;
    }
    var arr = "";
    var returnurl = "";
    var setparam = "";
    if (str.indexOf('&') != -1) {
        arr = str.split('&');
        for (var i in arr) {
            if (arr.hasOwnProperty(i)) {
                if (arr[i].split('=')[0] != ref) {
                    returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
                }
            }
        }
        return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
    } else {
        arr = str.split('=');
        if (arr[0] == ref) {
            return url.substr(0, url.indexOf('?'));
        } else {
            return url;
        }
    }
}
export function getUrlParam(name) {
    var reg = new RegExp("[?&]" + name + "=([^&]*)");
    var r = location.href.match(reg);
    if (r != null) return unescape(r[1]);
    return '';
}
export function formUrlencodedData(data) {
    let str = "";
    for (let i in data) {
        if (data.hasOwnProperty(i)) {
            str = str + i + "=" + data[i] + "&";
        }
    }
    return str ? str.substring(0, str.length - 1) : '';
}

function errHandle(res) {
    if (res.errcode == -1) {
        alert(res.errmsg);
    }
}

function parse(res) {
    return res.json().then(response => {
        if (!response) {
            throw "服务器返回数据错误";
        }
        if (response.errcode == 40001) {
             window.localStorage.setItem("token", "");
             window.location.hash = "/login";
            throw "token失效,请刷新页面";
        }
        if (response.errcode == -1) {
          //  window.localStorage.setItem("token", "");
            // window.location.hash = "/login";
            throw response;
        }
        return response;
    });
}
export function ajaxApi(url, options = {}) {
    url = 'http://www.kfl.com' + url;
    let params = {},
        method = options.method || 'get',
        data = options.data || {};
    //  if (!TOKEN) window.location.reload();
    data['token'] = window.localStorage.getItem("token");
    params.method = method;
    switch (method) {
        case 'post':
            params.headers = {};
            params.body = formUrlencodedData(data);
            params.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
            break;
        case 'get':
            url = url + (data ? ('?' + formUrlencodedData(data)) : '');
        default:
    }
    return fetch(url, params).then(parse).catch(errHandle);
}


export function trim(str) {
    if (!str) return false;
    return str.replace(/(^\s*)|(\s*$)/g, "");
};
export function isBothSpace(ui){
    var   valid=/(^\s)|(\s$)/; 
    return   (valid.test(ui));
}