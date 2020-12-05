import React, { Component } from 'react'
// import sfundoDevimg from "./sfundoDevimg"
import "./css/style.css"
import Portfoilioitem from "./portfoilioitem"
import Portfoilioitemtwo from "./portfoilioitemtwo"
import Portfoilioitemthree from "./portfoilioitemthree"

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            where_: "default"

        };

        this.toggle = this.toggle.bind(this);
        this.where = this.where.bind(this);
        
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

    where(to){
        this.setState({
            where_: to
        })
    }
    render() {
        const {where_} = this.state
        
        switch(where_){
            default:
                return (
                    <div>
                          <header>
                <div className="logo">
                    <img src={require( "../src/img/bayesian-2889576_640.png")} alt=""></img>
        
                </div>
        
                <button onClick={this.toggle} className="nav-toggle" aria-label="toggle navigation">
                         <span class="hamburger"></span>
              </button>
                <nav className="__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav_link">Home</a></li>
                        <li className="nav__item"><a href="#services" className="nav_link">My Services</a></li>
                        <li className="nav__item"><a href="#about" className="nav_link">About Me</a></li>
                        <li className="nav__item"><a href="#work" className="nav_link">My Work</a></li>
        
                    </ul>
        
                </nav>
        
            </header>
                        {/* introduction */}
        
        
                        <section class="intro" id="home">
                            <h1 className="section__title section__title--intro">
                                Hi, I am <strong>Sfundo Mhlungu</strong>
                            </h1>
                            <p className="section__subtitle section__subtitle--intro" >Hybrid Software/game/ML developer</p>
                            <img src={require("./sfundoDevimg.jpg")} alt=""  className="intro__img"></img>
                        </section>
        
                       {/* My services section */}
                       <section className="my-services" id="services">
                           <h2 className="section__title section__title--services">What i do</h2>
                           <div className="services">
                               <div className="service">
                                   <h3>Front end & Hybrid software developer</h3>
                                   <p>
                                    I develop hybrid applications(1 code base for different platforms) with ionic and electron js using angular, bootstrap and react as frontend, cordova and capacitor to target native APIs <strong> 
                                  i believe in optimization and efficiency therefore I incoporate webassembly when neccessary for speed, intense computation, security and efficiency, also following cutting edge paradigms for problem solving: dynamic programming - form of algorithmic thinking, functional programming - data driven and security design </strong> 
                                  i have strong foundation of first principles for programming(from nand gates, machine code, assembly, virtual machine to programming languages), allowing me to migrate to any language or framework in a crash courses time
                                   </p> 
        
        
                               </div>
        
                               <div className="service">
                                   <h3>indie game dev(unity3d game engine)</h3>
                                   <p>
                                  I also make games with unity, i migrated from Godot to unity3d, i can create a game(mostly 2d) from start
                                  to finish, <strong>i am well versed in the 2d pipeline from creating art, exporting and preparing, coding and 
                                  audio</strong>. i have specific interest for user experience and retention, hence i studied user experience and behaviour, game design principles which can be applied in many areas of engineering
                                   </p>
                                   
        
                               </div>
        
                               <div className="service">
                                   <h3>Applied Machine Learning(python)</h3>
                                   <p>
                                      <strong> From Applied Machine Learning to Natural Language Processing</strong>, i am more geared towards NLP
                                       , which includes sentiment analysis, topic modeling, probabilistic models, sequencial models for both analysis and interction with a computer or AI through language
                                   </p>
                                   
        
                               </div>
        
                           </div> 
                           {/* services closing tag */}
        
                           <a className="btn2" href="#work">My work</a>
        
                       </section>
                       {/* about me section */}
                       <section className="about-me" id="about">
                         <h2 className="section_title section__title--about">Who I am</h2>
                         <p className="section__subtitle section__subtitle--about">full stack/game/Machine learning multi plartform developer</p>
        
                         <div className="about-me__body">
                             <p>I am a commited long life learner, if i am not busy with social sciences, i code a lot .
                                My degree is Bachelor of Social Sciences: Majoring in Criminology and Philosophy, i've been coding
                                for four years now, i learned everything i know about coding online, through various university 
                                MOOCS(like cousera), YouTube, books and written articles, which in turn developed my high intution for finding answers, data and fixing problems
                             </p>
                             <p>
                                 Besides coding and thinking, i enjoy a rich and healthy social life, i love meeting new people, visiting my family,
                                 going to the beach or playing/learning piano, i also love to travel and seeing new places.
                             </p>
        
                         </div>
                         <img src={require("./img/me siting.jpg")} alt="" className="about-me__img"></img>
        
                       </section>
        
                       {/* my work sec */}
                       <section className="my-work" id="work">
                           <h2 className="section__title section__title--work">My work</h2>
                           <p className="section__subtitle  section__subtitle--work">A selection of my range of work</p>
        
                           <div className="portfolio">
                               {/* portfolio item */}
                               <a className="portfolio__item cursor-point" href="#" onClick={this.where.bind(this, "one")} >
                               <img src={require("./img/Admin.png")} alt="" className="portfolio__img"></img>
                               </a>
        
                               {/* portfolio item */}
                               <a className="portfolio__item"  href="#" onClick={this.where.bind(this, "two")}>
                               <img src={require("./img/Dope bot.jpg")} alt="" className="portfolio__img"></img>
                               </a>
                                
                               <a className="portfolio__item" href='#' onClick={this.where.bind(this, "three")}>
                               <img src={require("./img/Random vs MinMax.png")} alt="" className="portfolio__img"></img>
                               </a>
        
                               {/* portfolio item */}
                               <a className="portfolio__item" href="https://sfundomhlungu-built.glitch.me/">
                               <img src={require("./img/Pomodoro clock.png")} alt="" className="portfolio__img"></img>
                               </a>
        
                               {/* portfolio item */}
                               <a className="portfolio__item" href="https://sfundomhlungu-markdown.glitch.me/">
                               <img src={require("./img/Markdown preview.png")} alt="" className="portfolio__img"></img>
                               </a>
        
        
                               <a className="portfolio__item" href="https://sfundomhlungu-markdown.glitch.me/">
                               <img src={require("./img/Markdown actual code.png")} alt="" className="portfolio__img"></img>
                               </a>
        
        
        
                               <a className="portfolio__item" href="https://sfundomhlungu-mycalcu.glitch.me/">
                               <img src={require("./img/Calculatir.png")} alt="" className="portfolio__img"></img>
                               </a>
        
                               <a className="portfolio__item" href="https://sfundomhlungu-my-weird-drum.glitch.me/">
                               <img src={require("./img/Drum Machine.png")} alt="" className="portfolio__img"></img>
                               </a>
        
                               <a className="portfolio__item" href="https://sfundosk.itch.io/exitium-scroll">
                               <img src={require("./img/Exitium.png")} alt="" className="portfolio__img"></img>
                               </a>
                           </div>
        
                       </section>
        
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
                );
                case "one":
                    return(
                        <Portfoilioitem where={this.where}/>
                    );
                case "two":
                    return(
                        <Portfoilioitemtwo where={this.where}/>
                    );
                case "three":
                     return(
                         <Portfoilioitemthree where={this.where}/>
                     )
                
        }
    
       
    }
}

export default Main
