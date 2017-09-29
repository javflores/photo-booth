import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1 id="homeHeading">Your Favorite Source of Free Bootstrap Themes</h1>
                            <hr/>
                            <p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                        </div>
                    </div>
                </header>

                <section className="bg-primary" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-heading text-white">We've got what you need!</h2>
                                <hr className="light"/>
                                <p className="text-faded">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
                                <a className="btn btn-default btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">At Your Service</h2>
                                <hr className="primary"/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-diamond text-primary sr-icons"/>
                                    <h3>Sturdy Templates</h3>
                                    <p className="text-muted">Our templates are updated regularly so they don't break.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-paper-plane text-primary sr-icons"/>
                                    <h3>Ready to Ship</h3>
                                    <p className="text-muted">You can use this theme as is, or you can make changes!</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"/>
                                    <h3>Up to Date</h3>
                                    <p className="text-muted">We update dependencies to keep things fresh.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                                    <h3>Made with Love</h3>
                                    <p className="text-muted">You have to make your websites with love these days!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="call-to-action bg-dark">
                    <div className="container text-center">
                        <h2>Free Download at Start Bootstrap!</h2>
                        <a className="btn btn-default btn-xl sr-button" href="http://startbootstrap.com/template-overviews/creative/">Download Now!</a>
                    </div>
                </div>

                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-heading">Let's Get In Touch!</h2>
                                <hr className="primary"/>
                                <p>Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center">
                                <i className="fa fa-phone fa-3x sr-contact"></i>
                                <p>123-456-6789</p>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                                <p>
                                    <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
