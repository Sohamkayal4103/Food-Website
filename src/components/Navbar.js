import React,{useState} from 'react'
import LoginButton from '../components/LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

  const { user, isAuthenticated} = useAuth0();
  let Links=[
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Add a recipe',
      path: '/add'
    }
  ]

  const [open,setOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-red-600 mr-1 pt-2">
            <ion-icon name="fast-food-outline"></ion-icon>
          </span>
          Flavours101
        </div>
        <div className="flex">
          <div className="right-6 top-5 absolute text-3xl cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul className = {`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 tarnsition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity:100`}>
            {
              Links.map((link)=>(
                <li key={link.name}
                  className="md:ml-8 text-xl md:my-0 my-7"
                  >
                  <a 
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                  href={link.path}>{link.name}</a>
                </li>
              ))
            }
            {!isAuthenticated && (
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <div className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                  <LoginButton/>
                </div>
              </li>
            )}
            {isAuthenticated && (
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <img class="w-10 h-10 rounded-full" src={user.picture} alt="Avatar" />
              </li>
            )}
            {isAuthenticated && (
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <div className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                  <LogoutButton />
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar