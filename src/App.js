import './App.css';
import React, { Component } from 'react'
import Navigation from './components/Navigation'
import { Route, Switch } from 'react-router-dom'
import NewQuestion from './components/NewQuestion';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import QuestionDetails from './components/QuestionDetails';


class App extends Component {


  render() {
    return (
      <div className="App">

        {this.props.authenticated &&
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/add">
                <NewQuestion />
              </Route>
              <Route exact path="/leaderboard">
                <Leaderboard />
              </Route>
              <Route path="/questions/:id" children={<QuestionDetails />} />

              <Route path="*">
                <h1>404</h1>
                <h3>You can use the Navigation bar to switch to a proper page</h3>
              </Route>
            </Switch>
          </div>
        }

        {!this.props.authenticated &&
          <Login />
        }

      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authenticated: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)