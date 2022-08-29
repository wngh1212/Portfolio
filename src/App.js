import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (

    <div class="container-fluid">
      <div class="background">

      </div>

      <header>

        <div class="logo"><span>PORTFOLIO</span></div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="https://github.com/wngh1212">Github</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="https://github.com/wngh1212?tab=repositories">Project</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <section class="header-content">
          <h2>Welcome</h2>
          Welcome to my Portfolio site

        </section>

      </header>
      <div class="iconmouse">
        <span class="ball"></span>
      </div>
    
      <footer>
        <div class="div">
          <div id="div1" data-aos="fade-up" data-aos-delay="200">HELLO</div>
          <div id="div2" data-aos="fade-up" data-aos-delay="250">IM....</div>
          <div id="div3" data-aos="fade-up" data-aos-delay="300">WEB DEVELOPER</div>
          <div id="div4" data-aos="fade-up" data-aos-delay="300">SEE MY PROJECTS</div>
        </div>
        
      </footer>
      <section>
        <div class="divs">incomplete</div>
      </section>
    </div>

  );
}


export default App;
