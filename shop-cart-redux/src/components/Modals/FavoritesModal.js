import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { closeFavoritesModalAction } from "../../redux/Modals/modal-actions";
import { removeFromFavoritesAction } from "../../redux/Shopping/shopping-actions";
import "./CartModal.css"

const FavoritesModal = ({
  id,
  isFavoritesModalOpen,
  removeFromFavorites,
  closeFavoritesModal,
  productTitle,
}) => (
  <Modal
    isOpen={isFavoritesModalOpen}
    ariaHideApp={false}
    contentLabel="Remove item from Favorites"
    onRequestClose={closeFavoritesModal}
    closeTimeoutMS={300}
    className="modal"
    style={{
      overlay: {
        backgroundColor: "rgba(128, 128, 128, 0.85)",
      },
    }}
  >
    <h3 className="modal__title">Delete "{productTitle}" from the Favorites?</h3>
    <div className="buttons__center">
      <button onClick={() => {
        removeFromFavorites(id)
        closeFavoritesModal()
      }} className="button">
        Confirm
      </button>
      <button onClick={closeFavoritesModal} className="button">
        Cancel
      </button>
    </div>
  </Modal>
);
const mapStateToProps = (state) => {
  return {
    id: state.modal.currentFavoriteId,
    isFavoritesModalOpen: state.modal.isFavoritesModalOpen,
    productTitle: state.modal.currentFavoriteTitle
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (id) => dispatch(removeFromFavoritesAction(id)),
    closeFavoritesModal: () => dispatch(closeFavoritesModalAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesModal);
