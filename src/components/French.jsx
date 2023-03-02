import React, { useState, useRef, useEffect } from "react";
import {UserAuth} from "../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";


function French() {

    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(false);
    const conversationRef = useRef(null);
    const { user } = UserAuth();


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('http://localhost:3001/French', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
            .then((res) => res.json())
            .then((data) => {
                setResponses([...responses, { message: message, response: data.message }]);
                setMessage('');
                setLoading(false);
            });
    };


    useEffect(() => {
        conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }, [responses]);

    return (
        <div className="French p-4 sm:ml-64 static">
            <div className="flex h-full flex-col">
                <div className="flex justify-center">
                    <img src={require('../assets/French.png')} className={" md:h-24 xs:h-24 xl:h-52 rounded-full border-2 border-black"} />
                </div>
                <div className="absolute z-20 bottom-12 xl:w-5/6 sm:w-full xl:py-4">
                    <form onSubmit={handleSubmit} className={"flex justify-center"}>
                        <textarea value={message} placeholder="Enter your question " onChange={(e) => setMessage(e.target.value)} type="text" id="large-input" row="50" col="50" className=" w-4/6 mt-4 mr-2 h-20 border border-gray-300 rounded p-2" style={{ position: 'relative', bottom: 0 }}></textarea>
                        <button type="submit" className={"hover:bg-blue-300 ml-3 p-1 h-center text-dark  font-bold rounded-sm  transition-all " + (loading ? "hidden" : "")}>
                            envoyer
                        </button>
                        {loading && (
                            <div className="flex justify-center ml-3 p-4 ">
                                <ClipLoader color={"blue"} loading={loading}  size={35} />
                            </div>
                        )}


                    </form>
                </div>
                <div className="w-full md:h-96 xl:max-h-full p-4 overflow-y-scroll"  ref={conversationRef}>
                    {responses.map((conversation, index) => (
                        <div className="flex flex-col" key={index}>
                            <div className="flex justify-end">
                                <div className="flex items-center w-full max-w-md p-4 space-x-4 text-white bg-sky-500 rounded-lg shadow top-20 right-5 space-x">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} className={"w-10 h-10 rounded-full"}/>
                                    ) : (
                                        <img src="https://freesvg.org/img/abstract-user-flat-4.png" className={"w-10 h-10 rounded-full"} />
                                    )}
                                    <div className="text-sm font-normal">{conversation.message}</div>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="flex items-center w-full max-w-md p-4 space-x-4 text-dark rounded-lg shadow bg-Sky top-15 left-5">
                                    <img src={require('../assets/French.png')} className="w-10 h-10 rounded-full" alt="Rounded avatar" />
                                    <div className="text-start text-sm font-normal">
                                        Madame Dupond : {conversation.response.split(" ").map((word, index) => (
                                        <span key={index}>{word} </span>
                                    ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default French;
