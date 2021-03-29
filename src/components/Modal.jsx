import React from 'react'
import Users from '../assets/Users.svg'
import Timezone from '../assets/Timezone.svg'
import Views from '../assets/Views.svg'
import Close from '../assets/Close.svg'
import './Modal.css'

const Modal = ({ close, current }) => {
  return (
    <div className="modal">
      <img src={Close} className="modal-close" onClick={close} alt="close" />
      <div className="modal-title">{current?.name}</div>
      <br />
      <div className="attribute users">
        <img className="icon" src={Users} alt="users" />
        {current?.userCount} Users
      </div>

      <div className="attribute time">
        <img className="icon" src={Timezone} alt="timezone" />
        {current?.time}
      </div>

      <div className="attribute views">
        <img className="icon" src={Views} alt="views" />
        {current?.views} View{current?.views !== 1 && 's'}
      </div>
      <br />
      <div className="description-title">Description</div>
      <div className="description">{current?.description}</div>
      <br />
      <div className="done" onClick={close}>
        <span>Done</span>
      </div>
    </div>
  )
}

export default Modal
