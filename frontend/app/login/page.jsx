'use client';
import React from 'react'
import reading from '/public/reading.json'
import Lottie from 'lottie-react'
import {useState} from 'react'
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Replace with your actual backend API endpoint URL
        const apiUrl = 'http://localhost:8000/api/login/';
    
        // Create a payload with the login details
        const payload = {
          username: username,
          password: password,
        };
    
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => {
            if (response.ok) {
              // Successful login, you can redirect the user or perform other actions here
              console.log('Login successful');
            } else {
              // Handle login errors here
              console.error('Login failed');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
    
  return (
        <div>
            
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-5xl  py-12 md:py-24">
                <div className='w-full flex flex-row justify-center align-middle text-center text-2xl font-bold text-gray-900 md:text-4xl'>
                NoteVault
            </div>
                    <div className="grid items-center justify-items-center gap-y-10 lg:grid-cols-2 shadow-xl h-2/3">
                        <div className="flex items-center justify-center ">
                            <div className="px-2 md:px-12 ">
                                <p className="text-2xl font-bold text-gray-900 md:text-4xl text-center">
                                    Login
                                </p>
                                <form action="" className="mt-8 space-y-4 w-full">
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="user_name"
                                            >
                                                Username
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                id="user_name"
                                                value={username}
                                                placeholder="Username"
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="email"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="text"
                                            value={password}
                                            id="email"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                    </div>
                                
                                    <button
                                        type="button"
                                        onClick={handleLogin}
                                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* <img
                            alt="Login"
                            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                        /> */}
                        <Lottie animationData={reading}/>
                    </div>
                </div>
            </div>
            
        </div>

    
    
  )
}

export default LoginPage