import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; //provided by react-router
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/'); //go back to root path
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return(
            <div>
                <Link to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categores}</h6>
                <p>{post.content}</p>
            </div>
        );
    };
}
/* 
    After receiving state from post
        take that state and pass it to the component
    Just return the needed post. not every post
    ownProps = props object headed to the component
*/
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);