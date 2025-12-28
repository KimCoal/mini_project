import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OAuth2Page from '../pages/user/OAuth2Page/OAuth2Page'

function OAuth2Router() {
  return (
    <>
        <Routes>
            <Route path="/" element={<OAuth2Page />} />
        </Routes>
    </>
  )
}

export default OAuth2Router