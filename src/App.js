import { motion } from 'framer-motion';
import animationData from './assets/lottie.json';
import Lottie from 'react-lottie';
import React from 'react';
import './App.css';
function App() {
  const [isStopped, setIsStopped] = React.useState(true);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      scale: [1.2, 1],
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, x: [60, 0], transition: { duration: 0.5, ease: "circOut" } }
  }

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  // bg-gradient-to-bl from-yellow-400 via-pink-500 to-purple-600
  return (
    <motion.div class="font-mono bg-body min-h-screen flex justify-center items-center" style={{ "backgroundImage": "linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)" }}>
      <div class="w-full sm:w-full md:w-96 lg:w-96 rounded-none">

        <motion.div transition={{ duration: 0.5 }} animate={{ opacity: [0, 1], scale: [1.3, 1] }}>
          <a href="#">
            <h1 class="text-4xl font-bold text-white text-center">Startup</h1>
          </a>
        </motion.div>


        <motion.div variants={container}
          initial="hidden"
          animate="show" class="bg-white bg-opacity-0 md:bg-opacity-20 p-12 my-10 rounded-none md:rounded-xl shadow-none md:shadow-2xl border-white"
        >
          <motion.div variants={item} size={50} />
          <motion.div variants={item} size={50}>
            <motion.h3 class="font-bold text-2xl text-white" variants={item} size={50}>Welcome to Startup</motion.h3>
            <motion.p class="pt-2 text-white" variants={item} size={50}>Sign in to your account</motion.p>
          </motion.div>


          <motion.div class="mt-10"  >
            <form class="flex flex-col">
              <motion.div class="mb-6 pt-3 rounded bg-white bg-opacity-20 shadow-2xl" variants={item} size={50}>
                <label for="email" class="block text-gray-200 text-sm font-bold mb-2 ml-3">Email</label>
                <input type="text" id="email" class="bg-opacity-0 bg-gray-100 px-3 rounded w-full outline-none focus:outline-none text-gray-700 border-b-4 border-gray-100 focus:border-gray-500" />
              </motion.div>
              <motion.div class="mb-6 pt-3 rounded bg-white bg-opacity-20 shadow-2xl" variants={item} size={50}>
                <label for="password" class="block text-gray-200 text-sm font-bold mb-2 ml-3">Password</label>
                <input type="password" id="password" class="bg-gray-100 bg-opacity-0 px-3 rounded w-full  outline-none focus:outline-none text-gray-700 border-b-4 border-gray-100 focus:border-gray-500" />
              </motion.div>
              <motion.div class="w-full" variants={item}>
                <motion.div class="flex justify-end">
                  <a href="#" class="text-sm text-gray-200 hover:text-purple-700 hover:underline mb-6 transition duration-300">Forgot your password?</a>
                </motion.div>
                <motion.div class="flex justify-end w-full">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} class="w-full bg-pink-600 text-white font-bold py-2 rounded-2xl shadow-lg outline-none focus:outline-none" style={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }} onClick={(e) => { e.preventDefault(); setIsStopped(false) }}>Sign In</motion.button>
                </motion.div>
                <div>
                  <Lottie style={{ position: "absolute", left: 0, right: 0 }} options={defaultOptions} height={400} width={400} isStopped={isStopped} />
                </div>
              </motion.div>

            </form>
          </motion.div>
        </motion.div>


        <motion.div class="text-white text-center mt-12" variants={container}
          initial="hidden"
          animate="show" >
          <motion.div class="mb-6" variants={item} size={50}>
            <p>Don't have an account? <a href="#" class="font-bold hover:underline">Sign up</a></p>
          </motion.div>

          <motion.div variants={item} size={50}>
            <a href="#" class="hover:underline font-bold">Contact</a>
            <span class="mx-2">*</span>
            <a href="#" class="hover:underline font-bold">Privacy</a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>

  );
}

export default App;
