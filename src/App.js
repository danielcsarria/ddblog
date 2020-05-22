import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import BlogContainer from './views/BlogContainer';
import AuthorContainer from './views/AuthorContainter';
import Blog from './views/Blog';
import Author from './views/Author';
import Home from './views/Home';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/blogs" exact component={BlogContainer}/>
                    <Route path="/authors" exact component={AuthorContainer} />
                    <Route path="/blogs/:id" exact component={Blog}/>
                    <Route path="/authors/:id" exact component={Author}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
