import React, { useRef } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useContacts } from '../Context/ContactProvider'

function NewContactModal({ closeModal }) {
    const idRef = useRef()
    const nameRef = useRef()
    const { createContact } = useContacts()

    const handleSubmit = (e) => {
        e.preventDefault()
        createContact(idRef.current.value,nameRef.current.value)
        closeModal()
    }
    return (
        <div>
            <Modal.Header>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type='text' ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' ref={nameRef} required />
                    </Form.Group>
                    <button className='btn btn-primary' type='submit'>Create</button>
                </Form>
            </Modal.Body>
        </div>
    )
}

export default NewContactModal
