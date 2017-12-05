import React from 'react'
import Title from '../../../components/commont/Title'
import styles from './index.less'
import { connect } from 'react-redux'
import * as servers from '../../../servers/Monitor'

class Login extends React.Component {
    registerHandle = () => {
        if (this.refs.name.value == '' || this.refs.pw.value == '') {
            return alert('请填写信息！！！');
        }
        this.props.registerAction({ 'username': this.refs.name.value, 'password': this.refs.pw.value });
    }
    render() {
        return (
            <div className={styles.login}>
                <Title text="登录页面！！！" />
                <div className={styles.container}>
                    <div>
                        <form className={styles.form_group}>
                            <div className={styles.group_item}>
                                <label><span>用户名：</span><input type="text" ref="name" /></label>
                            </div>
                            <div className={styles.group_item}>
                                <label><span>密码：</span><input type="password" ref="pw" /></label>
                            </div>
                            <div className={styles.group_item}>
                                <span className={styles.button} onClick={this.registerHandle.bind(this)}>登录</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        registerAction: (params) => {
            // debugger;
            servers.loginFun(params).then(
                (res) => {
                    alert(res.message);
                }
            );
            dispatch(
                {
                    type: 'login',
                    payload: params,
                }
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);