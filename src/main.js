import "normalize.css";

import "./styles/variables.scss";

import "./styles/global.scss";

import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/side_menu.scss";
import "./styles/main.scss";
import "./styles/feedback-modal.scss";

const feedbackModal = document.querySelector(".feedback-modal");
const feedbackOpenButtons = document.querySelectorAll(".feedback-open");
const feedbackClose = document.querySelector(".feedback-modal__close");
const feedbackOverlay = document.querySelector(".feedback-modal__overlay");

function openFeedback() {
  if (!feedbackModal) return;
  feedbackModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeFeedback() {
  if (!feedbackModal) return;
  feedbackModal.hidden = true;
  document.body.style.overflow = "";
}

feedbackOpenButtons.forEach((btn) => {
  btn.addEventListener("click", openFeedback);
});

if (feedbackClose) feedbackClose.addEventListener("click", closeFeedback);
if (feedbackOverlay) feedbackOverlay.addEventListener("click", closeFeedback);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && feedbackModal && !feedbackModal.hidden) {
    closeFeedback();
  }
});
