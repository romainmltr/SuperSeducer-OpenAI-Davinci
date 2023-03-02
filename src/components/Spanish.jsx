import React, { useState, useRef, useEffect } from "react";
import {UserAuth} from "../context/AuthContext";

function Portuguese() {

    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);
    const conversationRef = useRef(null);
    const { user } = UserAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/Spanish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
            .then((res) => res.json())
            .then((data) => {
                setResponses([...responses, { message, response: data.message }]);
            });
        setMessage('');
    };

    useEffect(() => {
        conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }, [responses]);

    return (
        <div className="French p-4 sm:ml-64 static">
            <div className="flex h-full flex-col">
                <div className="flex justify-center">
                    <img src={require('../assets/Spanish.png')} className={"h-52 rounded-full border-2 border-black"} />
                </div>
                <div className="absolute z-20 bottom-12 w-5/6 py-4">
                    <form onSubmit={handleSubmit} className={"flex justify-center"}>
                        <textarea value={message} placeholder="Enter your question " onChange={(e) => setMessage(e.target.value)} type="text" id="large-input" row="50" col="50" className=" w-4/6 mt-4 mr-2 h-20 border border-gray-300 rounded p-2" style={{ position: 'relative', bottom: 0 }}></textarea>
                        <button type="submit" className={"hover:bg-blue-600  text-white font-bold rounded-full bg-gray-700 px-4 py-4 transition-all active:bg-blue-700 "}>
                            envoyer
                        </button>

                    </form>
                </div>
                <div className="w-full md:h-96 xl:max-h-full overflow-y-scroll"  ref={conversationRef}>
                    {responses.map((conversation, index) => (
                        <div className="flex flex-col" key={index}>
                            <div className="flex justify-end">
                                <div className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white rounded-lg shadow top-20 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL}  className={"w-10 h-10 rounded-full"}/>
                                    ) : (
                                        <img src="https://freesvg.org/img/abstract-user-flat-4.png" className={"w-10 h-10 rounded-full"} />
                                    )}

                                    <div className="text-sm font-normal">{conversation.message}</div>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="flex items-center w-full max-w-xs p-4 space-x-4 text-white rounded-lg shadow bg-gray-700 top-15 left-5">
                                    <img src={require('../assets/Spanish.png')} className="w-10 h-10 rounded-full" alt="Rounded avatar" />
                                    <div className="text-start text-sm font-normal">Madame Dupond : {conversation.response}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portuguese;
