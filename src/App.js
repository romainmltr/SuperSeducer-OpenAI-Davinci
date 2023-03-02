import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import TryFavoris from "./pages/TryFavoris";
import Spanish from "./components/Spanish"
import French from "./components/French";
import Portuguese from "./components/Portuguese";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import  Object3D from './components/Object3D';
import NotFound from './components/NotFound';
function App() {
    return (
        <div>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Signin />} />
                        <Route Protected path='/Home' element={<Home />} />
                        <Route Protected path="/Spanish" element={<Spanish />} />
                        <Route Protected path="/French" element={<French/>} />
                        <Route Pnrotected path="/Portuguese" element={<Portuguese/>} />
                        <Route Protected path="/TryFavoris" element={<TryFavoris/>} />
                        <Route Protected path='/account' element={<Account />} />
                        <Route path='*' element={<NotFound />}/>

                </Routes>
            </AuthContextProvider>
            <Footer />
        </div>
    );
}

export default App;
