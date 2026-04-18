import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Data Analysis",
    "Google Insider Tools",
    "Google Sheets",
    "GCP",
    "Python",
    "SQL",
  
];

const labelsSecond = [
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub Actions",
    "Networking",
    "Bash",
    "GCP",
    "Linux",
    "ArgoCD",
    "Server",
    "Nginx",
];

const labelsThird = [
    "OpenAI",
    "Ml",
    "Python",
    "Hugging Face",
    "OpenCV",
    "Tensorflow",
    "Pandas",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Science</h3>
                    <p> Contributed to a 98% accuracy of Knowledge Graph results, directly impacting user engagement and satisfaction.Collaborated with cross-functional teams (e.g. Engineers and PM's) to implement data-driven strategies for enhancing the Knowledge Graph’s performance and integration with Google Search.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & ML</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have experience building Face Recognize Model solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;