import React from 'react'
import Title from '../../../components/commont/Title'
import styles from './index.less'
import {connect} from 'react-redux'
import * as servers from '../../../servers/Monitor'

class Register extends React.Component{
    registerHandle = () => {
        if (this.refs.name.value == '' || this.refs.pw.value == '' || this.refs.pw_ok.value == ''){
            return alert('请填写信息！！！');
        }
        this.props.registerAction({'username':this.refs.name.value,'password':this.refs.pw.value});
    }
    render(){
        return (
            <div className={styles.register}>
                <Title text="注册页面！！！【能够将注册信息录入，对重复信息会进行提示并阻止录入。】"/>
                <div className={styles.container}>
                    <div className={styles.form_box}>
                        <form className={styles.form_group}>
                            <div className={styles.group_item}>
                                <label><span>用户名：</span><input type="text" ref="name"/></label>
                            </div>
                            <div className={styles.group_item}>
                                <label><span>密码：</span><input type="password" ref="pw"/></label>
                            </div>
                            <div className={styles.group_item}>
                                <label><span>确认密码：</span><input type="password" ref="pw_ok"/></label>
                            </div>
                            <div className={styles.group_item}>
                                <span className={styles.button} onClick={this.registerHandle.bind(this)}>注册</span>
                            </div>
                        </form>
                    </div>
                    <div className={styles.show_box}>1256</div>
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
        registerAction:(params) => {
            // debugger;
            servers.registerFun(params).then(
                (res) => {
                    alert(res.message);
                }
            );
            dispatch(
                {
                    type:'register',
                    payload:params,
                }
            )
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);