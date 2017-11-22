import React from 'react';
// import styles from './Layout.less';
import Analysis from '../../router/Dashboard/Analysis';
import Monitor from '../../router/Dashboard/Monitor';
import BasicForm from '../../router/Form/BasicForm';
import StepForm from '../../router/Form/StepForm';
import BasicTable from '../../router/Table/BasicTable';
import classNames from 'classnames';
import  { BrowserRouter as StaticRouter, Router, Switch, Route, Link } from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';
const   customHistory = createBrowserHistory();

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
                        component:StepForm
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

// class Sider extends React.Component{
//     state={
//         active:false,
//         secondIndex:'monitor',
//         firstIndex:'dashboard'
//     }
//     checkSecond( name ){
//         return name === this.state.secondIndex ? `${styles['active']}` : `${styles['tab_title']}`
//     }
//     checkFirst = (name) =>{
//         return name === this.state.firstIndex ? `${styles['show']}` : `${styles['secondMain']}`
//     }
//     render(){
//         const cloums = data[0].children;
//         return(
//             <ul className={styles.sider}>
//                 {
//                    cloums.map((item)=>{
//                         const secondItem = item.children;
//                         return(
//                             <li key={item.path}>
//                                 <div onClick={ () => {this.setState({firstIndex:item.path})}}>{item.name}</div>
//                                 <ol className={this.checkFirst(item.path)}>
//                                     {
//                                         secondItem.map((second,index)=>{
//                                             return(
//                                                 <li className={this.checkSecond(second.path)} onClick={ () => { this.setState({ secondIndex : second.path }) } }  key={second.path}>
//                                                     <Router history={customHistory}>
//                                                         <Link to={'/'+second.path} className={styles.link_a}>{second.name}</Link>
//                                                     </Router>
//                                                 </li>
//                                             )
//                                         })
//                                     }
//                                 </ol>
//                             </li>
//                         )
//                    }) 
//                 }
//             </ul>
//         )
//     }
// }
// export default Sider;
export default data;
