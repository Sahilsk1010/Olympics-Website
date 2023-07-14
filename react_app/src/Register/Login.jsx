import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="grid justify-center items-center px-6 py-3 mx-auto lg:py-14 max-w-[600px] bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
        <form
          method="POST"
          class="space-y-4 md:space-y-6 rounded-xl px-14 py-6 bg-gradient-to-r from-blue-200 to-green-200"
        >
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>

          <button
            type="submit"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Login
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <NavLink
              to="/signertype"
            >
              <span className="font-medium text-primary-500 underline hover:text-indigo-900 dark:text-primary-500">
                Register here
              </span>
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
