import React from 'react';
// import Sider from './Sider';
import Content from './Content';
import styles from './Layout.less';
import elk from '../../images/elk.png';
import Analysis from '../../router/Dashboard/Analysis';
import Monitor from '../../router/Dashboard/Monitor';
import BasicForm from '../../router/Form/BasicForm';
import StepForm from '../../router/Form/StepForm';
import Confirm from '../../router/Form/Confirm';
import BasicTable from '../../router/Table/BasicTable';
import Header from './Header';
import classNames from 'classnames'
import {Link,Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {getRouteData} from '../../utils/utils';

const data = [
    {
        component:'BasicLayout',
        layout:'BasicLayout',
        name:'首页',
        path:'',
        children:[
            {
                name:'Dashboard',
                icon:'dashboard',
                path:'dashboard',
                children:[
                    {
                        name:'分析页',
                        path:'analysis',
                        component:Analysis
                    },
                    {
                        name:'监控页',
                        path:'monitor',
                        component:Monitor
                    },
                    
                ]
            },
            {
                name:'表单页',
                icon:'form',
                path:'form',
                children:[
                    {
                        name:'基础表单',
                        path:'basic-form',
                        component:BasicForm
                    },
                    {
                        name:'分步表单',
                        path:'step-form',
                        component:StepForm,
                        children:[
                            {
                                path:'confirm',
                                component:Confirm
                            }
                        ]
                    }
                ]
            },
            {
                name:'列表页',
                icon:'table',
                path:'table',
                children:[
                    {
                        name:'基础表格',
                        path:'basic-table',
                        component:BasicTable,
                    }
                ]
            }
        ]
    }
];
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const pathname = window.location.pathname.slice(1);
        //F5刷新后重新dispatch改变状态
        this.props.lineHeightAction(pathname);
    }
    checkSecond( name ){
        return name === this.props.secondIndex ? `${styles['active']}` : `${styles['tab_title']}`
    }
    checkFirst = (name) =>{
        return name === this.props.firstIndex ? `${styles['show']}` : `${styles['secondMain']}`
    }
    render(){
        const cloums = data[0].children;
        // console.warn(this.props);
        // const NavData = getRouteData('BasicLayout');
        // console.log(NavData,'\\\\\\\\\\');
        const {
            active,
            firstIndex,
            secondIndex,
            firstIndexAction,
            checkSecondAction,
        } = this.props;
        return(
                <Router>
                    <div className={styles.container}>
                    <div className={styles.sider_main}>
                        <div className={styles.logo}>
                            <span><img src={elk}/></span>
                            <h3>My Project</h3>
                        </div>
                        <ul className={styles.sider}>
                            {
                            cloums.map((item)=>{
                                const secondItem = item.children;
                                return(
                                    <li key={item.path}>
                                        <div className={styles.firstIndex_class} onClick={ firstIndexAction.bind(this,item.path)}>
                                            <span className={styles.bg_img}>
                                                <img src={`./src/images/${item.path}.png`}/>
                                            </span>
                                            {item.name}
                                        </div>
                                        <ol className={this.checkFirst(item.path)}>
                                            {
                                                secondItem.map((second,index)=>{
                                                    return(
                                                        // <li className={this.checkSecond(second.path)} onClick={checkSecondAction.bind(this,second.path)}  key={second.path}>
                                                        <li className={this.checkSecond(second.path)}  onClick={checkSecondAction.bind(this,second.path)} key={second.path}>
                                                            {/* <Link to={"/"+item.path+"/"+second.path} className={styles.link_a}>{second.name}</Link> */}
                                                            <Link to={"/"+second.path} className={styles.link_a}>{second.name}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </li>
                                )
                            }) 
                            }
                        </ul>
                        {/* <Sider /> */}
                    </div>
                    <div className={styles.content_box}>
                        <Header/>
                        <div className={styles.view}>
                            {this.props.children}
                        </div>
                        {/* <Switch className={styles.view}>
                            {
                                NavData.map((item) => (
                                    <Route
                                        exact={item.exact}
                                        key={item.path}
                                        path={item.path}
                                        component={item.component}
                                    >
                                    </Route>
                                ))
                            }
                            <Redirect to="/table/basic-table"/>
                        </Switch> */}
                    </div>
                </div>
                </Router>
        )
    }
}
function mapStateToProps(state){
    // console.log(state);
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
        firstIndexAction:(path) => dispatch({type:path}),
        checkSecondAction:(path) => dispatch({type:path}), 
        //F5刷新
        lineHeightAction:(pathname) => {
            const params = {};
            const firstItem = data[0].children
            firstItem.map((item) => {
                let secondItem = item.children;
                secondItem.map((secondItem) => {
                    if(secondItem.path == pathname){
                        params.type = pathname;
                        params.lineHeight = item.path;
                    }
                })
            })
            dispatch({type:params})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);






