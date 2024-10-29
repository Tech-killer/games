import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/services'

function service() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Service />
      </div>
      <Footer />
    </>
  )
}

export default service