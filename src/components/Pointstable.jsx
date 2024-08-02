import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet'
import { getPointTable } from '../services/CricketService'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Pointstable = () => {
  const [pointTable, setPointTable] = useState([])
  const [bgColor, setBgColor] = useState()

  const callPointsAPI = () => {
    getPointTable().then((response) => {
      setPointTable(response.data)
    }).catch(error => console.log(error))
  }
  useEffect(callPointsAPI, [])
  return (
    <div>
      <Helmet>
        <title>Point Table - Cricket Informer</title>
      </Helmet>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className='text-4xl font-extrabold ml-2 text-gray-800 underline mb-10'>2023 Cricket World Cup Points Table</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Team</th>
                <th className="py-3 px-6 text-center">Played</th>
                <th className="py-3 px-6 text-center">Won</th>
                <th className="py-3 px-6 text-center">Lost</th>
                <th className="py-3 px-6 text-center">Draw</th>
                <th className="py-3 px-6 text-center">Points</th>
                <th className="py-3 px-6 text-center">NRR</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-red-300 text-sm font-light cursor-pointer">
              {pointTable.filter((item, index) => index !== 0)
                .map((team, index) => (
                  <tr key={index} className={`border-b border-gray-200 hover:bg-gray-100 ${index < 4 ? 'bg-green-300' : 'bg-red-300'}`}>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{index + 1}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className='font-semibold text-black text-[1.2rem]'>{team[0]}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className='font-semibold text-black text-[1.2rem]'>{team[1]}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className='font-semibold text-black text-[1.2rem]'>{team[2]}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className='font-semibold text-black text-[1.2rem]'>{team[3]}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className='font-semibold text-black text-[1.2rem]'>{team[4]}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className='font-semibold text-black text-[1.2rem]'>{team[6]}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className='font-semibold text-black text-[1.2rem]'>{team[7]}</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer/>
    </div>

  )
}

export default Pointstable
