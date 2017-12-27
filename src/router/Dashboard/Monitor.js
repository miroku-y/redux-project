import React from 'react'
import styles from './Monitor.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'
import * as actions from '../../redux/action/index'
import * as servers from '../../servers/Monitor'
import Page from '../../components/commont/Page'

class Monitor extends React.Component{
    constructor(props){
        super(props);
    }
    state={
        init:true
    }
    getListFun = (firstIndex,secondIndex) => {
        let {page,pageSize} = this.props.state.monitorPages;
        servers.getFoodListFun({page:page,pageSize:pageSize}).then((res) => {
            this.setState({
                init:false,
            });
            if(res.code == -1){
                alert('参数未传入');
            }else{
                // console.log(this.props)
                this.props.editTotalAction(res.data.total, firstIndex, secondIndex,pageSize);
                this.props.dispatch(actions.saveReducer(res.data,firstIndex,secondIndex))
            }
        })
    };
    render(){
        // debugger;
        if (this.props.state.secondIndex == window.location.pathname.slice(1) && this.props.state.monitorPages.foodList.length == 0&&this.state.init){
            this.getListFun(this.props.state.firstIndex,this.props.state.secondIndex)
        }
        return(
            <div className={styles.monitor}>
                <Title text="监控页面！！！"/>
                <div className={styles.table}>
                    <ul className={styles.table_header}>
                        <li style={{width:'5%'}}><span>DID</span></li> 
                        <li style={{width:'10%'}}><span>IMG_SM</span></li>
                        <li style={{width:'15%'}}><span>NAME</span></li>
                        <li style={{width:'5%'}}><span>PRICE</span></li>
                        <li style={{width:'40%'}}><span>DETAIL</span></li>
                        <li style={{width:'20%'}}><span>MATERIAL</span></li>
                    </ul>
                    {
                        this.props.state.monitorPages.foodList.map((item,index) => (
                            <ol className={styles.table_body} key={item.did}>
                                <li style={{width:'5%'}}><span>{item.did}</span></li>
                                <li style={{width:'10%'}}><span><img src={`http://www.kfl.com/img/${item.img_sm}`}/></span></li>
                                <li style={{width:'15%'}}><span>{item.name}</span></li>
                                <li style={{width:'5%'}}><span>{item.price}</span></li>
                                <li style={{width:'40%'}}><span>{item.detail}</span></li>
                                <li style={{width:'20%'}}><span>{item.material}</span></li>
                            </ol>
                        ))
                    }
                    <Page pages={this.props.monitorPages}/>    
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        state
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatch,
        getFoodListAction:(params) => dispatch({type:params}),
        editTotalAction: (total, firstIndex, secondIndex, page, pageSize) => {
            let totalPamase = {
                'firstIndex':firstIndex,
                'secondIndex':secondIndex,
                'monitorPages':{
                    'total': total,
                    'page': page,
                    'pageSize': pageSize,
                }
            }
            dispatch({ type: totalPamase })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Monitor);