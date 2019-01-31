import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './styles/homeBody.css'
import './App.css';
import Home from './components/common/Home';
import LoginForm from './components/user/userForms/LoginForm';
import RegisterForm from './components/user/userForms/RegisterForm';
import LogOut from './components/user/userForms/LogOut';
import CreateArticle from './components/article/articleForms/ArticleCreate';
import ArticleList from './components/article/articleViews/ArticleList'
import ArticleDetails from "./components/article/articleViews/ArticleDetails";
import ArticleEdit from './components/article/articleForms/ArticleEdit';
import ArticleDelete from "./components/article/articleForms/ArticleDelete";
import Navigation from './components/common/Navigation';
import CatRegForm from './components/cat/catForms/CatRegForm'
import CatList from "./components/cat/CatList";
import CatDetails from "./components/cat/CatDetails";
import CatDelete from "./components/cat/catForms/CatDelete";

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			changeState: false,
		}
	}
	
	switchState = () => // previos
		 {
		this.setState({changeState: !this.state.changeState});
	};
	
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <Navigation />
          </header>
          <Route path='/' exact component={Home} />
          <Route path='/user/login' component={LoginForm} />
          <Route path='/user/register' component={RegisterForm} />
		  <Route path='/logout' component={(props) => <LogOut switchState={this.switchState} />} />
		  <Route path='/article/create' component={CreateArticle} />
		  <Route path='/article/list/:type' component={(props) => <ArticleList {...props} />} />
		  <Route path='/article/details/:type/:id' component={ArticleDetails} />
		  <Route path='/article/edit/:type/:id' render={(props) =><ArticleEdit {...props} target={props.match.params.id} />} />
		  <Route path='/article/delete/:type/:id' component={ArticleDelete} />
		  <Route path='/cat/register' component={CatRegForm} />
		  <Route path='/cat/list' component={(props) => <CatList {...props} />} />
		  <Route path='/cat/details/:id' component={CatDetails} />
          <Route path='/cat/delete/:id' component={CatDelete} />
      </div>
    );
  }
}

export default App;
