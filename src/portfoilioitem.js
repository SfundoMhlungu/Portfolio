import React, { Component } from 'react'
import "./css/style.css"

export class Portfoilioitem extends Component {
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
                <li className="nav__item"><a href="#home" className="nav_link" onClick={this.change} >Home</a></li>
                <li className="nav__item"><a href="#services" className="nav_link" onClick={this.change}>My Services</a></li>
                <li className="nav__item"><a href="#about" className="nav_link" onClick={this.change}>About Me</a></li>
                <li className="nav__item"><a href="#work" className="nav_link" onClick={this.change}>My Work</a></li>

            </ul>

        </nav>

    </header>
                {/* introduction */}


                <section class="intro">
                    <h1 className="section__title section__title--intro">
                        Freelance  <strong>Multi Purpose Admin</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro" >PC software</p>
                    <img src={require("./img/Admin.png")} alt=""  className="intro__img"></img>
                </section>

               <div className="portfolio-item-individual">
                     <p>A general/financial and communications Desktop software i am doing for a client, it is still in production
                         and can be presented upon request, it is not on github/public, it is private property
                     </p>
                     <img src={require("./img/Admin.png")} alt=""></img>
                     <p>This software can manage users, can insert users, update and delete, it can also capture financial info
                         such as financial statements and can do finacial calculations both advanced and basic(trial balance, statement of cashflow, balance sheet etc),
                         can also handle signup and log in with different types of users such as super user(privileges)
                     </p>
                     <p>It is built with electron js with is an engine built out of crome engine, which then enables web technologies to run on a desktop
                         application, electron is also multi plartform as it is not entirely dependent on OS, but the crome engine, for front end 
                         i used react js, redux and for backend electron js and nedb which is a lite weight database for local storage, supporting libraries include:
                         jquery, sass, datatables and many more.
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


export default Portfoilioitem
