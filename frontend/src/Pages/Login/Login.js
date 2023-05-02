import { Form, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useLogin } from "../../Hooks/useLogin.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { setUser } = useContext(UserContext);
  const { login, error, isLoading } = useLogin();

  async function handleLoginSubmit(e) {
    e.preventDefault();

    try {
      const data = { email: email, password: password };
      console.log("data -> ", data);

      await login(data);
    } catch (e) {
      // alert("Can't Login ", error.message);
      console.log("error -> ", error);
    }
  }

  return (
    <div className="flex flex-col gap-6 mx-auto grow w-full justify-center mb-32">
      <h1 className="text-4xl text-center">Login</h1>
      <form className="flex flex-col gap-4 mx-auto w-full max-w-sm">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 rounded-2xl py-2 px-4 w-full"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded-2xl py-2 px-4 w-full"
        />
        <button
          onClick={handleLoginSubmit}
          className="w-full bg-primary px-4 py-2 rounded-2xl text-white"
        >
          Login
        </button>
        <div className="text-center">
          Don't have an account yet?{" "}
          <Link to={"/signup"} className="underline">
            Register now
          </Link>
        </div>
        {error && <div className="error text-center"> Error ! {error}</div>}
      </form>
    </div>
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
}

export default Login;

/*import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    console.log(data);
  };

  const handleLogin = async () => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    console.log(data);
  };

  const handleLogout = async () => {
    const response = await fetch('/logout', {
      method: 'GET'
    });

    const data = await response.json();
    console.log(data);
  };

  const handleGetHomepage = async () => {
    const response = await fetch('/', {
      method: 'GET'
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign up</button>

      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>

      <h1>Homepage</h1>
      <button onClick={handleGetHomepage}>Get Homepage</button>
    </div>
  );
}

export default App;
*/
