import React from 'react'
import {Outlet} from 'react-router-dom'
import ProjectNavbar from '../projectnavbar/ProjectNavbar'

function HomeLayout() {
  return (
    <div>
      <div>
        <ProjectNavbar/>
      </div>
      <div className='bg-dark' style={{minHeight:'93vh'}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default HomeLayout