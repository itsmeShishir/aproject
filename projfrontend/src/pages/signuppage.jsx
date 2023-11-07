import React from "react";

const SignupPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div class="bg-gray-100 flex justify-center items-center h-screen">
          <div class="w-1/2 h-screen hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1599792092050-63b1834bb89f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWVsYW5jaW5nJTIwZ3JvaXVwfGVufDB8fDB8fHww"
              alt="Placeholder Image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 class="text-2xl font-semibold mb-4">SignUp</h1>
            <form action="#" method="POST">
              <div class="mb-4">
                <label for="firstname" class="block text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autocomplete="off"
                />
              </div>
              <div class="mb-4">
                <label for="lastname" class="block text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autocomplete="off"
                />
              </div>
              <div class="mb-4">
                <label for="username" class="block text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autocomplete="off"
                />
              </div>
              <div class="mb-4">
                <label for="username" class="block text-gray-600">
                  email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autocomplete="off"
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autocomplete="off"
                />
              </div>
              <div class="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  class="text-blue-500"
                />
                <label for="remember" class="text-gray-600 ml-2">
                  Remember Me
                </label>
              </div>
              <div class="mb-6 text-blue-500">
                <a href="#" class="hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                SignUp
              </button>
            </form>
            <div class="mt-6 text-blue-500 text-center">
              <a href="#" class="hover:underline">
                Sign up Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
