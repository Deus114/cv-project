import HomeCV from "components/content/Homecv";
import About from "./content/About";
import Skills from "./content/Skill";
import Project from "./content/Project";
import Contact from "./content/Contact";

const Rightpart = () => {
    return (
        <>
            <div className="arlo_tm_rightpart">
                <div className="rightpart_inner">
                    <HomeCV />

                    {/* <!-- ABOUT --> */}
                    <About />
                    {/* <!-- /ABOUT --> */}

                    {/* <!-- SKILLS --> */}
                    <Skills />
                    {/* <!-- /SKILLS --> */}

                    {/* <!-- PROJECTS --> */}
                    <Project />
                    {/* <!-- /PROJECTS --> */}


                    {/* <!-- CONTACT & FOOTER --> */}
                    <Contact />
                    {/* <!-- /CONTACT & FOOTER --> */}

                </div>
            </div>
        </>
    )
}

export default Rightpart;