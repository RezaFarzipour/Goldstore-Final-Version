import React from 'react'
import BuyAndSellBox from '../../modules/customerDashboard/BuyAndSellBoxModule'
import { Box } from '@mui/material'

const SellGold = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <BuyAndSellBox  headerLable='قیمت فروش' priceColor='red' buttonValue="فروش"/>
    </Box>
  )
}

export default SellGold