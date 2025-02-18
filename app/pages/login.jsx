"use client"; // Ensure this is a client component

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../utils/api";

export default function Login() {
    const { setUser } = useContext(AuthContext);
    const [form, setForm] = useState({ email: "", password: "" });

    const mutation = useMutation({
        mutationFn: loginUser, // ✅ Ensure mutationFn is used correctly
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            setUser(data.user);
        },
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
}
