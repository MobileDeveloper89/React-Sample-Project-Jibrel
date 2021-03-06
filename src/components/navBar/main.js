import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from '../../resources/Jibrel Logo (1).jpg';
import data from './data.js';
import './main.css'

class NavContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            items: {data},
            addClass: '',
        };
        console.log(window.innerWidth)
    };

    handleResize(){
        this.setState({
            windowWidth: window.innerWidth,
        });
    }

    componentWillMount(){
        this.handleResize();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
        window.addEventListener('resize', this.handleResize=()=>{
          if(window.innerWidth <= 1000 && this.state.mobileNavVisible){
            this.setState({mobileNavVisible: true})
          }else{
            this.setState({mobileNavVisible: false})
          }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
        window.removeEventListener('resize', this.handleResize=()=>{
          if(window.innerWidth <= 1000 && this.state.mobileNavVisible){
            this.setState({mobileNavVisible: true})
          }else{
            this.setState({mobileNavVisible: false})
          }
        });
    }


    handleNavClick(){
        if(!this.state.mobileNavVisible){
            this.setState({
                mobileNavVisible: true,
            });
        } else {
            this.setState({
                mobileNavVisible: false,
            });
        }
      console.log('you clicked me ... ' +  this.state.mobileNavVisible);
    };

    //i have to clean code here to not repeat it...
    navigationLinks(){
        let item = this.state.items.data;
        //let newClass = this.state.addClass;
        let arrayMenu = [];
        item.map((value, i)=>{
            arrayMenu.push(<Link key={i} to={value.url}><li className="li-normal">{value.text}</li></Link>);
        });
        return arrayMenu;
    }

    renderMobileNav() {
        if(this.state.mobileNavVisible){
            let item = this.state.items.data;
            //let newClass = this.state.addClass;
            let arrayMenu = [];
            item.map((value, i)=>{
                arrayMenu.push(<Link style={{textDecoration: 'none'}} key={i} to={value.url}><li onClick={e=>this.handleNavClick(e)}>{value.text}</li></Link>);
            });
            return arrayMenu;
        }
    }

    renderNavigation() {
        if(this.state.windowWidth <= 1000) {
            return <div className="mobile">
                        {
                          this.state.mobileNavVisible ? (
                            <div>
                              <i onClick={e=>this.handleNavClick(e)} className="fa fa-times fa-1x" aria-hidden="true"></i>
                              <li className="mobile-center">jibrel network</li>
                            </div>
                          ) : (
                            <div>
                              <i onClick={e=>this.handleNavClick(e)} className="fa fa-bars fa-1x" aria-hidden="true"></i>
                              <li className="mobile-center">jibrel network</li>
                            </div>
                          )
                        }
                        <ul className="nav-mobile" style={this.state.mobileNavVisible ? {backgroundColor: '#ffffff', height: window.innerHeight} : null}>
                            {this.renderMobileNav()}
                        </ul>
                </div>
            ;
        } else {
            return <div className="normal">
                        <ul>
                            <li className="li-logo"><Link to="/"><img src={logo}/><li className="logo-text">jibrel<br/>network</li></Link></li>
                            {this.navigationLinks()}
                            <li className="li-right">PARTICIPATE IN OUR ICO</li>
                        </ul>
                </div>
            ;
        }
    }

    render() {
        return <div>
                    <nav>
                        {this.renderNavigation()}
                    </nav>
            </div>
    }
}

export default NavContainer;
