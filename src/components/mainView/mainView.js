import React from 'react';
import ReactDOM from 'react-dom';
import Images from './images'
import './mainView.css'

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Pagination from '../../components/pagination/pagination';
import FooterView from '../../components/footerView/footerView';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            index: 0,
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

    iconView(){
      return <div className="icon_div">
        <img src={Images.a_data_pro}/>
        <img src={Images.c_contentfw}/>
        <img src={Images.cision}/>
        <img src={Images.corporate_excellence}/>
        <img src={Images.data_scouting}/>
        <img src={Images.cision}/>
        <img src={Images.corporate_excellence}/>
        <img src={Images.data_scouting}/>
        <img src={Images.digital_nirvana}/>
        <img src={Images.fusion}/>
        <img src={Images.i_sponsor}/>
        <img src={Images.sponsor}/>
        <img src={Images.digital_nirvana}/>
        <img src={Images.fusion}/>
        <img src={Images.i_sponsor}/>
        <img src={Images.sponsor}/>
      </div>
    }

    handleChangeIndex = (index) => {
      this.setState({
        index,
      });
    };

    slide1(){
      if(this.state.windowWidth <= 1000) {
        return <div className="mobile_slide_div">
              <li className="title_li" style={{fontSize: 20}}>Send and receive money anywhere... in any currency</li>
              <li className="subtitle_li" style={{fontSize: 18}}>Peer-to-peer, business-to-business, consumer-to-merchant</li>
              <li className="desciption_li" style={{fontSize: 14}}>whether you're sending money home, paying an international supplier or even doing some online shopping, the jibrel network will allow you to send or pay in any currency to any account, without the high exchange rates and transmission fees - we cut out the middleman</li>
              <div className="slide_img"><img src={Images.exchange}/></div>
              <div className="mobile_slide_button"><li>USE-CASES & APPLICATIONS</li></div>
        </div>
      }else{
        return <div className="slide_div">
          <div className="left_div">
            <div className="icon_left_div">
              <li className="title_li">Send and receive money anywhere... in any currency</li>
              <li className="subtitle_li">Peer-to-peer, business-to-business, consumer-to-merchant</li>
              <li className="desciption_li">whether you're sending money home, paying an international supplier or even doing some online shopping, the jibrel network will allow you to send or pay in any currency to any account, without the high exchange rates and transmission fees - we cut out the middleman</li>
            </div>
          </div>
          <div className="right_div">
            <div className="icon_right_div">
              <img src={Images.exchange}/>
              <div className="slide_button"><li>USE-CASES & APPLICATIONS</li></div>
            </div>
          </div>
        </div>
      }
    }

    slide2(){
      if(this.state.windowWidth <= 1000) {
        return <div className="mobile_slide_div">
              <li className="title_li" style={{fontSize: 20}}>Store money safely and securely using the jibrel network</li>
              <li className="subtitle_li" style={{fontSize: 18}}>All integrated exchanges are fully compliant with financial regulation</li>
              <li className="desciption_li" style={{fontSize: 14}}>We're helping everyone leverage the power of digital currencies without the associated risks - use KYC/AML compliant exchanges to store your fiat currency, keep track of it securely and immutably using the power of the blockchain and the jibrel network</li>
              <div className="slide_img"><img src={Images.presentation}/></div>
              <div className="mobile_slide_button"><li>USE-CASES & APPLICATIONS</li></div>
        </div>
      }else{
        return <div className="slide_div">
          <div className="left_div">
            <div className="icon_left_div">
              <li className="title_li">Store money safely and securely using the jibrel network</li>
              <li className="subtitle_li">All integrated exchanges are fully compliant with financial regulation</li>
              <li className="desciption_li">We're helping everyone leverage the power of digital currencies without the associated risks - use KYC/AML compliant exchanges to store your fiat currency, keep track of it securely and immutably using the power of the blockchain and the jibrel network</li>
            </div>
          </div>
          <div className="right_div">
            <div className="icon_right_div">
              <img src={Images.presentation}/>
              <div className="slide_button"><li>USE-CASES & APPLICATIONS</li></div>
            </div>
          </div>
        </div>
      }
    }

    slide3(){
      if(this.state.windowWidth <= 1000) {
        return <div className="mobile_slide_div">
              <li className="title_li" style={{fontSize: 20}}>Hedge against digital asset volatility without going off-chain</li>
              <li className="subtitle_li" style={{fontSize: 18}}>Open a money market account to invest in safer assets</li>
              <li className="desciption_li" style={{fontSize: 14}}>We're providing an ecosystem for developers and users to build their own tools and products that leverages the jibrel central bank's capabilities - users can create their own fiat to digital asset smart contracts that utilize the capabilities unlocked by storing fiat on-chain</li>
              <div className="slide_img"><img src={Images.safe_box}/></div>
              <div className="mobile_slide_button"><li>USE-CASES & APPLICATIONS</li></div>
        </div>
      }else{
        return <div className="slide_div">
          <div className="left_div">
            <div className="icon_left_div">
              <li className="title_li">Hedge against digital asset volatility without going off-chain</li>
              <li className="subtitle_li">Open a money market account to invest in safer assets</li>
              <li className="desciption_li">We're providing an ecosystem for developers and users to build their own tools and products that leverages the jibrel central bank's capabilities - users can create their own fiat to digital asset smart contracts that utilize the capabilities unlocked by storing fiat on-chain</li>
            </div>
          </div>
          <div className="right_div">
            <div className="icon_right_div">
              <img src={Images.safe_box}/>
              <div className="slide_button"><li>USE-CASES & APPLICATIONS</li></div>
            </div>
          </div>
        </div>
      }
    }

    swipeView(){
      return <div className="swipe_view">
          <AutoPlaySwipeableViews enableMouseEvents index={this.state.index} onChangeIndex={this.handleChangeIndex}  interval={6000}>
            <div>{this.slide1()}</div>
            <div>{this.slide2()}</div>
            <div>{this.slide3()}</div>
          </AutoPlaySwipeableViews>
          <Pagination
            dots={3}
            index={this.state.index}
            onChangeIndex={this.handleChangeIndex}
            slide_idx={0}
          />
        </div>
    }

    bankingView(){
      if(this.state.windowWidth <= 1000) {
        return <div className="banking_view" style={{height: 'auto'}}>
              <li className="title_li" style={{fontSize: 20}}>Consumer Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(Individuals)</li>
              <li className="desciption_li">We're helping everyone leverage the power of blockchain technology, without the risk - your money, in every currency, everywhere - no fees, ever</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*6/10}}><li>POCA WALLET</li></div>

              <li className="title_li" style={{fontSize: 20}}>Corporate Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(Businesses)</li>
              <li className="desciption_li">Manage your global payables and receivables without the unnecessary costs and high fees, send or receive money from anywhere, without the fees</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*6/10}}><li>POCA BUSINESS</li></div>

              <li className="title_li" style={{fontSize: 20}}>Crypto-Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(DAOs)</li>
              <li className="desciption_li">Protect your project funding buy opening a money market account - invest in certificates of deposits to ensure your funding is protected from volatility</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*6/10, marginBottom: '5%'}}><li>POCA CRYPTO</li></div>

          </div>
      }else{
        return <div className="banking_view">
            <div className="inner_div">
              <li className="title_li" style={{fontSize: 20}}>Consumer Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(Individuals)</li>
              <li className="desciption_li">We're helping everyone leverage the power of blockchain technology, without the risk - your money, in every currency, everywhere - no fees, ever</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*7/30}}><li>POCA WALLET</li></div>
            </div>
            <div className="inner_div">
              <li className="title_li" style={{fontSize: 20}}>Corporate Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(Businesses)</li>
              <li className="desciption_li">Manage your global payables and receivables without the unnecessary costs and high fees, send or receive money from anywhere, without the fees</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*7/30}}><li>POCA BUSINESS</li></div>
            </div>
            <div className="inner_div">
              <li className="title_li" style={{fontSize: 20}}>Crypto-Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(DAOs)</li>
              <li className="desciption_li">Protect your project funding buy opening a money market account - invest in certificates of deposits to ensure your funding is protected from volatility</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*7/30}}><li>POCA CRYPTO</li></div>
            </div>
          </div>
      }
    }

    renderNavigation() {
        if(this.state.windowWidth <= 1000) {
            return <div className="normal">
                      <div className="top-view">
                        <article className="mobile_article">
                          <h1 style={{fontSize: 22, fontWeight: '100'}}>the jibrel network</h1>
                          <p>the jibrel network allows anyone to put traditional assets like currencies, bonds and other financial instruments on the blockchain<br/><br/>users deposit assets in the jibrel central bank and are provided a token to represent ownership of the asset<br/><br/>jibrel allows traditional assets to have the properties of digital currencies, enabling global remittances and payments, financial investment and trading and crypto-hedging</p>
                          <p>jibrel is fully compliant with all relevant KYC/KYB and AML regulation</p>
                          <div className="mobile_div">
                            <li>join our mailing list</li>
                            <div className="mobile_button"><img src={Images.email} className="img-icon"/><li>johnsmith@gmail.com</li></div>
                            <li className="contribute">contribute to development</li>
                            <div className="mobile_button"><img src={Images.piggy_bank} className="img-icon"/><li>FUNDRAISER</li></div>
                            <div className="mobile_button"><img src={Images.slack_symbol} className="img-icon"/><li>SLACK</li></div>
                            <div className="mobile_button"><img src={Images.github} className="img-icon"/><li>GITHUB</li></div>
                          </div>
                        </article>
                      </div>
                      {this.iconView()}
                      {this.swipeView()}
                      <h2 style={{fontSize: 24}}>How does the jibrel network work?</h2>
                      <iframe src="https://player.vimeo.com/video/183530279" width={window.innerWidth} height={window.innerWidth*9/16}></iframe>
                      {this.bankingView()}

                    </div>
            ;
        } else {
            return  <div className="normal">
                      <div className="top-view">
                        <section className="container">
                          <div className="left-half">
                            <article>
                              <h1>the jibrel network</h1>
                              <p>the jibrel network allows anyone to put traditional assets like currencies, bonds and other financial instruments on the blockchain<br/><br/>users deposit assets in the <i>jibrel central bank</i> and are provided a token to represent ownership of the asset<br/><br/>jibrel allows traditional assets to have the properties of digital currencies, enabling global remittances and payments, financial investment and trading and crypto-hedging</p>
                              <p>jibrel is fully compliant with all relevant KYC/KYB and AML regulation</p>
                            </article>
                          </div>
                          <div className="right-half">
                            <article>
                              <li>join our mailing list</li>
                              <div className="button"><img src={Images.email} className="img-icon"/><li>johnsmith@gmail.com</li></div>
                              <li className="contribute">contribute to development</li>
                              <div className="button"><img src={Images.piggy_bank} className="img-icon"/><li>FUNDRAISER</li></div>
                              <div className="button"><img src={Images.slack_symbol} className="img-icon"/><li>SLACK</li></div>
                              <div className="button"><img src={Images.github} className="img-icon"/><li>GITHUB</li></div>
                            </article>
                          </div>
                        </section>
                      </div>
                      {this.iconView()}
                      {this.swipeView()}
                      <h2>How does the jibrel network work?</h2>
                      <iframe src="https://player.vimeo.com/video/183530279" width="1000px" height="560px"></iframe>
                      {this.bankingView()}

                    </div>
            ;
        }
    }

    render() {
        return <div>
                        {this.renderNavigation()}
                        <FooterView/>
            </div>
    }
}

export default MainView;
