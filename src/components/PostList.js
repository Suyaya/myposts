import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndAuthors} from '../actions/index';
import UsersHeader from './UsersHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndAuthors();
    }
    
    renderPostList = ()=>{
        return this.props.posts.map((post)=>{
                return(
                    <div className="item" key={post.id}>
                        <i className = "large middle aligned icon user"/>
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>          
                            </div>
                            <UsersHeader userId={post.userId}/>
                        </div>
                    </div>
                )
        });
    
    }
    render(){
        return(
            <div className = "ui relaxed divided list">
                {this.renderPostList()}
            </div>
        );
    };
};

const mapStateToProps = (state)=>{
    return{
        posts:state.posts
    };
}
export default connect(mapStateToProps,{fetchPostsAndAuthors:fetchPostsAndAuthors})(PostList);

