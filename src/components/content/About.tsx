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
                                        <h4>I'm Khả Duy <span className="arlo_tm_animation_text_word"></span></h4>
                                    </div>
                                    <div className="definition">
                                        <p>Hi! My name is <strong>Duy</strong>. I am a student with a passion for technology and innovation. As a dedicated learner, I am constantly
                                            seeking new challenges to expand my skills and knowledge. I am excited to apply my skills in an internship setting, where I
                                            can learn from industry professionals and gain hands-on experience.</p>
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
                                                <span><label>University:</label> Ho Chi Minh City University of Technology (2021-Now)</span>
                                            </li>
                                            <li>
                                                <span><label>Faculty:</label> Computer Science and Engineering</span>
                                            </li>
                                            <li>
                                                <span><label>City:</label> Ho Chi Minh City</span>
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