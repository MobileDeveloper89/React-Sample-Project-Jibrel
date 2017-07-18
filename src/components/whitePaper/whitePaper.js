import React from 'react';
import ReactDOM from 'react-dom';
import './whitePaper.css'

import Abstract from './abstract'
import Ethereum from './ethereum'
import Tethered from './tethered'
import Exchange from './exchange'
import Mechanism from './mechanism'
import Implementation from './implementation'
import Security from './security'
import MoneyStorage from './moneyStorage'

import use_case_1 from '../../resources/use-case-1.png';
import use_case_2 from '../../resources/use-case-2.png';

class WhitePaper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
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

    render() {
        return <div className="normal">
            <div className="white_normal" style={{width: this.state.windowWidth <= 1000 ? window.innerWidth*9/10 : window.innerWidth*8/10}}>
              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 30 : 42}}>JIBREL NETWORK</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>Leveraging existing digital asset exchange infrastructure to develop a decentralized financial network with low disintermediary risk</p>
              <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18}}>Download the <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18, color: '#4d98ff', cursor: 'pointer'}}>PDF Version</p></p>
              <li className="title_p" style={{marginTop: 20, marginBottom: 20}}>ABSTRACT</li>
              {Abstract.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>INTRODUCTION</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>Ethereum Virtual Machine, Tethered Coins and Exchange APIs</p>
              <li className="title_p" style={{fontSize: 18, marginTop: 20, marginBottom: 20}}>Ethereum Virtual Machine (EVM) & Smart Contracts</li>
              {Ethereum.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_p" style={{fontSize: 18, marginTop: 50, marginBottom: 20}}>Tethered Coins</li>
              {Tethered.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_p" style={{fontSize: 18, marginTop: 50, marginBottom: 20}}>Exchange APIs</li>
              {Exchange.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>PROOF OF CAPITAL ADEQUACY</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>Poca protocol</p>
              <li className="title_p" style={{fontSize: 18, marginTop: 20, marginBottom: 20}}>Mechanism</li>
              {Mechanism.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_p" style={{fontSize: 18, marginTop: 50, marginBottom: 20}}>Implementation</li>
              {Implementation.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_p" style={{fontSize: 18, marginTop: 50, marginBottom: 20}}>Security</li>
              {Security.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>USE-CASES & APPLICATIONS</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>Potential applications for the poca protocol</p>
              <li className="title_p" style={{fontSize: 18, marginTop: 20, marginBottom: 20}}>Remittances & Global Payments</li>
              <img src={use_case_1}/>

              <li className="title_p" style={{fontSize: 18, marginTop: 50, marginBottom: 20}}>Money Storage</li>
              {MoneyStorage.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}
              <img src={use_case_2}/>
            </div>
        </div>
    }
}

export default WhitePaper;
