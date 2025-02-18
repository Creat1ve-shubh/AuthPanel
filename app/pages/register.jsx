"use client"

import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../utils/api";
import { useState } from "react";

export default function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const mutation = useMutation(registerUser);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
}
