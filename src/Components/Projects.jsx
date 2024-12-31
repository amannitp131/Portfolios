import PropTypes from 'prop-types';
import './Projects.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Projectslist = ({ id, image, name, description, review }) => (
  <div className="projects-container">
    <input type="checkbox" id={id} className="more" aria-hidden="true" />
    <div className="content">
      <div className="front" style={{ backgroundImage: `url(${image})` }}>
        
        <div className="inner">
          <h2 id='project_name'>{name}</h2>
          
          {/* Buttons on the front */}
          {/* <div className="button-group">
            <button className="button view-code">View Code</button>
            <button className="button live-demo">Live Demo</button>
          </div> */}
          <label htmlFor={id} className="button" aria-hidden="true">
            {review}
          </label>
        </div>
      </div>
      <div className="back">
        <div className="inner">
          <div className="description">
            <p>{description}</p>
          </div>
          <label htmlFor={id} className="button return" aria-hidden="true">
            <i className="fas fa-arrow-left" />
          </label>
        </div>
      </div>
    </div>
  </div>
);

Projectslist.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

const Projects = () => {
  const ProjectsData = [
    {
      id: 'Projects1',
      image: 'src/assets/userimage.png',
      name: 'Health Day',
      description: '•	Speech on World Environmental Health Day, organised by Red Ribbon Club in collaboration with Sehat Kendra National Institute of Technology, Patna.',
      review: 'View details',
    },
    {
      id: 'Projects2',
      image: 'src/assets/userimage.png',
      name: 'Chandrayaan-3',
      description: '•	Presentation of poster on Chandrayaan-3 in poster making competition organised by E-cell National Institute of Technology, Patna.',
      review: 'View details',
    },
    // {
    //   id: 'Projects3',
    //   image: 'src/assets/userimage.png',
    //   name: 'Hello college',
    //   description: 'Accessing accurate, up-to-date records instantly has significantly improved patient outcomes and streamlined our clinical workflows.',
    //   review: 'View details',
    // },
    // {
    //   id: 'Projects4',
    //   image: 'src/assets/userimage.png',
    //   name: 'Netflix-clone',
    //   description: 'Blockchain integration has enhanced data integrity and security, simplifying record sharing across our healthcare network with ease.',
    //   review: 'View details',
    // },
    // {
    //   id: 'Projects5',
    //   image: 'src/assets/userimage.png',
    //   name: 'DPHRS',
    //   description: 'Blockchain technology has revolutionized record-keeping, ensuring data accuracy and protecting patient information with top-notch security.',
    //   review: 'View details',
    // },

  ];

  return (
    <div id='second_row'>
      <h1 className='heading1'>Projects</h1>
       <div className="wrapper">
      {ProjectsData.map(project => (
        <Projectslist key={project.id} {...project} />
      ))}
    </div>
    </div>
    
  );
};

export default Projects;
