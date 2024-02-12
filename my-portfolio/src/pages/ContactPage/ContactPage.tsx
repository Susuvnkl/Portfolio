import LinkedInIcon from "../../components/common/Icons/LinkedInIcon/LinkedInIcon";
import SendMessageIcon from "../../components/common/SendMessageIcon/SendMessageIcon";
import styles from "./ContactPage.module.scss";
import { useForm, ValidationError } from "@formspree/react";

function ContactPage() {
  const [state, handleSubmit] = useForm("moqgqegb");

  return (
    <div id="contact" className={styles.PageSection}>
      <div className={styles.ContactPage}>
        {state.succeeded ? (
          <>
            <p>Your message has been sent successfully!</p>
            <p>Thank you for reaching out. We'll be in touch soon.</p>
          </>
        ) : (
          <>
            <h1>Let's Chat</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <label htmlFor="message">Message</label>

              <textarea id="message" name="message" rows={4} />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <div className={styles.ButtonContainer}>
                <button type="submit" disabled={state.submitting}>
                  <SendMessageIcon size="small" />
                </button>
              </div>
              <div className={styles.IconsContainer}>
                <LinkedInIcon color_mode="dark" />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactPage;
