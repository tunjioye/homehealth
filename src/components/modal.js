import React from 'react'
import PropTypes from 'prop-types'
import './styles/modal.scss'

const Modal = ({
  id, title, children, footer, size, active, handleModalClose,
}) => {
  const modalSizes = {
    small: 'xs',
    large: 'lg',
  }

  return (
    <div className={`${size ? `modal modal-${modalSizes[size]}` : 'modal'}${active ? ' active' : ''}`} id={id || 'modal-id'}>
      <div role="button" className="modal-overlay" aria-label="Close" onClick={handleModalClose} />
      <div className="modal-container">
        {(title) && (
          <div className="modal-header">
            <span role="button" className="button button-clear" aria-label="Close" onClick={handleModalClose}>✕</span>
            <h5 className="modal-title">{title || 'Modal Title'}</h5>
          </div>
        )}
        <div className="modal-body">
          <div className="content">
            {children}
          </div>
        </div>
        {(footer) && (
          <div className="modal-footer">
            {footer || '...'}
          </div>
        )}
      </div>
    </div>
  )
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
}

export default Modal
