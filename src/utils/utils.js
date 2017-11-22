import React from 'react';
import navData from '../components/commont/Nav';
import cloneDeep from 'lodash/cloneDeep';

export function getPlainNode(nodeList, parentPath = ''){
    // console.log(nodeList)
    const arr = [];
    nodeList.forEach((node) => {
      const item = node;
      item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
      item.exact = true;
      if (item.children && !item.component) {//在这区分一级目录
        arr.push(...getPlainNode(item.children, item.path));
      } else {//在这区分二级目录
        if (item.children && item.component) {
          item.exact = false;
        }
        arr.push(item);
      }
    });
    return arr;
}
export function getRouteData(path){
    const dataList = cloneDeep(navData.filter(item => item.layout === path)[0]);
    const nodeList = getPlainNode(dataList.children);
    // console.log(dataList)
    return nodeList;
}