import React from 'react';
import { UserAuth } from '../context/AuthContext';
import {clear} from "@testing-library/user-event/dist/clear";
import { useNavigate } from 'react-router-dom';
const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      clear.localState();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useNavigate('/')
    } catch (error) {
      console.log(error);
    }

  };

  const renderBadge = () => {
      if (user) {
          const signUpDate = new Date(user.metadata.creationTime);
          const monthsSinceSignUp = Math.floor((new Date() - signUpDate) / (1000 * 60 * 60 * 24 * 30));

          if (monthsSinceSignUp >= 1) {
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                        New
                      </span>;
            }
            else if (monthsSinceSignUp >= 2) {
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                        Expert
                      </span>;
            }

            else if (monthsSinceSignUp >= 3) {
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                        Master
                      </span>;
            }
        }
        return null;
    };

    return (
    <div className='flex flex-col justify-center items-center'>
        <div className=" pt-4 mt-24 w-full h-full shadow-xl max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 ">

            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24  rounded-full shadow-lg" src={user?.photoURL} />
                <h5 className="mb-1 text-xl font-medium text-black mt-5 ">{user?.displayName}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400"></span>
                <button onClick={handleSignOut} className='border hover:bg-white text-white bg-black hover:text-black rounded-lg px-6 py-1 m-5'>
                    Logout
                </button>
                <div className="rounded-lg p-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                        {renderBadge() ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                              Nouveau
                            </span>
                        ) : "Nouveau"}
                    </div>


                </div>
            </div>
        </div>
    </div>
  );
};

export default Account;
