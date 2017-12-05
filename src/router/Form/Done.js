import React from 'react'
import styles from './Done.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'; 
import * as actions from '../../redux/action/index'
import {Link} from "react-router-dom"

class Done extends React.Component{
    
    render(){
        const {nextFormAction} = this.props;
        return(
            <div className={styles.done}>
                {/* <Title text="分步表单页面！！！"/> */}
                <div className={styles.form_box}>  
                    <h3>转账完成</h3>
                    <p>扣款成功后，系统会在2小时内以短信的形式通知你。</p>
                </div>  
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state);
    const {secondIndex} = state;
    return{
        secondIndex,
    }
}
function mapDispatchToProps(dispatch){
    return {
        nextFormAction:() => dispatch(actions.nextFormPage)
    }
}
export default Done;
// export default connect(mapStateToProps,mapDispatchToProps)(Confirm);