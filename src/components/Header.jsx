import React from 'react'
import { Link } from 'react-router-dom'
import { getAllMatches, getLiveMatches, getPointTable } from '../services/CricketService'

const Header = () => {
    const getAll = () =>{
        getAllMatches().then((response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const getLive = () => {
        getLiveMatches().then((response)=>{
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const getHistory = () => {

    }

    const getPointsTable = () => {
        getPointTable().then((response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div >
            <header className="bg-gray-300 shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-600">
                        Cricket Score Informer
                    </div>
                    <nav>
                        <ul className="flex space-x-8">
                            <li><Link to="/" className="text-gray-700 font-semibold font-mono text-xl hover:text-blue-600">Home</Link></li>
                            <li><Link to="/live" onClick={getLive} className="text-gray-700 font-semibold font-mono text-xl hover:text-blue-600">Live</Link></li>
                            <li><Link to="/history" onClick={getAll} className="text-gray-700 font-semibold font-mono text-xl hover:text-blue-600">History</Link></li>
                            <li><Link to="/points-table" onClick={getPointsTable} className="text-gray-700 font-semibold font-mono text-xl hover:text-blue-600">Point Table</Link></li>
                        </ul>
                    </nav>
                    {/* <div></div> */}
                </div>
            </header>
        </div>
    )
}

export default Header
