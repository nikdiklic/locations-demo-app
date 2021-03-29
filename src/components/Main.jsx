import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appStart } from '../store/actions/app'
import Locations from './Locations'
import './Main.css'
import Header from './Header'
import ReactModal from 'react-modal'
import { closeModal } from '../store/actions/locations'
import Users from '../assets/Users.svg'
import Timezone from '../assets/Timezone.svg'
import Views from '../assets/Views.svg'
import Close from '../assets/Close.svg'

ReactModal.setAppElement('#root')

export default function Main() {
  const dispatch = useDispatch()
  const handleCloseModal = () => dispatch(closeModal())
  const current = useSelector(state => state.locations.current)
  useEffect(() => {
    dispatch(appStart())
  }, [dispatch])
  return (
    <div className="main">
      <Header />
      <Locations />
      <ReactModal
        className="modal"
        overlayClassName="overlay"
        onRequestClose={handleCloseModal}
        isOpen={current !== null}
        shouldCloseOnOverlayClick={false}
      >
        <img src={Close} className="modal-close" onClick={handleCloseModal} alt="close" />
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
        <div className="done" onClick={handleCloseModal}>
          <span>Done</span>
        </div>
      </ReactModal>
    </div>
  )
}
