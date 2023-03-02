import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
        <div className="p-4  sm:ml-64">
            <div className="flex items-center sm:bg-red-900 md:bg-green   xl:bg-SkyLight xl:bg-opacity-20 place-content-around p-4 h-48 mb-4 rounded-lg border-blue-100 divide-gray-200 rounded-lg  shadow bg-blur   ">
                <h1 className="text-6xl font-extrabold">
                    <span
                        className=" text-start text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-black">Fluent In no </span>Time with AI
                    .</h1>
                <p className=" ml-6 text-start text-lg font-normal text-black lg:text-xl ">Here at FluentAI
                    we focus on the innovation to train your brain to writhe a new language.<br/> We use the latest technology of Open AI</p>

            </div>

            <div className="sm:flex sm:flex-col md:flex md:flex-col  xl:flex xl:flex-col mt-6 mb-6 p-2 rounded border-blue-100 divide-gray-200 rounded-xl bg-SkyDark bg-opacity-50 shadow bg-blur ">

                <div className="flex h-full justify-evenly">
                    <div className=" flex items-center ">
                        <img src={require('../assets/French.png')} className={"h-64"} />
                    </div>
                    <div className="font-medium text-[black] w-2/3 text-start flex flex-col justify-center ">
                        <h3 className={"mb-2 font-bold text-2xl"}>Madame Dupont</h3>
                        <p>Madame Dupont is a rigorous and methodical French teacher. She has been teaching the language for several years and is considered one of the best teachers in the area. She is of French origin and places great emphasis on transmitting the correct way of speaking French.</p>
                        <p className={"mt-2 font-bold"}>Personality:</p><span>she's a highly organized and methodical person. She is strict when it comes to grammar and pronunciation, but is also very generous with encouragement and compliments when her students succeed. She is proud of her country and loves to share her culture with others.</span>
                        <p className={"mt-2 font-bold"}>Goal:</p><span>To train students to speak French with accuracy and ease. She encourages her students to practice the language regularly and helps them improve their grammar and pronunciation. She hopes that her students will develop a passion for French culture and a love of the language.</span>
                        <div className={"mt-2 flex justify-end"}>
                            <Link to="/French"  className={" mb-3 h-14 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"}>
                                <div className="text-left">
                                    <div className="-mt-1 font-sans text-sm font-semibold">Learn French</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" mt-6 mb-6 flex  p-2 rounded border-blue-100 divide-gray-200 rounded-lg bg-SkyDark bg-opacity-50 shadow bg-blur ">
                <div className={"flex h-full justify-evenly "}>
                    <div className=" flex items-center ">
                        <img src={require('../assets/Brazil.png')} className={"h-64"} />
                    </div>
                    <div className="font-medium text-[black] w-2/3 text-start flex flex-col justify-center ">
                        <h3 className={"mb-2 font-bold text-2xl"}>Señor Silva</h3>
                        <p>Señor Silva is a dynamic and enthusiastic Portuguese teacher. He is from Brazil and has an in-depth knowledge of the language and culture. He is known for his creative and interactive teaching method that makes learning Portuguese fun and memorable.</p>
                        <p className={"mt-2 font-bold"}>Personality:</p><span>He's a warm and friendly man who enjoys meeting new people. He is energetic and passionate, and loves to share his love for the Portuguese language and culture with his students. He is also very patient and encouraging, making him an excellent teacher for beginners.</span>
                        <p className={"mt-2 font-bold"}>Goal:</p><span>Señor Silva's goal is to provide his students with the tools and skills they need to effectively communicate in Portuguese in both personal and professional settings. He wants his students to be able to confidently navigate Portuguese-speaking environments, whether it be for travel, business, or daily life.</span>
                        <div className={"mt-2 flex justify-end"}>
                            <Link to="/Portuguese"  className={" mb-3 h-14 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"}>
                                <div className="text-left">
                                    <div className="-mt-1 font-sans text-sm font-semibold">Learn Portuguese</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" mt-6 mb-24 flex  p-2 rounded border-blue-100 divide-gray-200 bg-SkyDark bg-opacity-50 rounded-lg shadow bg-blur ">
                <div className={"flex h-full justify-evenly "}>
                    <div className=" flex items-center ">
                        <img src={require('../assets/Spanish.png')} className={"h-64"} />
                    </div>
                    <div className="font-medium text-[black] w-2/3 text-start flex flex-col justify-center ">
                        <h3 className={"mb-2 font-bold text-2xl"}>Señorita Lola</h3>
                        <p>Señorita Lola is a dynamic and passionate Spanish teacher. She is from Spain and loves to share her culture and language with others. She is always seeking new ways to make learning Spanish fun and interactive</p>
                        <p className={"mt-2 font-bold"}>Personality:</p><span>Señorita Lola is an enthusiastic and optimistic person who loves meeting new people. She is patient and understanding, making her an excellent teacher for beginners. She is also creative and enjoys using metaphors and games to make learning more enjoyable.</span>
                        <p className={"mt-2 font-bold"}>Goal:</p><span>Señorita Lola's goal is to help people learn Spanish in a fun and effective way, encouraging them to practice the language in everyday situations. She hopes that her students will develop a passion for Spanish culture and continue to use the language in the future</span>
                        <div className="mt-2 flex flex-row justify-end">
                            <Link to="/Spanish"  className={" mb-3 h-14 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"}>
                                <div className="text-left">
                                    <div className="-mt-1 font-sans text-sm font-semibold">Learn Spanish</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Home