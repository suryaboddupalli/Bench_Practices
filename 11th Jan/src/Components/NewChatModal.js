import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useContacts } from '../Context/ContactProvider'
import {useChat} from '../Context/ChatProvider'

function NewChatModal({closeModal}) {
    const { contacts } = useContacts()
    const {createChat} = useChat()
    const [selectedContactId, setSelectedContactId] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        createChat(selectedContactId)
        closeModal()
    }

    function handleChange(contactId) {
        setSelectedContactId((prevSelectesContactId) => {
            if (prevSelectesContactId.includes(contactId)) {
                return prevSelectesContactId.filter(prevId => {
                    return contactId === prevId
                })
            } else {
                return [...prevSelectesContactId, contactId]
            }

        })
    }
    return (
        <div>
            <Modal.Header>Create Chat</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map((contact) => {
                        // console.log(contact)
                        <Form.Group>
                            <Form.Check type='checkbox' value={selectedContactId.include(contact.id)}
                                label={contact.name}
                                onChange={() => { handleChange(contact.id) }} />
                        </Form.Group>

                    })}
                    <button className='btn btn-primary' type='submit'>Create</button>
                </Form>
            </Modal.Body>
        </div>
    )
}

export default NewChatModal
