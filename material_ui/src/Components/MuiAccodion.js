import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MuiAccodion() {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false)
        console.log(panel)
    }
    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={(e, isExpanded) => handleChange(isExpanded, 'panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Accordion. Build vertically collapsing accordions in combination with our Collapse JavaScript plugin</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={(e, isExpanded) => handleChange(isExpanded, 'panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Accordion. Build vertically collapsing accordions in combination with our Collapse JavaScript plugin</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={(e, isExpanded) => handleChange(isExpanded, 'panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Accordion. Build vertically collapsing accordions in combination with our Collapse JavaScript plugin</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default MuiAccodion