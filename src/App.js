import './App.css';

function App() {
  return (
    <div class="bg-body min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 to-purple-600">
      <div class="w-full sm:w-full md:w-96 lg:w-96 rounded-none">

        <div>
          <a href="#">
            <h1 class="text-4xl font-bold text-white text-center">Startup</h1>
          </a>
        </div>


        <div class="bg-white p-12 my-10 rounded-none md:rounded-xl shadow-2xl">
          <div>
            <h3 class="font-bold text-2xl">Welcome to Startup</h3>
            <p class="text-gray-600 pt-2">Sign in to your account</p>
          </div>


          <div class="mt-10">
            <form class="flex flex-col">
              <div class="mb-6 pt-3 rounded bg-gray-100">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2 ml-3">Email</label>
                <input type="text" id="email" class="px-3 bg-gray-100 rounded w-full text-gray-700 outline-none focus:outline-none border-b-4 border-gray-300 focus:border-b-4 focus:border-purple-600 hover:border-4 hover:border-purple-300 transition duration-300" />
              </div>
              <div class="mb-6 pt-3 rounded bg-gray-100">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2 ml-3">Password</label>
                <input type="password" id="password" class="px-3 bg-gray-100 rounded w-full text-gray-700 outline-none focus:outline-none border-b-4 border-gray-300 focus:border-b-4 focus:border-purple-600 hover:border-purple-300 transition duration-300" />
              </div>
              <div class="flex justify-end">
                <a href="#" class="text-sm text-purple-400 hover:text-purple-700 hover:underline mb-6 transition duration-300">Forgot your password?</a>
              </div>
              <button type="submit" class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">Sign In</button>
            </form>
          </div>
        </div>


        <div class="text-white text-center mt-12">
          <div class="mb-6">
            <p>Don't have an account? <a href="#" class="font-bold hover:underline">Sign up</a></p>
          </div>

          <div>
            <a href="#" class="hover:underline font-bold">Contact</a>
            <span class="mx-2">*</span>
            <a href="#" class="hover:underline font-bold">Privacy</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
