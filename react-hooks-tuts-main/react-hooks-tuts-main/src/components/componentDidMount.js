import React from "react";

class ComponentDidMountTuts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() { 
        this.timerID = setInterval(() => this.tick(),1000);
     }
    componentWillUnmount() { 
        clearInterval(this.timerID);
     }
    render() {
      return (
        <div>
          <h1>Component Did Mount, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

export default ComponentDidMountTuts;