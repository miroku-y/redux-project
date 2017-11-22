import React from 'react'
import styles from './BasicForm.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'; 
import * as actions from '../../redux/action/index'

class BasicForm extends React.Component{
    
    render(){
        const {text} = this.props;
        const { changeTextAction,onButtonClick } = this.props;
        return(
            <div className={styles.basicForm}>
                <Title text="基础表单页面！！！"/>
                <div>  
                    <h1 onClick={changeTextAction}> {text}</h1>  
                    <button onClick={onButtonClick}>click me</button>  
                </div>  
            </div>
        )
    }
}
function mapStateToProps(state){
    const {text} = state;
    return {
        text
    }
}
function mapDispatchToProps(dispatch){
    return {
            onButtonClick:() => dispatch(actions.buttonClickAction),
            changeTextAction:() => dispatch(actions.changeTextAction)
        }
}   
BasicForm = connect(mapStateToProps,mapDispatchToProps)(BasicForm);
export default BasicForm;