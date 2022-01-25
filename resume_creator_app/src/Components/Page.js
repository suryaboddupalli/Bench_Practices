import React, { useState } from 'react';
import Personal_Details from './Data/Personal_Details';
import Education_Details from './Data/Education_Details'
import Experience from './Data/Experience';
import Skills from './Data/Skills';
import Objective from './Data/Objective';
import Projects from './Data/Projects';

function Page() {
    const [showPersonalDetails, setShowPersonalDetails] = useState(false)
    const [showEducation, setShowEducation] = useState(false)
    const [showExperiance, setShowExperiance] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const [showObjective, setShowObjective] = useState(false)
    const [showProjects, setShowProjects] = useState(false)


    return (
        <div  >
            <h2 className='text-center mb-5 bg-primary p-2 text-white fixed-top '>Profile</h2>
            <div className='d-grid mt-3 p-1'>
                <button className='btn btn-secondary  mt-5 p-2 fs-5' onClick={() => setShowPersonalDetails(!showPersonalDetails)}>Personal Details</button>
                {showPersonalDetails ? <Personal_Details /> : null}
            </div>
            <div className='d-grid m-2 '>
                <button className='btn btn-secondary p-3 fs-5' onClick={() => setShowEducation(!showEducation)}>Education Details</button>
                {showEducation ? <Education_Details /> : null}
            </div>
            <div className='d-grid m-2 p-1'>
                <button className='btn btn-secondary p-3 fs-5' onClick={() => setShowExperiance(!showExperiance)}>Experience</button>
                {showExperiance ? <Experience /> : null}
            </div>
            <div className='d-grid m-2 p-1'>
                <button className='btn btn-secondary p-3 fs-5' onClick={() => setShowSkills(!showSkills)}>Skills</button>
                {showSkills ? <Skills /> : null}
            </div>
            <div className='d-grid m-2 p-1'>
                <button className='btn btn-secondary p-3 fs-5' onClick={() => setShowObjective(!showObjective)}>Objective</button>
                {showObjective ? <Objective /> : null}
            </div>
            <div className='d-grid m-2 p-1'>
                <button className='btn btn-secondary p-3 fs-5 ' onClick={() => setShowProjects(!showProjects)}>Projects</button>
                {showProjects ? <Projects /> : null}
            </div>
            <div className=' d-grid p-2 fixed-bottom'>
                <button className='btn btn-primary mt-3 fs-4'>Veiw CV</button>
            </div><br />
        </div>
    )
}

export default Page;
