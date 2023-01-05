import { Col} from 'react-bootstrap'


const ProjectCard = ({title, description, imgUrl, gitUrl, deployUrl, githubIcon, deployIcon}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img className='ProjImg' src={imgUrl} alt=""/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br>
                    <br></br>
                    <a href={gitUrl} alt="github-repo"><img className='icons'src={githubIcon} alt="github-repo"/></a>
                    <br></br>
                    <br></br>
                    <a href={deployUrl} alt="deployed"><img className='icons' src={deployIcon} alt="deployed"/></a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;