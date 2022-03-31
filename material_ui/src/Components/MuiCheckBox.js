import { Checkbox, FormControlLabel, FormLabel } from '@mui/material'
import React, { useState } from 'react'

function MuiCheckBox() {
    const [acceptCheck, setAcceptCheck] = useState(false)
    const [skills, setSkills] = useState([])

    const handleChange = (e) => {
        setAcceptCheck(e.target.checked)
    }

    const handleSkillChange = (e) => {
        const index = skills.indexOf(e.target.value)
        if (index === -1) {
            setSkills([...skills, e.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
    }
    console.log(acceptCheck)
    console.log(skills)
    return (
        <div>
            <FormControlLabel label='I accept all terms and conditions'
                control={<Checkbox checked={acceptCheck} onChange={handleChange} />}>
            </FormControlLabel>
            <FormLabel>Skill</FormLabel>
            <FormControlLabel label='html' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} />} />
            <FormControlLabel label='css' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange} />} />
            <FormControlLabel label='JavaScript' control={<Checkbox value='JavaScript' checked={skills.includes('JavaScript')} onChange={handleSkillChange} />} />
        </div>
    )
}

export default MuiCheckBox