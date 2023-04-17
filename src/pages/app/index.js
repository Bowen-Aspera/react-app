import React, { useEffect, useState } from "react";
// import axios from "../../plugins/axios";
import { useNavigate } from "react-router-dom";

function Application() {
    const [users, setUsers] = useState([]); // state to store users data
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const apiGet = () => {
            fetch("http://127.0.0.1:8000/api/v1/accounts/users/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
                .then((response) => response.json())
                .then((json) => setUsers(json)); // store users data in state
        };
        apiGet();
        console.log(token)
    }, []);



    return (
        <>
            <h1 style={titleStyle}>PROFILE PROFILE PROFILE</h1>
            <h1 style={subtitleStyle}>PROFILE HERE</h1>

            {users.length > 0 ? (
                <div style={profileContainerStyle}>
                    {users.map((user, index) => (
                        <div key={index} style={profileItemStyle}>
                            <p>
                                <strong>User ID:</strong> {user.id}
                            </p>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                            <p>
                                <strong>First Name:</strong> {user.first_name} {/* Display first name */}
                            </p>
                            <p>
                                <strong>Last Name:</strong> {user.last_name} {/* Display last name */}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}

            <button onClick={() => navigate("../")} style={logoutBtnStyle}>
                Log out
            </button>


        </>
    );
}

// Define block styles as objects
const titleStyle = {
    textAlign: "center",
    fontSize: "24px",
};

const subtitleStyle = {
    textAlign: "center",
    fontSize: "18px",
};

const logoutBtnStyle = {
    display: "block",
    margin: "0 auto",
    marginTop: "16px",
    padding: "8px 16px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
};

const profileItemStyle = {
    color: "black",
    margin: "16px",
};

const profileContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
};
export default Application;
