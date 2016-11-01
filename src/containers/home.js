import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

/* actions */
import * as meta from '../actions/meta'
import {didMount} from '../actions/didmount'

/* component */
import Home from '../components/home'

/* state to props */
const mapStateToProps = (state, ownProps) => {
  return {
    meta:state.meta,
    didMount:state.didMount
  }
}

/* dispatch proos */
const mapDispatchToProps = (dispatch) => {
  return {
    actions:{
      meta:bindActionCreators({...meta},dispatch)
    }
  }
}

/* fetchData function on access at server */
Home.fetchData = (dispatch) => {
  return dispatch({
    type:"META-SET",
    meta:{
      title:"Home Container fetchData",
      description:"This is write by /src/containers/home.js fetchData",
      img:"home_container.jpeg",
      url:"/src/containers/home.js"
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)