"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Header = () => {
  const router = useRouter()
  return (
    <div id='Inicio' className='headerContainer flexCenter'><img onClick={() => router.push("/")} src="./images/logo2.png" alt="" /></div>
  )
}

export default Header