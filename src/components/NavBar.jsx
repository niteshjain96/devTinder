import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const user=useSelector((store)=>store.user?.firstName);
    console.log(user);
    let imgurl=''
    if(user){
      imgurl='data:image/webp;base64,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'
    }
  return (
    <>
    <nav className="relative bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">{user} Dashboard</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
            <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <el-dropdown className="relative ml-3">
          <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            {imgurl && (<img src={imgurl} alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />)}
          </button>

          <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</a>
          </el-menu>
        </el-dropdown>
      </div>
    </div>
  </div>

  <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="#" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"> Dashboard</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
    </div>
  </el-disclosure>
</nav>

    </>
  )
}

export default NavBar