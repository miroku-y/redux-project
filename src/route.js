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
import Main from './components/Layout/Main';

// const history = createHistory();
const Routes = (
    <Router>
        <Main>
            <Switch>
                <Route  path="/basic-table" component={BasicTable}/>
                <Route  path="/monitor" component={Monitor}></Route>
                <Route  path="/analysis" component={Analysis}></Route>
                <Route  path="/basic-form" component={BasicForm}></Route>
                <Route  path="/step-form" component={StepForm}></Route>
                <Route  path="/step-form/confirm" component={Confirm}></Route>
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
