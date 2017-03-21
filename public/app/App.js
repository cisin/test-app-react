import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login.js';
import MyRoute from './components/route.js';
import {Router,Route,IndexRoute,Link,browserHistory,hashHistory} from 'react-router';
class App extends React.Component{
	render(){
		return(<div>
		<ul><li><Link to="login">Login</Link></li></ul>
				{this.props.children}
				</div>
			)
	}
}

ReactDOM.render(
	(<Router history = {hashHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Login} />
         <Route path = "home" component = {MyRoute} />
         <Route path = "login" component = {Login} />
         
      </Route>
   </Router>),document.getElementById('app'));
