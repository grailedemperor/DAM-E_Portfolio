import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard.js"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import HittingTheTown from '../assets/img/hittingthetown.png'
import TechBlog from '../assets/img/techblog.png'
import PWA from '../assets/img/pwa.png'
import EndlessBooks from '../assets/img/endlessbooks.png'
import BookSearch from '../assets/img/googlebooksearch.png'
import NoteTaker from '../assets/img/notetaker.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import github from '../assets/img/iconmonstr-github-5.svg'
import heroku from '../assets/img/heroku-icon.svg'

const Portfolio = () => {

  const CBprojects = [
    {
      title: "Endless Books",
      description: "MERN",
      imgUrl: EndlessBooks,
      gitUrl: "https://github.com/grailedemperor/EndlessBooks", 
      deployUrl:"https://fierce-brushlands-14439.herokuapp.com/", 
      githubIcon:github, 
      deployIcon: heroku
    },
    {
      title: "Tech Blog",
      description: "MVC",
      imgUrl: TechBlog,
      gitUrl: "https://github.com/grailedemperor/tech-blog", 
      deployUrl:"https://blogoftech-app.herokuapp.com/", 
      githubIcon: github, 
      deployIcon: heroku
    },
    {
      title: "PWA Text Editor",
      description: "PWA",
      imgUrl: PWA,
      gitUrl: "https://github.com/grailedemperor/PWA-Text-Editor", 
      deployUrl:"https://ge-pwa-text-editor.herokuapp.com/", 
      githubIcon: github, 
      deployIcon: heroku
    },
    {
      title: "Hitting The Town",
      description: "Design & API Integration",
      imgUrl: HittingTheTown,
      gitUrl: "https://github.com/margotcooper/never-leaving", 
      deployUrl:"https://margotcooper.github.io/never-leaving/",   
      githubIcon: github, 
      deployIcon: heroku
    },
    {
      title: "Book Search Engine",
      description: "MERN, Apollo Server & GraphQL",
      imgUrl: BookSearch,
      gitUrl: "https://github.com/grailedemperor/BookSearchEngine", 
      deployUrl:"https://googlebooks-searchengine-app.herokuapp.com/", 
      githubIcon: github, 
      deployIcon: heroku
    },
    {
      title: "Note Taker Plus",
      description: "Express.js",
      imgUrl: NoteTaker,
      gitUrl: "https://github.com/grailedemperor/NoteTakerPlus", 
      deployUrl:"https://notetakerplus-app.herokuapp.com/", 
      githubIcon: github, 
      deployIcon: heroku
    },
  ];
  const Fprojects = [
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
                            CBprojects.map((project, index) => {
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
                            Fprojects.map((project, index) => {
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
                            Fprojects.map((project, index) => {
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