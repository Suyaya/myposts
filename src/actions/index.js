import _ from 'lodash';
import axios from 'axios';

export const fetchPostsAndAuthors = ()=> async (dispatch,getState)=>{
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts,'userId'));

    userIds.forEach(id=>dispatch(fetchAuthor(id)));
};

export const fetchPosts = ()=> async dispatch =>{
        const response =  await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({type:'FETCH_POSTS', payload:response.data})       
    };

export const fetchAuthor = (userId)=>{
    return(
        async(dispatch)=>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            dispatch({type:'FETCH_AUTHOR',payload:response.data});
        }
    )
}

// export const fetchAuthor = (userId)=>{
//     return(
//         (dispatch)=>{
//             _fetchAuthor(userId,dispatch);
//         }
//     )
// }

// const _fetchAuthor = _.memoize(async (userId, dispatch) =>{
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     dispatch({type:'FETCH_AUTHOR', payload:response.data});
// }
// )
