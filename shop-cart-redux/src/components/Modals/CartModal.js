import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { closeCartModalAction } from "../../redux/Modals/modal-actions";
import { removeFromCartAction } from "../../redux/Shopping/shopping-actions";
import "./CartModal.css"

const CartModal = ({
  id,
  isCartModalOpen,
  removeFromCart,
  closeCartModal,
  productTitle,
}) => (
  <Modal
    isOpen={isCartModalOpen}
    ariaHideApp={false}
    contentLabel="Remove All"
    onRequestClose={closeCartModal}
    closeTimeoutMS={300}
    className="modal"
    style={{
      overlay: {
        backgroundColor: "rgba(128, 128, 128, 0.85)",
      },
    }}
  >
    <h3 className="modal__title">Delete "{productTitle}" from the Cart?</h3>
    <div className="buttons__center">
      <button onClick={() => {
        removeFromCart(id)
        closeCartModal()
      }} className="button">
        Confirm
      </button>
      <button onClick={closeCartModal} className="button">
        Cancel
      </button>
    </div>
  </Modal>
);
const mapStateToProps = (state) => {
  return {
    id: state.modal.currentProductId,
    isCartModalOpen: state.modal.isCartModalOpen,
    productTitle: state.modal.currentProductTitle
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCartAction(id)),
    closeCartModal: () => dispatch(closeCartModalAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
