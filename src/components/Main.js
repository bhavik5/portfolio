import React from 'react'
import Projects from './Projects'
import TechnicalCompetencies from './TechnicalCompetencies';
import { calculateExperience } from '../JSFiles/utils'

class Main extends React.Component {

  handleAgeCalculation = (d1) => {
    let d2 = new Date();
    let diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  render() {
    console.log(calculateExperience(new Date('2017/12/18')))
    let totalExperience = calculateExperience(new Date('2017/12/18'))
    totalExperience = totalExperience.includes('Month') ? totalExperience.replace('Years', 'Years &') : 'Years'
    totalExperience += ' of '
    return (
      <div className="wrapper_all">

        <div className="mobile_header_wrap">
          <div className="main_wrap">
            <div className="logo">
              <img src="images/mobile_logo.png" alt="" />
            </div>
            <div className="trigger">
              <div className="hamburger hamburger--collapse-r">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_menu_wrap">
            <div className="mob_menu">
              <ul className="anchor_nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="leftpart_wrap">
            <div className="leftpart_inner">
              <div className="logo_wrap">
                <a href="/"><img src="images/logo.png" style={{ borderRadius: '50%', height: '150px', width: '200px' }} alt="" /></a>
              </div>
              <div className="menu_list_wrap">
                <ul className="anchor_nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#technicalCompetencies">Technologies</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="leftpart_bottom">
                <div className="social_wrap">
                  <ul>
                    <li><a href='https://www.facebook.com/bhavik0594'><i className='fa fa-facebook' aria-hidden='true'></i></a></li>
                    <li><a href='https://twitter.com/bhavik0594'><i className='fa fa-twitter' aria-hidden='true'></i></a></li>
                    <li><a href='https://in.linkedin.com/in/bhavik-shah-5ba129148'><i className='fa fa-linkedin' aria-hidden='true'></i></a></li>
                    <li><a href='https://www.instagram.com/bhavik_5'><i className='fa fa-instagram' aria-hidden='true'></i></a></li>
                    <li><a href='https://github.com/bhavik5'><i className='fa fa-github' aria-hidden='true'></i></a></li>
                  </ul>
                </div>
              </div>
              <a className="resize" href="#"><i className="fa fa-arrow-left" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className="rightpart">
            <div className="rightpart_inner">
              <div className="section" id="home">
                <div className="hero_header_wrap">
                  <div className="universal_box_wrap">
                    <div className="bg_wrap">
                      <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                      <div className="overlay_color hero"></div>
                    </div>
                    <div className="content hero">
                      <div className="inner_content">
                        <div className="image_wrap">
                          <img src="images/img.png" alt="" />
                        </div>
                        <div className="name_holder" style={{ marginTop: '100px' }}>
                          <h3>Bhavik <span>Shah</span></h3>
                        </div>
                        <div className="text_typing">
                          <p>I'm a <span className="animation_text_word"></span></p>
                        </div>
                      </div>
                    </div>
                    <div className="arrow_wrap bounce anchor">
                      <a href="#about"><i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section relative" id="about">
                <div className="about_wrapper_all">
                  <div className="container">
                    <div className="title_holder">
                      <h3>About Me</h3>
                      <span>Main Information about Me</span>
                    </div>
                    <div className="about_wrap">
                      <div className="author_wrap">
                        <div className="leftbox">
                          <div className="about_image_wrap parallax" data-relative-input="true">
                            <div className="image layer" data-depth="0.1">
                              <img src="images/550x640.jpg" alt="" />
                              <div className="inner" data-img-url="images/1.png"></div>
                            </div>
                            <div className="border layer" data-depth="0.2">
                              <img src="images/550x640.jpg" alt="" />
                              <div className="inner"></div>
                            </div>
                          </div>

                        </div>
                        <div className="rightbox">
                          <div className="mini_title_holder">
                            <h4>I'm Bhavik Shah and <span className="animation_text_word"></span></h4>
                          </div>
                          <div className="definition">
                            <p>Hi! My name is <strong>Bhavik Shah</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. With {totalExperience} experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                          </div>
                          <div className="about_short_contact_wrap">
                            <ul>
                              <li>
                                <span><label>Birthday:</label> 05<sup>th</sup> Dec, 1994</span>
                              </li>
                              <li>
                                <span><label>Age:</label> {this.handleAgeCalculation(new Date(1994, 12, 5))}</span>
                              </li>
                              <li>
                                <span><label>City:</label> Vadodara, Gujarat, India</span>
                              </li>
                              <li>
                                <span><label>Degree:</label> Masters</span>
                              </li>
                              <li>
                                <span><label>Mail:</label> <a href="mailto:shahbhavik512@gmail.com">shahbhavik512&#64;gmail.com</a></span>
                              </li>
                              <li>
                                <span><label>Phone:</label> <a href="tel:+91-8734045207">+91 87 34 04 52 07</a></span>
                              </li>
                            </ul>
                          </div>
                          <div className="buttons_wrap">
                            <ul>
                              <li>
                                <a href="resume/Bhavik's Resume.pdf" download><span>Download CV</span></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TechnicalCompetencies />
              <Projects />
              <div className="section">
                <div className="container">
                  <div className="counter_wrap" data-col="4" data-delay="300">
                    <ul className="counter_list miniboxes">
                      <li>
                        <div className="inner minibox">
                          <h3><span><span className="counter" data-from="0" data-to="2222" data-speed="3000">5</span></span></h3>
                          <span>Projects Completed</span>
                        </div>
                      </li>
                      <li>
                        <div className="inner minibox">
                          <h3><span><span className="counter" data-from="0" data-to="333" data-speed="3000">50</span>K</span></h3>
                          <span>Lines of Code</span>
                        </div>
                      </li>
                      <li>
                        <div className="inner minibox">
                          <h3><span><span className="counter" data-from="0" data-to="8888" data-speed="3000">5</span></span></h3>
                          <span>Happy Clients</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="section" id="contact">
                <div className="container">
                  <div className="title_holder contact">
                    <h3>Contact Me</h3>
                    <span>Get in touch with me</span>
                  </div>
                </div>
                <div className="footer_contact_wrapper_all">
                  <div className="contact_wrap_all">
                    <div className="container">
                      <div className="leftbox">
                        <div className="mini_title_holder contact">
                          <h4>Get in Touch</h4>
                        </div>
                        <div className="short_info_wrap">
                          <ul>
                            <li><p><label>Address:</label><span>C/71, Gokuldham Society, Nr. Manjalpur Atithigruh, Manjalpur, Vadodara</span></p></li>
                            <li><p><label>Email:</label><span><a href="mailto:shahbhavik512@gmail.com">shahbhavik512@gmail.com</a></span></p></li>
                            <li><p><label>Phone:</label><span><a href="tel:+91-8734045207">+91 87 34 04 52 07</a></span></p></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer_wrap">
                    <div className="container">
                      <p>&copy; Copyright {new Date().getFullYear()} by Bhavik Shah. All Rights are Reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="totop" href="#"></a>
        </div>
      </div>
    )
  }
}

export default Main