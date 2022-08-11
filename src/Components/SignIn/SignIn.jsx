import React, { useState } from 'react'
import '../SignIn/signin.scss'

function SignIn() {
  const [login, setLogin] = useState(false)
  return (
    <>
      {
        login ? (
          <>
          <h5>Sanan Abbasov</h5>
          </>
        )
          :
          (
            <>
              <button className='btn'>
                Sign In
              </button>
            </>
          )
      }
    </>
  )
}

export default SignIn