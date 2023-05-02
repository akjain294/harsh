import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../Contexts/UserContext";
import { useLogin } from "../../Hooks/useLogin.jsx";
import { useSignup } from "../../Hooks/useSignup";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  async function handleSignupSubmit(e) {
    e.preventDefault();

    try {
      const data = { name: name, email: email, password: password };
      console.log("data => ", data);

      await signup(data);
    } catch (error) {
      alert("Can't Signup ", error.message);
      console.log("error -> ", error);
    }
  }

  return (
    <div className="flex flex-col gap-6 mx-auto grow w-full justify-center mb-32">
      <h1 className="text-4xl text-center">Signup</h1>
      <form className="flex flex-col gap-4 mx-auto w-full max-w-sm">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-400 rounded-2xl py-2 px-4 w-full"
        />
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
          onClick={handleSignupSubmit}
          disabled={isLoading}
          className="w-full bg-primary px-4 py-2 rounded-2xl text-white"
        >
          Signup
        </button>
        <div className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="underline">
            Login now
          </Link>
        </div>
        {error && <div className="error text-center"> Error ! {error}</div>}
      </form>
    </div>

    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //       type="email"
    //       placeholder="Enter email"
    //       onChange={(e) => setEmail(e.target.value)}
    //       value={email}
    //     />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //       type="password"
    //       placeholder="Password"
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //     />
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

export default Signup;
