"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../redux/actions/auth";
import { useRouter } from "next/navigation"; // Correct import for App Router

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signInData, setSignInData] = useState({
    identifier: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Updated useRouter

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setSignUpData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setSignUpData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const dispatch = useDispatch();
  const handelSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await dispatch(signUp(signUpData));
      console.log(signUpData);
      setLoading(false);
      router.push("/"); // Redirect after signup
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleSignIn = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await dispatch(signIn(signInData));
      console.log(signInData);
      setLoading(false);
      router.push("/"); // Redirect after sign-in
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl text-gray-800 font-bold text-center mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {isSignIn ? (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="identifier"
                value={signInData.identifier}
                onChange={handleSignInChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none text-gray-600 focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none text-gray-600 focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        ) : (
          <form
            onSubmit={handelSignUp}
            className="space-y-4"
            encType="multipart/form-data"
          >
            {[{ name: "username", type: "text", label: "Username" },
              { name: "email", type: "email", label: "Email" },
              { name: "password", type: "password", label: "Password" },
            ].map(({ name, type, label }) => (
              <div key={name}>
                <label className="block text-gray-700">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={signUpData[name]}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none text-gray-600 focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        )}
        <p className="text-center text-gray-600 mt-4">
          {isSignIn ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setIsSignIn(false)}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignIn(true)}
                className="text-blue-500 hover:underline"
              >
                Sign In
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
