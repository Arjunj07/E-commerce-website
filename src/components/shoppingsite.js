import React from "react";
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shop.css'
class Shop extends React.Component {
    render() {
        return (
            
            <div class="header">
                <div class="logo">
                    <p class="logo-content">Amazon.in</p>
                </div>
                <div>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Address</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" href="#">Orders</a>
                        </li>
                        
                        
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Wishlist</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Account</a>
                        </li>
                    </ul>
                </div>
                <div class='searchbar'>
                    <input type='search' placeholder='Search' class='searchbox'/>
                </div>
                
                
            
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div class="card-tab"> 
                <div class="card">
                <img src={this.props.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.detail}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Add to Wishlist</li>
                    <li class="list-group-item">Add to Cart</li>
                    <li class="list-group-item">Buy Now!</li>
                </ul>
                {/* <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div> */}
                </div>
            </div>
        )
    }
}

class EndBar extends React.Component{
    render(){
        return(
            <div class="footer">
                <div class="footer1">
                    <p style={{fontFamily:'bungee',alignItems:'center',marginBottom:'0'}}>Amazon</p>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Language
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#">English</Dropdown.Item>
                        <Dropdown.Item href="#">Malayalam</Dropdown.Item>
                        <Dropdown.Item href="#">Hindi</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                    
                </div>
                <div class="footerbottom">
                <div class="footer2">
                    <p class="footerButton">Conditions of Use & Sale</p>
                    <p class="footerButton">Privacy Notice</p>
                    <p class="footerButton">Interest-Based Ads</p>
                </div>
                <div>
                    <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
                </div>
            </div>
        )
    }
}
export { Shop,Content,EndBar};