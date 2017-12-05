import React from 'react'
import styles from './Monitor.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'
import * as actions from '../../redux/action/index'
import * as servers from '../../servers/Monitor'

class Monitor extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount (){
        console.log(this,this.props.state.firstIndex,'8888888888888');
            // this.props.getFoodListAction(actions.getTest(this.props.dispatch,this.props.state.firstIndex,this.props.state.secondIndex));
        
    }
    getListFun = (firstIndex,secondIndex) => {
        servers.getFoodListFun({}).then((res) => {
            this.props.dispatch(actions.saveReducer(res.data,firstIndex,secondIndex))
        })
        // this.props.getFoodListAction(actions.getTest(this.props.dispatch,firstIndex,secondIndex));
    };
    render(){
        // debugger;
        console.log(this.props)
        if(this.props.state.secondIndex == window.location.pathname.slice(1) && this.props.state.foodList.length == 0){
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
                        this.props.state.foodList.map((item,index) => (
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
        getFoodListAction:(params) => dispatch({type:params})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Monitor);