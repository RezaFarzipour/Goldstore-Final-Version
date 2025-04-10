import React from 'react'
import { Rtl } from '../../element/rtl'
import { Box, Typography } from '@mui/material'
import DepositeBox from '../../modules/customerDashboard/DepositeBoxModule'
import { ErrorPendingHandler } from '../../../utils/ErrrorPendingHandler'
import { useQuery } from '@tanstack/react-query'
import { walletdata } from '../../../services/customerDashboard'

const ReceiveGold = () => {

  const {
    data: walletData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["walletdata"],
    queryFn: walletdata,
  });

  const walletBalance = walletData?.goldBalance;

  ErrorPendingHandler(error?.message, isPending);

  return (
    <Rtl>
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div style={{ maxWidth: "800px" }}>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            my: 5,
            textAlign: "center",
            fontFamily: "Yekan",
            fontSize: { xs: "36px", md: "45px" },
          }}
        >
          دریافت طلا
        </Typography>
        <DepositeBox
          walletBalance={walletBalance}
          headerContent="مقدار را وارد کنید"
          footerContent="موجود کیف طلا"
          unit="گرم"
          buttonValue="دریافت"
          display="flex"
        />
      </div>
    </Box>
  </Rtl>
  )
}

export default ReceiveGold