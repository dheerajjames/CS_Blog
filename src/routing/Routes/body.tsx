import React from "react";
import { Route, Switch } from "react-router";
import Blog from "../../components/Blog/blog";
import Post from "../../components/Post/post";


export default function Body() {
    return (
      <Switch>
        <Route path="/" exact component={Blog} />
        <Route path="/post/:blogId" component={Post} />
        <Route exact path="/contact">
              Contact us
          </Route>
          <Route exact path="/about">
             About Us
          </Route>
      </Switch>
    );
  }
  