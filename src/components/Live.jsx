import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet'
import { getLiveMatches } from '../services/CricketService'
import Footer from './Footer'

const Live = () => {
  const [matches, setMatches] = useState([])
  const callAPI = () => {
    getLiveMatches().then((response) => {
      setMatches(response.data)
      // console.log(matches);
    }).catch(error => console.log(error))
  }
  useEffect(callAPI, [])
  return (
    <div className='bg-white'>
      <Helmet>
        <title>Live - Cricket Informer</title>
      </Helmet>

      <Header />

      <div className='w-full h-screen '>
      <h1 className='text-4xl  font-extrabold underline m-2 font-serif text-center mb-4 text-gray-800'>Live Cricket Score</h1>
        {matches.map((item) => (
          item.status == "LIVE" && item.liveText != "" &&
          <div className='bg-gray-100 m-auto mt-10 w-3/4  h-80'>
            <div class="bg-white shadow-2xl rounded-lg p-6 w-full ">
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
                <p className='text-green-700 font-serif m-2' >{item.liveText}</p>
              </div>

              <div class="text-center mt-4">
                <span class="bg-red-600 text-white px-3 py-1 rounded-full">LIVE</span>
              </div>
            </div>
          </div>))}
        <div>

          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Live
