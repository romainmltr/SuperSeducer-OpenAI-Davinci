import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className='flex justify-between'>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar" type="button"
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <aside id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-black bg-opacity-90 border-2 border-b-MarronSky">
                <ul className="space-y-2">
                    <li>
                        <Link  to="/" className={"flex items-center p-2 text-base font-normal rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"}>
                            <svg width="35" height="35"  viewBox="0 0 20 20">
                                <path
                                    d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
                            </svg>
                            <span className="ml-3">Home</span>
                        </Link>
                    </li>
                    <li>
                        <button type="button" class="flex items-center w-full p-2  font-normal over:bg-blue100 dark:hover:bg-blue-400 text-white transition duration-75 rounded-lg " aria-controls="dropdown-favoris" data-collapse-toggle="dropdown-favoris">
                            <svg width="35" height="35"  viewBox="0 0 20 20">
                                <path
                                    d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
                            </svg>
                            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Favoris</span>
                                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        <ul id="dropdown-favoris" class="hidden py-2 space-y-2">
                            <li>
                                <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to={'/account'}
                            className="flex items-center p-2 text-base font-normal text-white-900 rounded-lg  hover:bg-blue100 dark:hover:bg-blue-400">
                            <svg width="35" height="35"  viewBox="0 0 20 20">
                                <path
                                    d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                            </svg>

                            <span className="flex-1 text-white ml-3 whitespace-nowrap">Account</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  );
};

export default Navbar;


