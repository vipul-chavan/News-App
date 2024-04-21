import React from 'react'
import News from './assets/News.png'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { Link } from 'react-router-dom';
function Landing() {

    const [text] = useTypewriter({
        words: ['Business','Entertainment','Health','Sports','Technology','Science'],
        loop: {},
    });

    return (
      <div className="dark:bg-gradient-to-r from-blue-400 via-indigo-300 to-indigo-700  h-screen">
        <div className="flex justify-evenly items-center pt-20 mx-auto w-[1280px]">
          <div>
            <div className="w-[400px] h-[500px] flex flex-col gap-7 justify-center">
              <h1 className=" text-7xl   from-purple-900 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent relative bottom-14 font-bold">SnapFeed</h1>
              <p className='text-blue-900 relative bottom-10'>
              Where the world's pulse beats in real-time. Dive into a vortex of breaking headlines, where every story unfolds with the urgency of a heartbeat.
              </p>
              <p className='text-blue-900 relative bottom-10 font-bold text-lg'>Explore Top Headlines From <br />
                <span className='text-neutral-100 text-5xl font-bold relative top-5'>
                    {text}
                </span>
                <Cursor cursorColor='white'/>
              </p>
            <Link to="/login" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Log In</span>
            <span class="relative invisible">Log In</span>
            </Link>
            </div>
          </div>
          <div>
            <img src={News} alt="Newsgif" className='w-[600px] transition-transform duration-300 ease-in-out transform hover:scale-105 relative left-10' />
          </div>
        </div>
      </div>
    );
  }
  

export default Landing;



//  <Link to="/login" className=" bg-blue-500 text-white px-4 py-2 rounded-md">Login</Link>