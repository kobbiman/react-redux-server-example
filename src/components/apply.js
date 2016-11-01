import React from "react"

export default class Apply extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(this.props.didMount){
      this.props.actions.meta.set({
        title:"Apply Components",
        description:"This is write by /src/components/apply.js actions",
        img:"apply_components.jpeg",
        url:"/src/components/apply.js"
      });
    }
  }

  render() {
    return (
      <div className="apply-component">
        <p>This page is /apply</p>
      </div>
    );
  }
}