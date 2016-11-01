import React from "react"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(this.props.didMount){
      this.props.actions.meta.set({
        title:"Home Components",
        description:"This is write by /src/components/home.js actions",
        img:"home_components.jpeg",
        url:"/src/components/home.js"
      });
    }
  }

  render() {
    return (
      <div className="home-component">
        <p>This page is /</p>
      </div>
    );
  }
}