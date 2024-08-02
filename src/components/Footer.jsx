import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer class="bg-gray-800 text-white mt-auto">
                <div class="container mx-auto px-6 py-8">
                    <div class="flex flex-wrap justify-between">

                        <div class="w-full md:w-1/3 mb-6">
                            <h2 class="text-xl font-semibold">About Us</h2>
                            <p class="mt-2 text-gray-400">This website basically provides <br /> the live score of cricket match and history of the matches<br /> and points table.</p>
                        </div>


                        <div class="w-full md:w-1/3 mb-6 relative ">
                            <h2 class="text-xl font-semibold">Quick Links</h2>
                            <ul class="mt-2">

                                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                                <li><Link to="/live" className="text-gray-400 hover:text-white">Live</Link></li>
                                <li><Link to="/history" className="text-gray-400 hover:text-white">History</Link></li>
                                <li><Link to="/points-table" className="text-gray-400 hover:text-white">Point Table</Link></li>
                            </ul>
                        </div>


                        <div class="w-full md:w-1/3 mb-6 ">
                            <h2 class="text-xl font-semibold">Contact Me</h2>
                            <ul class="mt-2">
                                <li class="text-gray-400 hover:text-white cursor-pointer">Jiban Jyoti Mohanty</li>
                                <li class="mt-1 text-gray-400 hover:text-white cursor-pointer">+91-9827411727</li>
                                <li class="mt-1 text-gray-400 hover:text-white cursor-pointer">jibanjyotimohanty315@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
                        <p>&copy; 2024 Company Name. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
