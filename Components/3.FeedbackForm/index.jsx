import React, { useState } from "react";
import styles from "./styles.module.css";
import DropIcon from "@material-ui/icons/ArrowBackIosRounded";

const FeedbackPopup = ({ onClose, onSend }) => {
  const [feedback, setFeedback] = useState("");

  const handleSendFeedback = () => {
    onSend({ feedback });
    onClose();
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupBackground} onClick={onClose}></div>
      <div className={styles.popupContent}>
        <div className={styles.backButtonContainer} onClick={onClose}>
          <DropIcon
            style={{ color: "#3692ff", width: "16px", height: "16px" }}
          />
          <span className={styles.backTitle}>BACK</span>
        </div>
        <div className={styles.popupMainContent}>
          <h2>Send Feedback</h2>
          <div className={styles.popupActions}>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className={styles.textareaField}
              placeholder="Got any bugs to report, ideas to share, or feedback to give? Let us know!"
            ></textarea>
            <button className={styles.sendButton} onClick={handleSendFeedback}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;
