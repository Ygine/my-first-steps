import $ from 'jquery';

  const OpenModal = e => {
    $('.js-modal-backdrop').toggleClass("modal-hidden");
    $(window).on("keydown", hendleKeyPress);
  };

  const CloseModal = e => {
    $('.js-modal-backdrop').toggleClass("modal-hidden");
    $(window).off("keydown", hendleKeyPress);
  };

  const hendleKeyPress = e => {
    if (e.code !== "Escape") {
      return;
    }
    CloseModal();
  };

  const hendleBackdropClick = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    $('.js-modal-backdrop').toggleClass("modal-hidden");
  };

  $('[data-action="open-modal"]').on("click", OpenModal);
  $('[data-action="close-modal"]').on("click", CloseModal);
  $('.js-modal-backdrop').on("click", hendleBackdropClick);