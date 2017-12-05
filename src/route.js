import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from 'history';
import createHistory from 'history/createHashHistory';
import Analysis from './router/Dashboard/Analysis';
import Monitor from './router/Dashboard/Monitor';
import BasicForm from './router/Form/BasicForm';
import StepForm from './router/Form/StepForm';
import Confirm from './router/Form/Confirm';
import BasicTable from './router/Table/BasicTable';
import Login from './router/User/Login';
import Register from './router/User/Register';
import Main from './components/Layout/Main';
import Title from './components/commont/Title'

// const history = createHistory();
const Routes = (
    <Router>
        <Main>
            <Switch>
                <Route  path="/basic-table" component={BasicTable}/>
                <Route  path="/monitor" component={Monitor}></Route>
                <Route  path="/analysis" component={Analysis}></Route>
                <Route  path="/basic-form" component={BasicForm}></Route>
                {/* <Route  path="/step-form" component={StepForm}></Route> */}
                <Route  path="/step-form"
                    render={() =>
                        <div style={{width:'100%',height:'100%'}}>
                            <div style={{
                                width: '100%', height: '8 %',
                                display: 'flex',
                                background: '#fff',
                                marginBottom: '1rem', 
                            }}>
                                <Title text="分步表单页面！！！" />
                            </div>
                            <Switch>
                                <Route path="/step-form/confirm" component={Confirm}></Route>
                                <Route path="/step-form" component={StepForm}></Route>
                            </Switch>
                        </div>
                    }
                >
                    
                </Route>
                {/* <Route   path="/confirm" component={Confirm}></Route> */}
                <Route  path="/login" component={Login}></Route>
                <Route  path="/register" component={Register}></Route>
                {/* <Redirect  from="/" to='/basic-table'></Redirect> */}
                <Route exact path="/" component={BasicTable}></Route>
            </Switch>
        </Main>
    </Router>

    // <Router history={history}>
    //     <Main>
    //         <Switch>
    //             <Route  path="/table/basic-table" component={BasicTable}/>
    //             <Route  path="/dashboard/monitor" component={Monitor}></Route>
    //             <Route  path="/dashboard/analysis" component={Analysis}></Route>
    //             <Route  path="/form/basic-form" component={BasicForm}></Route>
    //             <Route  path="/form/step-form" component={StepForm}></Route>
    //             <Route  path="/step-form/confirm" component={Confirm}></Route>
    //             {/* <Redirect  from="/" to='/basic-table'></Redirect> */}
    //         </Switch>
    //     </Main>
    // </Router>
);

export default Routes;
