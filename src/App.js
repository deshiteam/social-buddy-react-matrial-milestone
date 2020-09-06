import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    const url ='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
        <Route path ="/home">
            {
            posts.map(post => <Post post = {post}></Post>)
            }
          </Route>
          <Route path ="/contact">
            <Contact></Contact>
          </Route>
          <Route path ="/about">
            <About></About>
          </Route>
          <Route exact path ="/">
            {
            posts.map(post => <Post post = {post}></Post>)
            }
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
