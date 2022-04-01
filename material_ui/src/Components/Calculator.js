import { Table, TableContainer, TableHead, TableRow, TableCell, Button } from '@mui/material';
import React, { useState } from 'react';

function Calculator() {
    const [value, setValue] = useState()

    const handleClick = (e) => {

        console.log(setValue(value.concat(e.target.name)))
    }

    const clear = () => {
        setValue('')
    }

    const calculate = () => {
        setValue(eval(value).toString());
    }


    return (
        <TableContainer>
            <Table >
                <TableHead>
                    <TableRow style={{ border: '2px solid' }}  >
                        <TableCell colSpan={3} >
                            {value}
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={clear}>c</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='7'>7</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='8'>8</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='9'>9</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='/'>/</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='4'>4</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='5'>5</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='6'>6</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='*'>*</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='3'>3</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='2'>2</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='1'>1</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='-'>-</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='0'>0</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='.'>.</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={calculate} name='='>=</Button>
                        </TableCell>
                        <TableCell  >
                            <Button variant='outlined' onClick={handleClick} name='+'>+</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
}


export default Calculator;