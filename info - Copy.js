import React from "react";
class Info4 extends React.Component {
    constructor(props){
        super(props);
        //console.log("props",props);
        this.state = {
            count: 0,
            //title: "Hello", 
        };
        //this.buttonPressed = this.buttonPressed.bind(this);
    }
    buttonPressed(){
        this.setState({
            count: this.state.count + 1,
        });
    }
    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.buttonPressed()}>Click Me!</button>
            </div>
        )
        const title = this.props.title;
        const showTitle = true;        
        if(showTitle) {
            return(
              <div>
                <h1>{title}</h1>
                <p>Hi Sir Michael, Manage your stuff.</p>
              </div>
            )
          }else{
            return <p>empty - lost in space. </p>
          }        
    } // eof render();
} // eof class

//export default Info4;

function Info3(){
    const title = "This is my title :)";
    const showTitle = true;
      if(showTitle) {
        return(
          <div>
            <h1>{title}</h1>
            <p>Hi Sir Michael, Manage your stuff.</p>
          </div>
        )
      }else{
        return <p>empty - lost in space. </p>
      }
    }

    Info4.defaultProps = {
        title: "This is my title :) !!!! :)",
    }


    export default Info4;
