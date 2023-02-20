import React, { useState } from "react";
import { send } from "emailjs-com";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Parallax, Background } from "react-parallax";
import * as BS from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // pt: 4,
  // pb: 4,
  pl: 4,
  pr: 4,
};

const Unsub = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false) && window.location.reload;

  const [toSend, setToSend] = useState({
    business: "",
    email: "",
    name: "",
    phone: "",
    message: "",
    reply_to: "",
  });

  const [errors, setErrors] = useState({
    business: "",
    email: "",
    name: "",
    phone: "",
    message: "",
    reply_to: "",
  });

  const validate = () => {
    let temp = {};
    // temp.name = toSend.name ? "" : "Name is required";
    // temp.business = toSend.business ? "" : "Business Name is required";
    temp.email = /$^|.+@.+..+/.test(toSend.email) ? "" : "Email is not valid";
    // temp.phone =
    // toSend.phone.length > 8 ? "" : "Please enter a valid phone number";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const resetForm = () => {
    window.location.reload();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setOpen(true);
      send("service_0t74imh", "template_q1ecudp", toSend, "87uW5IjR7xE2EqVKU")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="bluecard">
      <BS.Container>
        <Container className="form" sx={{ pt: 10 }}>
          <BS.Row>
            <BS.Col>
            <div data-aos="fade-down" data-aos-duration="1000">
              <img src="/5star.png" alt="one" width="300" />
              </div>
            </BS.Col>
            <BS.Col md={7}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Typography>
                <Typography
                  variant="h4"
                  // className="white-background"
                  sx={{
                    pt: 0,
                    pl: 3,
                    pr: 3,
                    pb: 0,
                    justifyContent: "center",
                  }}
                >
                  <div className="fontbold">Looking for updates?</div>
                  <div className="fontbold">Fill out the form below </div>
                  <br />
                  <h4>Sign up to get weekly notifications on new events</h4>

                  <br />
                </Typography>
              </Typography>

              <div>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  autoComplete="off"
                  onSubmit={onSubmit}
                >
                  <Container>
                    <Box
                      className="font"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <TextField
                        required
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        autoComplete="email"
                        value={toSend.email}
                        onChange={handleChange}
                        name="email"
                        helperText={errors.email}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        "& > :not(style)": { m: 0 },
                      }}
                    ></Box>
                  </Container>
                  <br/>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      pt: 0,
                      pb: 10,
                    }}
                  >
                    <div data-aos="zoom-out" data-aos-duration="2000">
                      <button>
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                  
                        <span>Submit</span>
                      </button>

                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={resetForm}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open}>
                          <Box sx={style}>
                            <Typography
                              id="transition-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Thanks for submitting your details
                            </Typography>
                            <Typography
                              id="transition-modal-description"
                              sx={{ mt: 0 }}
                            >
                             Sorry to see you go
                            </Typography>
                          </Box>
                        </Fade>
                      </Modal>
                    </div>
                  </Box>
                </Box>
              </div>
            </div>
            </BS.Col>
          </BS.Row>
        </Container>
      </BS.Container>
    </div>
  );
};

export default Unsub;
