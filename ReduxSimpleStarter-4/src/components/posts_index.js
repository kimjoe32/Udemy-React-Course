import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

/*
    Link from react-router-dom
        Basically an anchor tag
        Render clickable to navigate to diff pages within app
*/

class PostsIndex extends Component {
    /*
        Runs once after component first renders on screen/DOM
    */
    componentDidMount() {
        this.props.fetchPosts();
    }

    /*
        Note: this.props.posts is an object
    */
    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    /*
        Hook up to app-level state
        text-xs-right: appear on right hand side
    */
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

/* 
    Why use mapStateToProps in this case?
        Whenever we want to consume from app-level state, define a 
        mSTP function
*/
function mapStateToProps(state) {
    return { posts: state.posts };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);