import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPosts=()=>{
    return async (dispatch,getState)=>{
        const response=await jsonPlaceHolder.get('posts');
        dispatch({type:'FETCH_POST', payload:response.data});
    };

};


    

    export const fetchUser= ()=>  dispatch=>{
        _fetchUser(dispatch);
    }
    

    const _fetchUser= _.memoize(async(dispatch)=> {
        const response=await jsonPlaceHolder.get('users');
      

        dispatch({type:'FETCH_USER',payload:response.data});
    }
    );
