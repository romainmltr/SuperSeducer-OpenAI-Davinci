function footer() {
    return (
        <div className="sm:ml-64 static ">
            <footer className="shadow md:flex md:items-center md:justify-between md:p-2">
                <span className="text-sm text-black  sm:text-center">© 2023
                <a href="https://flowbite.com/"
                className="hover:underline">SpeakIA</a>with OpenAI
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-black ">
                    <li>
                        <a href="https://openai.com/privacy/#:~:text=Disclosure%20of%20Personal%20Information,-Social%20Information&text=We%20may%20collect%20Social%20Information,Social%20Information%20to%20our%20affiliates.&text=We%20collect%20Communication%20Information%20directly%20from%20you." className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a className="mr-4 hover:underline md:mr-6">Beta 1.0 </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/romain-malaterre/" className="mr-4 hover:underline">Contact</a>
                    </li>
                    <li>
                        <a href="https://romainmalaterre.myportfolio.com/" className=" mr-4 hover:underline ">Portfolio</a>
                    </li>
                </ul>
            </footer>



        </div>
    );
}
export default footer;
