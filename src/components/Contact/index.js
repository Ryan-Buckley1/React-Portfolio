import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const InputTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "ivory",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "purple",
      },
    },
  });

  const purple = {
    500: "rgba(170, 124, 212, 0.582)",
    600: "rgba(158, 84, 226, 0.582)",
    700: "rgba(168, 75, 255, 0.842)",
  };

  const CustomButton = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${purple[500]};
    padding: 12px 24px;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: ${purple[600]};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${purple[700]};
    }

    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
        0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      emailjs
        .sendForm(
          "service_6z3y3qf",
          "template_20qqv8g",
          form.current,
          "C2JKAVsz1VtsrN8f6"
        )
        .then((result) => {
          console.log(result.text);
          alert("message sent!");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <section id="contact">
        <h1>Get ahold of me!</h1>
        <p>
          You can fill out the form provided below or you can contact me via my
          GitHub, LinkedIn and Email are provided in the footer!
        </p>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <InputTextField
            required
            label="Name"
            name="name"
            defaultValue={name}
            className="form-field"
            onBlur={handleChange}
          />
          <InputTextField
            required
            label="Email"
            name="email"
            defaultValue={email}
            className="form-field"
            onBlur={handleChange}
          />
          <InputTextField
            required
            multiline
            label="Message"
            name="message"
            defaultValue={message}
            className="form-field message-form"
            onBlur={handleChange}
          />

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <CustomButton type="submit">Send to Ryan!</CustomButton>
        </form>
      </section>
    </>
  );
}

export default Contact;
