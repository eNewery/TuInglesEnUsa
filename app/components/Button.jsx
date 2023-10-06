import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <div className="landingButtonContainer">
<img className='arrowItem1' src="./images/arrow.png" alt="" />
        <Link href="/Form" className='textCenter textBold'>INFÓRMATE AHORA</Link>
    </div>
  )
}

export default Button