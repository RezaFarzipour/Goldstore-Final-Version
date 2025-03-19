import { Box, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../styles/theme'

const BuyAndSellBoxFooter = () => {
  return (
    <Box display="flex" justifyContent="space-evenly">
        <Box>
          <Typography sx={{ color: "#fff", p: 1 }}>
            <span style={{ color: colors.gold[300] }}>کیف طلا:</span>
            {/* <span>{walletDataToken.wallet_gold_data}&nbsp;گرم</span> */}
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ color: colors.primary[400], p: 1 }}>
            <span style={{ color: colors.gold[300] }}>کیف پول:</span>
            <span>
              {/* {numeral(walletDataToken.wallet_money_data).format("0,0")} */}
              &nbsp;ریال
            </span>
          </Typography>
        </Box>
      </Box>
  )
}

export default BuyAndSellBoxFooter