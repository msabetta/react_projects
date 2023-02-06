import React, {Component} from 'react';
class App extends Component{
    var element = <h2 className="firstAttribute"> Hellow JavatPoint </h2>


    render(){
        return(
            <div>
                <h1> Javatpoint </h1>
                <h2> Training Institute </h2>
                <p> This website contains the best cs tutorials </p>
                <p data-demoAttribute="demo"> This website contains the best cs</p>
            </div>
        );
    }
}
export default App;

