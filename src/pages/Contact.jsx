import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      .then(
        () => {
          setStatus("success");
          setSending(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
          setSending(false);
        },
      );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-12 col-lg-6">
            <h1>Contact Me</h1>
            <p className="me-5">Have a question? Feel free to reach out. I'm always open to professional opportunities! </p>
            <p>Question about where I've been? Happy to answer those too!</p>
          </div>
          <div className="col-12 col-lg-6">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              {/* To simplify the tutorial, the value is static. */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div className="mb-3">
                <label htmlFor="contactName" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="contactName"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="emailAddress" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" className="form-text">
                  I'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="messageSubject" className="form-label">
                  Subject
                </label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  id="messageSubject"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="messageBody" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="messageBody"
                  rows="5"
                  required
                />
              </div>

              {status === "success" && (
                <div className="alert alert-success" role="alert">
                  ✅ Your message was sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="alert alert-danger" role="alert">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary "
                disabled={sending}
              >
                {sending ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
