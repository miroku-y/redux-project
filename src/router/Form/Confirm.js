import React from 'react'
import styles from './Confirm.less'
import Title from '../../components/commont/Title'
import { connect } from 'react-redux'; 
import * as actions from '../../redux/action/index'
import {Link} from "react-router-dom"

class Confirm extends React.Component{
    
    render(){
        const {nextFormAction} = this.props;
        return(
            <div className={styles.confirm}>
                {/* <Title text="分步表单页面！！！"/> */}
                <div className={styles.form_box}>  
                    <h3>确认账户信息</h3>
                    <form>
                        <div>
                            <label><span>付款账户：</span><b>6210859987415623109</b></label>
                        </div>
                        <div>
                            <label><span>收款账户：</span><b>6201002598674521879</b></label>
                        </div>
                        <div>
                            <label><span>收款人姓名：</span><b>yangdong</b></label>
                        </div>
                        <div>
                            <label><span>转账金额：</span><b>10000000</b></label>
                        </div>
                    </form>
                    {/* <button>上一步</button> */}
                    <p>
                        <Link to="/step-form" className={styles.btn}>上一步</Link>
                        <button className={styles.btn}>提交</button>
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