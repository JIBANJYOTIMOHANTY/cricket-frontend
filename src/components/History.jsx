import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet'
import { getAllMatches } from '../services/CricketService'
import Footer from './Footer'

const History = () => {
  const [matches, setMatches] = useState([])
  const callAPI = () => {
    getAllMatches().then((response) => {
      setMatches(response.data)
    }).catch(error => console.log(error))
    console.log(matches);
  }
  useEffect(callAPI, [])
  return (
    <div>
      <Helmet>
        <title>History - Cricket Informer</title>
      </Helmet>
      <Header />
      <div className='bg-white '>
      <h1 className='text-4xl  font-extrabold underline mb-5 font-serif text-center text-gray-800'>History Matches </h1>
        {matches.map((item) => (
          item.status == "COMPLETED" && 
          <div className='bg-white m-auto w-3/4  h-80'>
            <div class="bg-white shadow-lg rounded-lg p-6 w-full ">
              <div class="text-center mb-4">
                <h2 class="text-2xl font-semibold">{item.teamHeading}</h2>
                <p class="text-gray-600">{item.matchNumberVenue}</p>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <div class="flex justify-between items-center mb-4">
                  <div>
                    <h3 class="text-lg font-semibold">{item.battingTeam}</h3>
                    <p class="text-gray-700">Team A</p>
                  </div>
                  <div class="text-2xl font-bold">{item.battingTeamScore}</div>
                </div>

                <div class="flex justify-between items-center mb-4">
                  <div>
                    <h3 class="text-lg font-semibold">{item.bowlTeam}</h3>
                    <p class="text-gray-700">Team B</p>
                  </div>
                  <div class="text-2xl font-bold">{item.bowlTeamScore}</div>
                </div>
              </div>

              <div>
                <p className='text-green-700 font-serif m-2' >{item.textComplete}</p>
              </div>

            </div>
          </div>))}
      </div>

      <div>

      <Footer/>
      </div>
    </div>
  )
}

export default History
