import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import emailjs from "emailjs-com";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./ContactMe.css";


export default function ContactMe(props) {
  const recaptchaContainerRef = useRef(null); // Ref for the reCAPTCHA container element

  useEffect(() => {
    const loadReCaptcha = () => {
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      window.onloadCallback = () => {
        const siteKey = "6Le-qsglAAAAAOlN9b5gC0W_wxSBmHbAfosmwqBT"; // Replace with your actual site key

        if (
          recaptchaContainerRef.current &&
          typeof window.grecaptcha !== "undefined"
        ) {
          window.grecaptcha.render(recaptchaContainerRef.current, {
            sitekey: siteKey,
          });
        }
      };
    };

    loadReCaptcha();
  }, []);

  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_0so4k0d",
        "template_fsjf079",
        e.target,
        "DmkIqtFP9TZ2_6UAN"
      )
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep in Touch"} title={"Contact Me"} />

      <div className="central-form">
        <div className="back-form">
          <div className="col d-flex align-items-center">
            <div className="p-3">
              <h2 className="title">
                <TypeAnimation
                  sequence={[
                    "Get in Touch",
                    2000,
                    "Send an Email",
                    2000,
                    "Contact Me",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </h2>
              <div className='icons'>
                <a className='m-1' href='https://www.linkedin.com/in/maroungrey/' target="_blank">
                    <i className='fa fa-linkedin-square'></i>
                </a>
                <a className='m-1' href='https://github.com/maroungrey' target="_blank">
                    <i className='fa fa-github'></i>
                </a>
                <a className='m-1' href='https://www.instagram.com/the_real_maroun/' target="_blank">
                    <i className='fa fa-instagram'></i>
                </a>
              </div>

              <div className="img-back">
                <h4 className="pt-2 pb-2">Send Your Email Here!</h4>
                <div className="email-image"></div>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <form
              action="?"
              method="POST"
              className="contact-form"
              onSubmit={sendEmail}
            >
              <br />
              <label htmlFor="name">Name</label>
              <input type="text" name="from_name" id="name" required />

              <label htmlFor="email">Email</label>
              <input type="text" name="user_email" id="email" required />

              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>

              <div ref={recaptchaContainerRef} id="recaptcha-container"></div>

              <div className="send-btn">
                <button type="submit" aria-label="Send">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="copyright">
        <span>© MarounGrey {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
