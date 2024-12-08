import React from 'react';
import ReactDom from 'react-dom';

class Details extends React.Component {

    constructor()
    {
        super();
        this.state={brand:"wagonR",colour:"Blue",model:2019};
        this.changeColour = this.changeColour.bind(this);
    }
    changeColour(){
        this.setState({brand:"Ferrari",colour:"Red",model:2024});
    }
    render(){
        const car=this.state.year<2015?"Old Model":"New Model";
        return(
            
            <div>
                <h1>The brand is : {this.state.brand}</h1>
                <h1>The colour is: {this.state.colour}</h1>
                <h1>The model is: {this.state.model}</h1>
                <h2>{car}</h2>
                <button type="button" onClick={this.changeColour}>Click This</button>
                <Purchase Det={this.state.brand} />
            </div>
        );
    }

}

class Purchase extends React.Component{
    render(){
        return(
            <div>
                <h2>This is a car {this.props.Det}</h2>
            </div>
        )
    }
}
export {Details,Purchase};
// const App =()=> {
//     return(
//         <div>
//             <Details  />
//         </div>
//     )
// }
// ReactDom.render(<App />,document.querySelector("#root"));