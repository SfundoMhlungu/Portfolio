import React, { Component } from 'react'
import "./css/style.css"

export class Portfoilioitemtwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggein: false

        };

        this.toggle = this.toggle.bind(this);
        this.change = this.change.bind(this);
        
    }

    
    change(){
        const {where} = this.props
      where("default");

    }


    toggle(){
        const navLinks = document.querySelectorAll(".nav_link");
        document.body.classList.toggle("nav-open");
     
        navLinks.forEach(link =>{
            link.addEventListener("click", ()=>{
                document.body.classList.remove("nav-open");
            })
        })
    }
    render() {
        return (
            <div>
                  <header>
        <div className="logo">
            <img src={require( "../src/img/bayesian-2889576_640.png")} alt="" onClick={this.change}></img>

        </div>

        <button onClick={this.toggle} className="nav-toggle" aria-label="toggle navigation">
                 <span class="hamburger"></span>
      </button>
        <nav className="__nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav_link"  onClick={this.change}>Home</a></li>
                <li className="nav__item"><a href="#services" className="nav_link"  onClick={this.change}>My Services</a></li>
                <li className="nav__item"><a href="#about" className="nav_link"  onClick={this.change}>About Me</a></li>
                <li className="nav__item"><a href="#work" className="nav_link"  onClick={this.change}>My Work</a></li>

            </ul>

        </nav>

    </header>
                {/* introduction */}


                <section class="intro">
                    <h1 className="section__title section__title--intro">
                        A multi purpose <strong>ChatBot</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro" >(telegram: DopeBot)</p>
                    <img src={require("./img/Dope bot.jpg")} alt=""  className="intro__img"></img>
                </section>

               <div className="portfolio-item-individual">
                     <p>This is a chatbot that can answer both general questions and programming questions</p>
                     <img src={require("./img/Dope bot.jpg")} alt=""></img>
                     <p>The bot runs on telegram, it is hosted on Heroku.com, i dockerized it first then published it on Heroku
                         (it is running on free dynos), the basic idea is while you are programming if you recieve an error, you can ask the 
                         bot what the error means and it will search in it's fed(learnt) corpus data and come up with an answer that basically answers what
                         sort of error you facing and where you can find the solution(stack overflow)
                     </p>
                     <p>I built this bot for a final course in Natural language Processing, it is running on python, and was built or the data 
                         was fed through tensorflows neural nets called LSTMs or long short term memory nets, the data consisted of stackoverflow questions
                         and answers, the LSTM learned the patterns from this data, these patterns are used to answer the user, 

                        To use the bot: go on telegram and search <strong>DopeBot</strong>  and start chatting.
                     </p>
               </div>

               <footer className="footer">
                   <a href="mailto:mhlungusk@gmail.com" className="footer__link">mhlungusk@gmail.com</a>
                   <ul className="social-list">
                       <li className="social-list__item">
                           <a href="https://twitter.com/MhlunguSfundo" className="social-list__link">
                             <i><img src={require("./img/twitter.png")} alt=""  className="social_img"></img></i>
                           </a>
                           </li>


                           <li className="social-list__item">
                           <a href="https://github.com/SfundoMhlungu" className="social-list__link">
                           <i><img src={require("./img/github (2).png")} alt=""  className="social_img"></img></i>
                           </a>
                           </li>

                           <li className="social-list__item">
                                   <a href="https://www.linkedin.com/in/sfundo-mhlungu-331588168" className="social-list__link">
                                   <i><img src={require("./img/linkedin.png")} alt=""  className="social_img"></img></i>
                                   </a>
                                   </li>

                   </ul>
               </footer>
            </div>
        )
    }
}


export default Portfoilioitemtwo
