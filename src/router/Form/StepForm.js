import React from 'react'
import styles from './StepForm.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'; 
import { Link,BrowserRouter as Router} from 'react-router-dom';
import * as actions from '../../redux/action/index'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
class StepForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {nextFormAction} = this.props;
        console.log(this.props,'\\\\\\\\\\');
        // console.log(this.props,"表单页");
        // console.log(this);
        return(
                <div className={styles.stepForm}>
                    {/* <Title text="分步表单页面！！！"/> */}
                    <div className={styles.form_box}>  
                        <h3>填写转账信息</h3>
                        {/* <p> */}
                            {/* <button>上一步</button> */}
                        <form>
                            <div>
                                <label><span>付款账户：</span><input type="text" ref="name" /></label>
                            </div>
                            <div>
                                <label><span>收款账户：</span><input type="password" ref="pw" /></label>
                            </div>
                            <div>
                                <label><span>收款人姓名：</span><input type="text" ref="name" /></label>
                            </div>
                            <div>
                                <label><span>转账金额：</span><input type="text" ref="name" /></label>
                            </div>
                        </form>
                        <p>
                            <button onClick={nextFormAction.bind(this, this)} className={styles.btn}>下一步</button>
                        </p>
                        {/* <Link to="/step-form/confirm">下一步</Link> */}
                        {/* </p> */}
                    </div>  
                </div>
        )
    }
}
function mapStateToProps(state){
    // const {stepFormPage} = state;
    // return{
    //     stepFormPage,
    // }
    const {
        active,
        firstIndex,
        secondIndex,
        stepFormPage
    } = state
    return {
        active,
        firstIndex,
        secondIndex,
        stepFormPage
    }
}
function mapDispatchToProps(dispatch){
    return {
        nextFormAction:(me) => {
            // history.push('/step-form/confirm');
            me.props.history.push(actions.nextFormPage.type)
            // me.props.location.pathname = me.props.match.path = me.props.match.url = actions.nextFormPage.type
            dispatch(actions.nextFormPage)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StepForm);