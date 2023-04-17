import React from "react";
import axios from "../../plugins/axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

function Application() {
    function UserInfo() {
        const token = localStorage.getItem("token");
        return axios
            .get("http://localhost:8000/api/v1/accounts/users/me/", {
                headers: {
                    Authorization: "Token " + token,
                },
            })
            .then((response) => {
                return response.data;
            });
    }

    const { data, isLoading, error } = useQuery("user", UserInfo, { retry: 0 });
    const navigate = useNavigate();

    if (isLoading && !error) {
        return (
            <div style={userInfoStyle}>
                <p>Loading...</p>
            </div>
        );
    } else if (error) {
        return (
            <div style={userInfoStyle}>
                <p>An error has occurred</p>
            </div>
        );
    }

    return (
        <div style={userInfoStyle}>
            <h1>PROFILE PROFILE PROFILE</h1>
            <h1>PROFILE HERE</h1>
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p>
            <p>User ID: {data.id}</p>
            <p>First Name: {data.first_name}</p>
            <p>Last Name: {data.last_name}</p>
            <p>Date Joined: {data.date_joined}</p>
            <button
                onClick={() => navigate("../")}
                style={buttonStyle}
            >
                Log out
            </button>
        </div>
    );
}

const userInfoStyle = {
    margin: "1rem",
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
    fontWeight: "normal",
    color: "#333",
    textAlign: "center",
};

const buttonStyle = {
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    marginTop: "1rem",
    cursor: "pointer",
    fontSize: "1rem",
};



export default Application;
