import React, { useState } from 'react'
import { Tab, Nav, Modal } from 'react-bootstrap'
import Chats from './Chat'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewChatModal from './NewChatModal'

const CHAT_KEY = 'chat'
const CONTACT_KEY = 'contact'

function SideBar() {
    const [activeKey, setActiveKey] = useState(CHAT_KEY)
    const ChatOpen = activeKey === CHAT_KEY
    const [modalOpen, setModalOpen] = useState(false)

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <div style={{ width: '250px' }} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item >
                        <Nav.Link eventKey={CHAT_KEY}>Chat</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACT_KEY}>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content >
                    <Tab.Pane eventKey={CHAT_KEY}>
                        <Chats />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACT_KEY}>
                        <Contacts />``
                    </Tab.Pane>
                </Tab.Content>
                <button onClick={()=>{setModalOpen(true)}} className='btn btn-primary '>
                    New {ChatOpen ? 'chat' : 'contact'}
                </button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal} >
                {ChatOpen ? <NewChatModal closeModal={closeModal}/> : <NewContactModal closeModal={closeModal}/>}
            </Modal>

        </div>
    )
}

export default SideBar
