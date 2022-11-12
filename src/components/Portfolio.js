import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard.js"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import github from '../assets/img/iconmonstr-github-5.svg'
import heroku from '../assets/img/heroku-icon.svg'

const Portfolio = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      gitUrl: "", 
      deployUrl:"", 
      githubIcon: github, 
      deployIcon: heroku
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      gitUrl: "", 
      deployUrl:"", 
      githubIcon: github, 
      deployIcon: heroku
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      gitUrl: "", 
      deployUrl:"", 
      githubIcon: github, 
      deployIcon: heroku
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      gitUrl: "", 
      deployUrl:"", 
      githubIcon:github, 
      deployIcon: heroku
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      gitUrl: "", 
      deployUrl:"", 
      githubIcon: github, 
      deployIcon: heroku
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      gitUrl: "", 
      deployUrl:"", 
      githubIcon: github, 
      deployIcon: heroku
    },
  ];

  return (
    <section className="project" id="project">
      <Container className='projects'>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Portfolio</h2>
                  <p>Projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Coding Bootcamp</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Future Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Future Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;