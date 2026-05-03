import React,{useState} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
let loginUrl='http://localhost:3000/login'
const Login = () => {

  const [emailId,setemailId]=useState('aarav.sharma@gmail.com');
  const [password,setpassword]=useState('Aarav@1234');
   const dispatch=useDispatch();
   const navigate=useNavigate();
  const handleLogin=async()=>{
    try {
    const res=await axios.post(loginUrl,{emailId,password});
   //  console.log(res.data.user.firstName);
   dispatch(addUser(res.data.user));
      navigate('/');
      
    } catch (error) {
      
    }
  }
  return (
    <main className="bg-gray-50 px-4 md:px-8 dark:bg-neutral-900">
         <div className="min-h-[90vh] flex flex-col items-center justify-center">
            <div className="max-w-md w-full">
            

               <div
                  className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-8 dark:bg-neutral-800 dark:border-neutral-700">
                  <h1 className="text-slate-900 text-center text-3xl font-bold dark:text-slate-50">Login</h1>

                  <form className="space-y-6 mt-10" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                     <div>
                        <label htmlFor="email"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                        <input value={emailId} onChange={(e)=>setemailId(e.target.value)} type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                     </div>
                     <div>
                        <label htmlFor="password"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} id="password" name="password" placeholder="••••••••" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                     </div>

                   
                     <button type="button" onClick={handleLogin}
                        className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Login</button>

                     <div className="text-slate-900 text-sm text-center dark:text-slate-50">Don't have an account? <a href="#"
                        className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Sign
                        up</a>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </main>
  )
}

export default Login