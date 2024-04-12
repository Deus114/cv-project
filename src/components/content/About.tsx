import LogoPerson from '@/assets/img/about/person.png'
import mycv from '@/assets/Cv/mycv.pdf'

const About = () => {
    return (
        <>
            <div className="arlo_tm_section relative" id="about">
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.1">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner" data-img-url={LogoPerson}></div>
                                        </div>
                                        <div className="border layer" data-depth="0.2">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>I'm Alan Michaelis and <span className="arlo_tm_animation_text_word"></span></h4>
                                    </div>
                                    <div className="definition">
                                        <p>Hi! My name is <strong>Alan Michaelis</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Birthday:</label> 19/06/2003</span>
                                            </li>
                                            <li>
                                                <span><label>Gender:</label> Male</span>
                                            </li>
                                            <li>
                                                <span><label>City:</label> Ho Chi Minh City</span>
                                            </li>
                                            <li>
                                                <span><label>University:</label> Ho Chi Minh City University of Technology (2021-Now)</span>
                                            </li>
                                            <li>
                                                <span><label>Faculty:</label> Computer Science and Engineering</span>
                                            </li>
                                            <li>
                                                <span><label>Email:</label> lekhaduy0917880045&#64;gmail.com</span>
                                            </li>
                                            <li>
                                                <span><label>Github:</label> </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={mycv} download><span>Download CV</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About