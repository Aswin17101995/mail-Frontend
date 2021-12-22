import axios from "axios";

export function Register(data)
{
    return axios.post(`http://localhost:3001/register`,data)
}

export function Login(data)
{
    return axios.post(`http://localhost:3001/signin`,data)
}

export function SendEmail(data)
{
    return axios.post(`http://localhost:3001/email`,data)
}

export function Getmails(data)
{
    return axios.post(`http://localhost:3001/inbox`,data)
}