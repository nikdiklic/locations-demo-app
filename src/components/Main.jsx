import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appStart } from '../store/actions/app'
import Locations from './Locations'
import './Main.css'
import Header from './Header'
import ReactModal from 'react-modal'

import Modal from './Modal'
import { closeModal } from '../store/actions/locations'

ReactModal.setAppElement('#root')

const Main = () => {
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
        className="modal-parent"
        overlayClassName="overlay"
        isOpen={current !== null}
        shouldCloseOnOverlayClick={false}
        contentElement={() => <Modal close={() => handleCloseModal()} current={current} />}
      />
    </div>
  )
}

export default Main
