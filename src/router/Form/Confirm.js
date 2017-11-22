import React from 'react'
import styles from './Confirm.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'; 
import * as actions from '../../redux/action/index'

class Confirm extends React.Component{
    
    render(){
        const {nextFormAction} = this.props;
        return(
            <div className={styles.stepForm}>
                <Title text="分步表单页面！！！"/>
                <div>  
                    <h3>分步表单第二步！！</h3>
                    <p>
                        <button>上一步</button>
                        <button>提交</button>
                    </p>
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
export default Confirm;
// export default connect(mapStateToProps,mapDispatchToProps)(Confirm);