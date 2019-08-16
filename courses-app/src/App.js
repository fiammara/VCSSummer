import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Filter from './Filter';
import Blog from './Blog';
import Duk from './Duk';
import Course from './Components/Course';
import AuthPage from './AuthPage';
import Personal from './Personal';
import Signup from './Signup';
import CourseCalendar from './CourseCalendar';
import CourseCardList from './Components/CourseCardList';
import './App.css';

const App = () => 

        (
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/courses" component={CourseCardList} />                  
              <Route exact path="/courses/:id" component={Course} />
              <Route exact path="/filter" component={Filter} />
              <Route exact path="/duk" component={Duk} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/personal" component={Personal} />
              <Route exact path="/signup" component={Signup} /> 
              <Route exact path="/auth" component={AuthPage} />
              <Route exact path="/calendar" component={CourseCalendar} />

            </Switch>

            <Footer />
          </div>
        );
    
export default App;
