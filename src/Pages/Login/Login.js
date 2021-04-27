import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
    let history = useHistory();

    const [username, handleUsername] = useState("");
    const [password, handlePassword] = useState("");

    const handleSubmit = () => {
        console.log("login ", username, password);
        if (username && password) {
            console.log("login success ", username, password);
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("token", username + "," + password);
            localStorage.setItem("time", new Date());
            history.push("/home");
        } else {
            alert(" Invalid email or passord! ");
        }
    };

    return (
        <div className="c-app c-default-layout flex-row align-items-center" style={{ backgroundColor: "#0046bb" }}>
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="6">
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm onSubmit={handleSubmit}>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupPrepend>
                                                <CInputGroupText>
                                                    <CIcon name="cil-user" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <CInput
                                                type="text"
                                                placeholder="Username"
                                                autoComplete="username"
                                                name="username"
                                                onChange={(value) => handleUsername(value.target.value)}
                                                values={username}
                                            />
                                        </CInputGroup>
                                        <CInputGroup className="mb-4">
                                            <CInputGroupPrepend>
                                                <CInputGroupText>
                                                    <CIcon name="cil-lock-locked" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <CInput
                                                type="password"
                                                placeholder="Password"
                                                autoComplete="current-password"
                                                name="password"
                                                onChange={(value) => handlePassword(value.target.value)}
                                                value={password}
                                            />
                                        </CInputGroup>
                                        <CRow>
                                            <CCol xs="6">
                                                <CButton
                                                    color="primary"
                                                    className="px-4"
                                                    onClick={() => handleSubmit()}
                                                >
                                                    login
                                                </CButton>
                                            </CCol>
                                            {/* <CCol xs="6" className="text-right">
                                                <CButton color="link" className="px-0">Forgot password?</CButton>
                                            </CCol> */}
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Login;
