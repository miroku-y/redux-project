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
                        <li><span>did</span></li> 
                        <li><span>img_sm</span></li>
                        <li><span>name</span></li>
                        <li><span>price</span></li>
                        <li><span>detail</span></li>
                        <li><span>material</span></li>
                    </ul>
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