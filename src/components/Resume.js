import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Resume = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>See my skills ranked and scored below.<br></br> <br></br> | Business Analysis skills on top | <br></br><br></br>| Development skills on the bottom |</p>
                        <a href="resume-loc" class='download' download>Download My Resume!</a> 
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider business-analyst">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>Agile Project Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>Tableau</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>Excel</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image4" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider web-dev" >
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image4" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/*<img className="background-image-left" src={colorSharp} alt="Image5" />*/}
    </section>
  )
}

export default Resume;