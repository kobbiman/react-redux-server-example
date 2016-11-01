import fetch from 'isomorphic-fetch';

export function set(meta){
  return (dispatch) => {
    return setTimeout(() => {
      return dispatch({
        type:"META-SET",
        meta:meta
      })
    },1000);
  }
}