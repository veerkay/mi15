import React from "react"
import Link from "next/link"
import Script from "next/script"
import Preloader from "./components/Preloader"

export default function HomePage() {
  return (
    <>
      {/* Preloader (client-controlled) */}
      <Preloader />

      <div id="canvas">
        <div id="box_wrapper">

          <header className="page_header ds justify-nav-end">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-1 col-lg-2 col-md-3 col-6">
                  <a href="/" className="logo">
                    <img src="/images/logo.png" alt="Mi15 Logo" style={{ maxHeight: 40, width: "auto" }} />
                  </a>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 col-1">
                  <div className="nav-wrap">
                    <nav className="top-nav">
                      <ul className="nav sf-menu">
                        <li className="active">
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="#about-section">About us</a>
                        </li>
                        <li>
                          <a href="#services-section">Services</a>
                        </li>
                        <li>
                          <a href="#contact-section">Contact us</a>
                        </li>
                        <li>
                          <a href="#agents-section">Agents</a>
                        </li>
                        <li>
                          <Link href="/start-leave-application">Leave application</Link>
                        </li>
                      </ul>
                    </nav>

                    <ul className="top-includes d-none d-xl-block">
                      <li>
                        <span>
                          <a href="#" className="search_modal_button">
                            <i className="fas fa-search" />
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <span className="toggle_menu"><span /></span>
          </header>

          <section className="page_slider">
            <div className="flexslider">
              <ul className="slides">
                <li className="cs cover-image flex-slide">
                  <img src="/images/slider/slide01.jpg" alt="" />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="intro_layers_wrapper">
                          <div className="intro_layers">
                            <div className="intro_layer" data-animation="fadeInRight">
                              <h2 className="text-capitalize intro_featured_word">
                                <span className="color-main">Mi15 Agency</span>
                              </h2>
                              <div className="fw-divider-special-slider" />
                              <a href="#about-section" className="btn btn-outline-maincolor"><span>Learn More</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="cs cover-image flex-slide">
                  <img src="/images/slider/slide02.jpg" alt="" />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="intro_layers_wrapper">
                          <div className="intro_layers">
                            <div className="intro_layer" data-animation="fadeInRight">
                              <h2 className="text-capitalize intro_featured_word">
                                <span className="color-main">Operational</span>
                                <br />Excellence
                              </h2>
                              <div className="fw-divider-special-slider" />
                              <a href="#services-section" className="btn btn-outline-maincolor"><span>Our Services</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="services-section" className="ds s-pb-60 s-pb-md-80 s-pb-xl-130 c-gutter-5 c-mb-70 service-isotope top-minus">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="ls icon-box text-center">
                    <div className="icon-styled">
                      <i className="color-main fas fa-binoculars" />
                    </div>
                    <h4>Intelligence Gathering</h4>
                    <p>Advanced surveillance and intelligence collection operations to support strategic military decision-making.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="ls icon-box text-center">
                    <div className="icon-styled">
                      <i className="color-main fas fa-laptop-code" />
                    </div>
                    <h4>Cyber Operations</h4>
                    <p>Protecting critical infrastructure and conducting cyber defense operations against emerging digital threats.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="ls icon-box text-center">
                    <div className="icon-styled">
                      <i className="color-main fas fa-chart-line" />
                    </div>
                    <h4>Tactical Analysis</h4>
                    <p>Real-time threat assessment and tactical intelligence analysis for mission-critical operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about-section" className="ds s-pb-60 s-pb-md-80 s-pb-xl-150">
            <div className="cover-image s-cover-left" />
            <div className="container">
              <div className="row align-items-center c-gutter-60">
                <div className="col-md-12 col-lg-7">
                  <div className="item-media embed-responsive embed-responsive-16by9">
                    <img src="/images/home-image.jpg" alt="MI15 Agency Operations Overview" className="img-fluid" loading="lazy" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-5">
                  <div className="divider-30 divider-md-70 divider-xl-75" />
                  <h1><span className="color-main">About</span><br />Us</h1>
                  <div className="fw-divider-special"><p className="special">Strategic Intelligence &amp; Operational Excellence</p></div>
                  <div className="divider-40 divider-sm-50" />
                  <p>Mi15 Agency is a strategic intelligence and operations unit supporting the mission and security of the United States Army. We specialize in advanced intelligence gathering, cyber operations, and tactical analysis to empower mission success in an increasingly complex global environment.</p>
                  <p>At Mi15, we bring together experts in military intelligence, counterintelligence, cybersecurity, and threat assessment to deliver real-time insights and actionable intelligence. Our work directly supports Army operations around the world — ensuring informed decisions, protecting national interests, and staying ahead of evolving threats.</p>
                  <div className="divider-40 divider-sm-65" />
                  <div className="d-flex align-items-center flex-wrap">
                    <button type="button" className="btn btn-outline-darkgrey large fw-400" data-bs-toggle="modal" data-bs-target="#mi15Modal">Learn More</button>
                    <span className="m-3">or</span>
                    <div className="widget widget_social_buttons">
                      <a href="#" className="fab fa-facebook-f" title="Facebook" target="_blank" rel="noopener" />
                      <a href="#" className="fab fa-twitter" title="Twitter" target="_blank" rel="noopener" />
                      <a href="#" className="fab fa-google" title="Google+" target="_blank" rel="noopener" />
                      <a href="#" className="fab fa-youtube" title="YouTube" target="_blank" rel="noopener" />
                      <a href="#" className="fas fa-rss" title="RSS Feed" target="_blank" rel="noopener" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-0 divider-lg-60" />
          </section>

          {/* Modal */}
          <div className="modal fade" id="mi15Modal" tabIndex={-1} aria-labelledby="mi15ModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="mi15ModalLabel">More About Mi15 Agency</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body fade-in">
                  <p>Mi15 Agency operates at the forefront of national security, intelligence, and cyber defense. Our mission is to serve as a trusted backbone for United States Army intelligence operations, bridging the gap between emerging threats and proactive defense strategies.</p>
                  <p>Through continuous innovation, real-time surveillance, and elite operational strategy, we help ensure every decision is driven by precision, data, and deep geopolitical awareness.</p>
                  <p>Whether combating digital espionage or supporting field missions with actionable intelligence, Mi15 is committed to staying ahead of adversaries — safeguarding America's future.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <section id="service-home" className="ls s-pt-60 s-pt-md-70 s-pt-xl-141 s-pb-60 s-pb-md-80 s-pb-xl-150 service-isotope">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h1><span className="color-main">Our </span>Services</h1>
                  <div className="divider-20" />
                  <div className="fw-divider-special-center"><p className="special" /></div>
                  <div className="divider-35 divider-md-75" />
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="ls icon-box text-center">
                    <div className="icon-styled"><i className="color-main fas fa-user-secret" /></div>
                    <h4>Counterintelligence</h4>
                    <p>Identifying and neutralizing foreign intelligence threats to protect sensitive military operations and personnel.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="ls icon-box text-center">
                    <div className="icon-styled"><i className="color-main fas fa-map-marked-alt" /></div>
                    <h4>Field Operations</h4>
                    <p>Covert and overt field intelligence operations supporting tactical units in diverse global environments.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="ls icon-box text-center">
                    <div className="icon-styled"><i className="color-main fas fa-shield-alt" /></div>
                    <h4>Vulnerability Assessment</h4>
                    <p>Comprehensive threat assessment and vulnerability analysis for military installations and operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="our-gallery" className="ds s-py-60 s-py-md-80 s-py-xl-150">
            <div className="divider-60 divider-md-80 divider-xl-140" />
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1><span className="color-main">Operations </span>Gallery</h1>
                <div className="divider-20" />
                <div className="fw-divider-special-center"><p className="special" /></div>
                <div className="divider-35 divider-md-55" />
              </div>
              <div className="col-md-12">
                <div id="demo" className="accordion">
                  <ul className="accordion__ul">
                    <li className="accordion__li"><img className="accordion__img" src="/images/gallery-home/01.jpg" alt="" /><a href="#"><span>Field Intelligence Operations</span></a></li>
                    <li className="accordion__li"><img className="accordion__img" src="/images/gallery-home/02.jpg" alt="" /><a href="#"><span>Cyber Defense Training</span></a></li>
                    <li className="accordion__li"><img className="accordion__img" src="/images/gallery-home/03.jpg" alt="" /><a href="#"><span>Tactical Analysis Briefings</span></a></li>
                    <li className="accordion__li"><img className="accordion__img" src="/images/gallery-home/04.jpg" alt="" /><a href="#"><span>Surveillance Operations</span></a></li>
                    <li className="accordion__li"><img className="accordion__img" src="/images/gallery-home/05.jpg" alt="" /><a href="#"><span>Strategic Planning Sessions</span></a></li>
                    <li className="accordion__li"><img className="accordion__img" src="/images/gallery-home/06.jpg" alt="" /><a href="#"><span>Technical Surveillance</span></a></li>
                    <li className="accordion__li"><img className="accordion__img" src="/images/gallery-home/07.jpg" alt="" /><a href="#"><span>Counterintelligence Operations</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="divider-60 divider-md-80 divider-xl-150" />
          </section>

          <section id="agents-section" className="ls s-pt-60 s-pt-md-70 s-pt-xl-141 s-pb-60 s-pb-md-80 s-pb-xl-150">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h1><span className="color-main">Our </span>Agents</h1>
                  <div className="divider-20" />
                  <div className="fw-divider-special-center"><p className="special" /></div>
                  <div className="divider-35 divider-md-55" />
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="team-style-1">
                    <div className="card text-center">
                      <img className="card-img-top" src="/images/team/01.jpg" alt="" />
                      <div className="card-body">
                        <h4 className="card-title">Agent Falcon</h4>
                        <p className="card-text">Senior Intelligence Officer</p>
                        <p className="card-text">Specializes in counterintelligence and strategic threat assessment operations.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="divider-30 divider-md-0" />
                  <div className="team-style-1">
                    <div className="card text-center">
                      <img className="card-img-top" src="/images/team/02.jpg" alt="" />
                      <div className="card-body">
                        <h4 className="card-title">Agent Shadow</h4>
                        <p className="card-text">Cyber Operations Specialist</p>
                        <p className="card-text">Expert in cyber defense, digital forensics, and information security protocols.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="divider-30 divider-md-0" />
                  <div className="team-style-1">
                    <div className="card text-center">
                      <img className="card-img-top" src="/images/team/03.jpg" alt="" />
                      <div className="card-body">
                        <h4 className="card-title">Agent Phoenix</h4>
                        <p className="card-text">Tactical Field Operator</p>
                        <p className="card-text">Field intelligence collection and covert operations specialist with global experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact-section" className="ds s-pt-60 s-pt-md-70 s-pb-60 s-pb-md-80 s-pb-xl-150">
            <div className="container">
              <div className="row c-gutter-50">
                <div className="divider-10 divider-lg-10 divider-xl-5" />
                <div className="col-md-9 col-lg-6 col-sm-12">
                  <h1><span className="color-main">Contact</span> Us</h1>
                  <div className="fw-divider-special"><p className="special">Secure Communication Channel</p></div>
                  <div className="divider-40 divider-md-65" />
                  <div className="form-group">
                    <label htmlFor="form-name">Name</label>
                    <input type="text" aria-required="true" size={30} defaultValue="" name="name" id="form-name" className="form-control" placeholder="Enter Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email-name">Email</label>
                    <input type="email" aria-required="true" size={30} defaultValue="" name="email" id="email-name" className="form-control" placeholder="Enter Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-message">Message</label>
                    <textarea aria-required="true" rows={3} cols={20} name="message" id="form-message" className="form-control" placeholder="Enter Your Message here" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <button type="submit" id="form_submit" name="contact_submit" className="btn btn-outline-darkgrey mt-30">Send Secure Message</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="page_footer ds s-pt-77 s-pb-40 c-gutter-150">
            <div className="container">
              <div className="row">
                <div className="divider-20 d-none d-xl-block" />
                <div className="col-md-4 animate" data-animation="fadeInUp">
                  <div className="widget widget_icons_list">
                    <h3>Secure Contacts</h3>
                    <div className="media side-icon-box">
                      <div className="icon-styled color-main fs-14"><i className="fas fa-map-marker-alt" /></div>
                      <p className="media-body">Classified Location</p>
                    </div>
                    <div className="media side-icon-box">
                      <div className="icon-styled color-main fs-14"><i className="fas fa-phone" /></div>
                      <p className="media-body">Secure Line: [Classified]</p>
                    </div>
                    <div className="media side-icon-box">
                      <div className="icon-styled color-main fs-14"><i className="fas fa-envelope" /></div>
                      <p className="media-body"><a href="#">secure@mi15.army.mil</a></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 animate" data-animation="fadeInUp">
                  <div className="widget widget_text">
                    <img src="/images/logo.png" alt="" />
                    <p>Mi15 Agency - Strategic intelligence operations supporting United States Army missions worldwide through advanced surveillance, cyber defense, and tactical analysis.</p>
                    <div className="divider-20 d-none d-xl-block" />
                    <div className="fw-divider-special"><p className="special" /></div>
                    <div className="divider-25 d-none d-xl-block" />
                    <div className="widget widget_social_buttons">
                      <a href="#" className="fab fa-facebook-f" title="facebook" />
                      <a href="#" className="fab fa-twitter" title="twitter" />
                      <a href="#" className="fab fa-google" title="google" />
                      <a href="#" className="fab fa-youtube" title="youtube-play" />
                      <a href="#" className="fas fa-rss" title="rss" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <section className="page_copyright ds s-py-10">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-center">
                  <p><span className="copyright_year">©</span> Copyright Mi15 Agency - United States Army</p>
                </div>
              </div>
            </div>
          </section>

        </div>{/* eof #box_wrapper */}
      </div>{/* eof #canvas */}

  {/* email decode script (kept lazy) */}
  <Script src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js" strategy="lazyOnload" />
    </>
  )
}
