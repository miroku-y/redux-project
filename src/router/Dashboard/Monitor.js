import React from 'react'
import styles from './Monitor.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'
import * as actions from '../../redux/action/index'

class Monitor extends React.Component{
    componentDidMount(){
        // console.log(this.props,'8888888888888');
        this.props.getFoodListAction(actions.getTest());
        
    }
    render(){
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
        getFoodListAction:(params) => dispatch({type:params||'SAVE_REDUCER'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Monitor);