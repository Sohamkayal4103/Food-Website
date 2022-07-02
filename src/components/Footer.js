import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-0 bg-slate-900 text-white inset-x-0 md:text-md text-sm py-4 text-center font-mono mt-20">
      
      <h1 className = " text-lg">Connect with us:</h1>
      <div className="grid md:grid-cols-5 grid-cols-1 mt-6 gap-4">
        <div className="hover:text-yellow-400 cursor-pointer"><a href="/"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="/"><ion-icon name="logo-github"></ion-icon> Github</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="/"><ion-icon name="logo-twitter"></ion-icon> Twitter</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="/"><ion-icon name="logo-instagram"></ion-icon> Instagram</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="/"><ion-icon name="logo-youtube"></ion-icon> YouTube</a></div>
      </div>
      <h2 className = "mt-4">Developed using <span className="text-yellow-400">React</span> and <span className="text-yellow-400">Tailwind CSS</span></h2>
    </div>
  )
}

export default Footer