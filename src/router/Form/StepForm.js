import React from 'react'
import styles from './StepForm.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'; 
import * as actions from '../../redux/action/index'

class StepForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {nextFormAction} = this.props;
        // console.log(this);
        return(
            <div className={styles.stepForm}>
                <Title text="分步表单页面！！！"/>
                <div>  
                    <h3>分步表单第一步！！</h3>
                    <p>
                        <button>上一步</button>
                        <button onClick={nextFormAction.bind(this,this)}>下一步</button>
                    </p>
                </div>  
            </div>
        )
    }
}
function mapStateToProps(state){
    const {stepFormPage} = state;
    return{
        stepFormPage,
    }
}
function mapDispatchToProps(dispatch){
    return {
        nextFormAction:(me) => {
            me.props.history.push(actions.nextFormPage.type)
            me.props.location.pathname = me.props.match.path = me.props.match.url = actions.nextFormPage.type
            dispatch(actions.nextFormPage)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StepForm);