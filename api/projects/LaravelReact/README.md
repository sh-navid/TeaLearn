# API
## Laravel + ReactJS
### Laravel
- `composer create-project laravel/laravel back`

### ReactJS
- `npx create-react-app front`
- `npm install react-router-dom`
- `npm start`
- ~~~js
    import React, { useState } from "react";
    import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

    const Home = () => {
        return <h1>Home</h1>;
    };

    const Dashboard = () => {
        return <h1>Dashboard</h1>;
    };

    const NotFound = () => {
        return <h1>NotFound</h1>;
    };

    const SharedPage = () => {
        return (
            <>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/dashboard">Dashboard</Link>
            <hr />
            <Outlet />
            </>
        );
    };

    const Login = ({ setToken }) => {
        const [username, setUsername] = useState();
        const [password, setPassword] = useState();

        const handleSubmit = async (e) => {
            e.preventDefault();
            alert(username + " " + password);
            setToken("ABC");
        };

        return (
            <div>
            <h1>Login</h1>
            <form>
                <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
            </div>
        );
    };

    export default function App() {
        const [token, setToken] = useState();

        if (!token) {
            return <Login setToken={setToken} />;
        }

        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedPage />}>
                <Route index element={<Home />}></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
        );
    }
  ~~~