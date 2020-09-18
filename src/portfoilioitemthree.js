import React, { Component } from 'react'
import "./css/style.css"

export class Portfoilioitemthree extends Component {
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
                      MinMax vs Random algo   <strong>Suicide Checkers</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro" >pure python(just recursion)</p>
                    <img src={require("./img/Random vs MinMax.png")} alt=""  className="intro__img"></img>
                </section>

               <div className="portfolio-item-individual">
                     <p>This is Suicide checkers played by two algorithms a random vs MiMax algorithm</p>
                     <img src={require("./img/Random vs MinMax.png")} alt=""></img>
                     <p>This is checkers: instead of taking opponents pieces to win, you must lose as all of your pieces 
                         or have no moves to win, i built this helping a client(student) doing electrical engineering, i was both 
                         teaching and implementing the project, 
                     </p>
                      <p>
                      The random algorithm basically takes the <strong>current state</strong> of the board and iterate over
                      all possible moves and pick a random one and play, then it becomes MinMax algorithm's turn

                      The MinMax algorithm minimizes the chance of the random algo by avoiding taking it pieces and in turn
                      maximizes it chance of winning by putting it pieces at risk of being taken, basically the minmax takes 
                      the copy of the board and simulate the game about <strong>4 depths into the future</strong> and then decide
                      which move will likely result in it losing it pieces rather than taking the opponents, given the opponent 
                      plays optimally.

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


export default Portfoilioitemthree
