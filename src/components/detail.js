import React from "react"

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(this.props.didMount){
      this.props.actions.meta.set({
        title:"Detail Components",
        description:"This is write by /src/components/detail.js actions",
        img:"detail_components.jpeg",
        url:"/src/components/detail.js"
      });
    }
  }

  render() {
    return (
      <div className="detail-component">
        <p>This page is /detail</p>
      </div>
    );
  }
}