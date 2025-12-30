import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfilePage from '../pages/user/ProfilePage/ProfilePage'

function AccountRouter() {
  return (
    <div>
        <Routes>
            <Route path="/:username" element={<ProfilePage />} />
        </Routes>
    </div>
  )
}

export default AccountRouter