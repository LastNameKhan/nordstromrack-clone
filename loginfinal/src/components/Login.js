import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MyAccount from "./MyAccount";
import { useEffect } from "react";
import { CloseIcon, MinusIcon } from "@chakra-ui/icons";
const Login = () => {
  //   const [items, setItems] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [myaccount, setMyAccount] = useState(true);

  function handleLogin(e) {
    e.preventDefaltu();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setMyAccount(!myaccount);
      setFlag(false);
    }
  }

  return (
    <div className="loginmaindiv">
      {" "}
      {myaccount ? (
        <form onSubmit={handleLogin}>
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
                SIGN IN<h3>{}</h3>
              </Box>
              <Spacer />
              <Box p="4" bg="black" color="white" marginTop="20px">
                CLOSE
                <CloseIcon className="closeiconfromchakra" />
              </Box>
            </Flex>
          </div>
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
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </FormControl>
          </div>
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
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </FormControl>
          </div>
          <br />
          <br />
          <Button
            colorScheme="none"
            border="2px solid black"
            borderRadius="none"
            color="black"
            width="340px"
            type="submit"
            className="Login-btn"
          >
            Login
          </Button>
          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <MyAccount />
      )}
    </div>
  );
};

export default Login;
