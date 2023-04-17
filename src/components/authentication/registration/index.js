import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [data, setData] = useState({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        gender: "",
        birthdate: ""
    });

    const [errorPassword, setErrorPassword] = useState("");

    const navigate = useNavigate();

    const handleInputChange = (event, field) => {
        let d = data;
        setData({ ...d, [field]: event.target.value });
    };

    const handleRegister = () => {
        axios
            .post("accounts/users/", data)
            .then((response) => {
                console.log(response.data);
                alert("Successfully Registered!");
            })
            .catch((error) => {
                const errorMessage = error.response.data;
                setErrorPassword(errorMessage.password);
            });
    };

    return (
        <>
            <div style={main}>
                <div style={form}>
                    <h1 style={{ fontSize: "24px", marginTop: "0" }}>
                        Registration Form
                    </h1>
                    <p style={{ color: "red" }}>{errorPassword}</p>
                    <input
                        className="input-field"
                        placeholder="First Name"
                        onChange={(event) => handleInputChange(event, "first_name")}
                    />
                    <br />
                    <input
                        className="input-field"
                        placeholder="Last Name"
                        onChange={(event) => handleInputChange(event, "last_name")}
                    />
                    <br />
                    <input
                        className="input-field"
                        placeholder="Gender"
                        onChange={(event) => handleInputChange(event, "gender")}
                    />
                    <br />
                    <p style={{ margin: "5px 0", display: "flex", alignItems: "center" }}>
                        <label style={{ marginRight: "10px" }}>Birthdate</label>
                        <input
                            className="input-field"
                            placeholder="Birthdate"
                            type="date"
                            onChange={(event) => handleInputChange(event, "birthdate")}
                            style={{ flex: "1" }}
                        />
                    </p>
                    <input
                        className="input-field"
                        placeholder="Username"
                        onChange={(event) => handleInputChange(event, "username")}
                    />
                    <br />
                    <input
                        className="input-field"
                        placeholder="Email"
                        onChange={(event) => handleInputChange(event, "email")}
                    />
                    <br />
                    <input
                        className="input-field"
                        placeholder="Password"
                        type="password"
                        onChange={(event) => handleInputChange(event, "password")}
                    />
                    <br />

                    <button
                        style={{
                            marginTop: "10px",
                            padding: "8px 16px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none"
                        }}
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                    <button
                        style={{
                            marginTop: "10px",
                            marginLeft: "5px",
                            padding: "8px 16px",
                            backgroundColor: "#6c757d",
                            color: "#fff",
                            border: "none"
                        }}
                        onClick={() => navigate("../")}
                    >
                        Back
                    </button>
                </div>
            </div>
        </>
    );
}

export default Register;


const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // Set minimum height to viewport height
    backgroundColor: "#4285F4"
}

const form = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    width: "300px"
}
