import React from 'react';
import { createRoot } from 'react-dom/client';

class Card1 extends React.Component {
    render() {
        return (
            <div>
                <div class="card" style={{ width : '18rem',border:'1p' }}>
                    <img src={this.props.image} class="card-img-top" alt="Picture" style= {{width:'250px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.text}</p>
                        <a href="#" class="btn btn-primary">{this.props.time}</a>
                    </div>
                </div>
            </div>
        )

    }
}

export default Card1;
