import logo from '@/assets/img/logo/react.png'

const Leftpart = () => {
    return (
        <>
            <div className="arlo_tm_leftpart_wrap">
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={logo} alt="desktop-logo" width="40%" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#services">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li><a href="#"><i className="xcon-facebook"></i></a></li>
                                <li><a href="#"><i className="xcon-twitter"></i></a></li>
                                <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                                <li><a href="#"><i className="xcon-instagram"></i></a></li>
                                <li><a href="#"><i className="xcon-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
                </div>
            </div>
        </>
    )
}

export default Leftpart;