import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

/* actions */
import * as meta from '../actions/meta'

/* component */
import Apply from '../components/apply'

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
Apply.fetchData = (dispatch) => {
  return dispatch({
    type:"META-SET",
    meta:{
      title:"Apply Container fetchData",
      description:"This is write by /src/containers/apply.js fetchData",
      img:"apply_container.jpeg",
      url:"/src/containers/apply.js"
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apply)