import React from 'react'
import styles from './Page.less'
import {connect} from 'react-redux'
import * as servers from '../../servers/Monitor'
import * as actions from '../../redux/action/index'

class Page extends React.Component{
    render(){
        let { page, pageSize, total} = this.props.state.monitorPages;
        console.log(this.props);
        //计算总页数
        let countPage = Math.ceil(total / pageSize);
        return (
            <div className={styles.pages}>
                <ul>
                    <li><button onClick={this.props.prev.bind(this, page, pageSize, countPage, this.props.state.firstIndex, this.props.state.secondIndex)}>上一页</button></li>
                    <li><button onClick={this.props.next.bind(this, page, pageSize, countPage, this.props.state.firstIndex, this.props.state.secondIndex)}>下一页</button></li>
                    <li className={styles.text}><span>当前第</span><input />页</li>
                    <li className={styles.text}><span>总共</span><input />页</li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    // console.log(state,'5555555555555');
    return {
        state,
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatch,
        prev:(page,pageSize,countPage,firstIndex,secondIndex) => {
            page--;
            if(page!=0){
                servers.getFoodListFun({ page: page, pageSize: pageSize }).then((res) => {
                    if (res.code == -1) {
                        alert('参数未传入');
                    } else {
                        dispatch(actions.saveReducer(res.data, firstIndex, secondIndex, page))
                    }
                })
            }else{
                alert('没法前进了');
            }
        },
        next: (page, pageSize, countPage, firstIndex, secondIndex) => {
            // debugger;
            if (countPage>page) {
                page++;
                servers.getFoodListFun({ page:page, pageSize:pageSize }).then((res) => {
                    if (res.code == -1) {
                        alert('参数未传入');
                    } else {
                        dispatch(actions.saveReducer(res.data, firstIndex, secondIndex,page))
                    }
                })
            }else{
                alert('没法后退了');
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Page);