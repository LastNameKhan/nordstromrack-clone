import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
} from "@chakra-ui/react";
import "./Registration.css";
import Login from "./Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import { CloseIcon, MinusIcon } from "@chakra-ui/icons";

import MyAccount from "./MyAccount";

const Registration = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("lastname", JSON.stringify(lastname));
      localStorage.setItem("firstname", JSON.stringify(firstname));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Saved into local Storage");
      setLogin(!login);
    }
  }
  function handleClick() {
    setLogin(!login);
  }
  return (
    <div>
      {" "}
      {login ? (
        <div className="mainregisterdiv">
          <form onSubmit={handleSubmit}>
            <div style={{ background: "black", height: "100px" }}>
              <Flex>
                <Box
                  p="4"
                  bg="black"
                  color="white"
                  marginTop="10px"
                  fontSize="30px"
                  fontWeight="bold"
                >
                  SIGN IN
                </Box>
                <Spacer />
                <Box p="4" bg="black" color="white" marginTop="20px">
                  CLOSE
                  <CloseIcon className="closeiconfromchakra" />
                </Box>
              </Flex>
            </div>
            <div className="facebookredirectlink">
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                  <Heading
                    size="md"
                    color="white"
                    fontWeight="500"
                    fontSize="15px"
                  >
                    Sign in with Facebook
                  </Heading>
                </Box>
                <Spacer />
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="facebooksquareicon"
                ></FontAwesomeIcon>
              </Flex>
            </div>
            <div className="googleredirectlink">
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                  <Heading
                    size="md"
                    color="white"
                    fontWeight="500"
                    fontSize="15px"
                  >
                    Sign in with Google
                  </Heading>
                </Box>
                <Spacer />
                <FontAwesomeIcon
                  icon={faGooglePlusSquare}
                  className="googleplussquareicon"
                ></FontAwesomeIcon>
              </Flex>
            </div>
            <br />
            <div>
              <FormControl>
                <FormLabel htmlFor="first-name" fontWeight="450" color="black">
                  First Name
                </FormLabel>
                <Input
                  id="first-name"
                  placeholder="First name"
                  borderRadius="none"
                  className="form-control"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </FormControl>
            </div>
            <br />
            <div>
              <FormControl>
                <FormLabel htmlFor="first-name" fontWeight="450" color="black">
                  Last name
                </FormLabel>
                <Input
                  id="first-name"
                  placeholder="Last name"
                  borderRadius="none"
                  className="form-control"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </FormControl>
            </div>
            <br />
            <div>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name" fontWeight="450" color="black">
                  Email address
                </FormLabel>
                <Input
                  id="first-name"
                  placeholder="Email address"
                  borderRadius="none"
                  className="form-control"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
            </div>
            <br />
            <div>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name" fontWeight="450" color="black">
                  Password
                </FormLabel>
                <Input
                  id="first-name"
                  placeholder="Password"
                  borderRadius="none"
                  type="password"
                  className="form-control"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>
            </div>
            <FontAwesomeIcon icon="fa-solid fa-dash" />
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
            <br />
            <br />
            <Button
              colorScheme="none"
              border="2px solid black"
              borderRadius="none"
              color="black"
              width="340px"
              type="submit"
              className="register-btn"
            >
              REGISTER
            </Button>
            <div className="horizontalline"></div>
            <div>
              <FontAwesomeIcon
                icon={faUser}
                className="userIcon"
              ></FontAwesomeIcon>
            </div>
            <h3 className="noaccountyet">No account yet?</h3>
            <h3 className="welcometokimayetext">
              Welcome to Kimaye! Help us with a few details to know you better
              as you take the journey of enjoying our safe and tasty fruits.
            </h3>
          </form>
          <Button
            colorScheme="none"
            border="2px solid black"
            borderRadius="none"
            color="black"
            width="fit_content"
            type="submit"
            className="first-login-btn"
          >
            LOGIN
          </Button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Registration;
