import axios from "axios";
import { useState } from "react";
import { useUserContext } from "../Hooks/useUserContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUserContext();

  const login = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const responseData = await axios.post(
        "http://127.0.0.1:4000/api/user/login",
        data,
        { withCredentials: true }
      );

      if (responseData.status !== 200) {
        setIsLoading(false);
        setError(responseData.data.error);
      } else {
        const finalData = responseData.data.data;
        localStorage.setItem("user", JSON.stringify(finalData));
        dispatch({ type: "LOGIN", payload: finalData });
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      setError(e.response.data.error);
    }
  };

  return { login, error, isLoading };
};
