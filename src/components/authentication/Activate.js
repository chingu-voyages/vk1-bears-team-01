import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Container } from "react-bootstrap";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";

const Activate = () => {
  const [activate, setActivate] = useState(false);
  let { token } = useParams();

  useEffect(() => {
    //connect to api to comfirm the key

    axios
      .post("http://localhost:5000/api/auth/activation", { token })
      .then((res) => {
        setActivate(true);
        //res.data holds the object result of API
        console.log(`Response is: ${JSON.stringify(res.data)}`);
      })
      .catch((err) => {
        //err.reponse.data holds the object result of API
        console.log(`Error is: ${JSON.stringify(err.response.data)}`);
      });
  }, []);

  return (
    <MainLayout>
      <Container>
        <h1>
          {!activate ? (
            "Activating your account. Please wait..."
          ) : (
            <Redirect to="/login?activate=1" />
          )}
        </h1>
      </Container>
    </MainLayout>
  );
};

export default Activate;
