import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {


    const { register, formState: {errors}, handleSubmit, reset } = useForm();
    const {signInWithEmailPassword} = useContext(AuthContext)


    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";


    
  // toggle password type text to password and toggle eye button 
  const [passwordType, setPasswordType] = useState("password");

  const handlePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    } else {
      setPasswordType("password");
    }
  };



    const handleLogin = data => {
        signInWithEmailPassword(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user)
          toast.success("Create User Successfull");
          navigate(from, {replace: true})
          window.location.reload()
          reset()
        })
        .catch(error=> {
          console.log(error.message)
        })
        console.log(data)
      }

    return (
        <section className="flex justify-center items-center">
      <div className="flex flex-col max-w-md md:w-96 p-6 rounded-md  bg-white text-black border shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
        </div>
        <form
          className="space-y-12 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email", { required: "email is required" })}
                type="email"
                name="email"
                id="email"
                placeholder="Example@gmail.com"
                className="w-full px-3 py-2 border rounded-md shadow-xl bg-gray-100 text-black"
              />
              {errors.email && (
                <p role="alert" className="text-error">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <div>
                <label for="password" className="block mb-2 text-sm">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                type={passwordType}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md shadow-xl bg-gray-100 text-black"
              />
              {passwordType === "password" ? (
                <FaEye
                  onClick={handlePasswordType}
                  className="relative bottom-7 md:left-[300px] left-[200px] cursor-pointer"
                ></FaEye>
              ) : (
                <FaEyeSlash
                  onClick={handlePasswordType}
                  className="relative bottom-7 md:left-[300px] left-[200px] cursor-pointer"
                ></FaEyeSlash>
              )}
              {errors.password && (
                <p className="text-error">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Login
                </span>
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?
              <Link to="/signup" className="hover:underline text-blue-600">
                {""} Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
    );
};

export default Login;