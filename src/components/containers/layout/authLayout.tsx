import React from 'react'
import { Rtl } from '../../element/Rtl'
import { Grid2, Paper } from '@mui/material'

import AuthGoldImage from '../../modules/authModules/authGoldImage'
import { ContentGrid, MainGrid } from './style'




type AuthLayoutProps ={
    children:React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <Rtl>
    <Grid2 container sx={MainGrid()}>
      <Grid2
        sx={ContentGrid}
        size={{ xs: 12, sm: 8, md: 5 }}
       
        component={Paper}
        square
      >
      {children}
      </Grid2>
      {/* left part */}
     <AuthGoldImage/>
    </Grid2>
  </Rtl>  )
}

export default AuthLayout