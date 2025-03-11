import { TextField } from '@mui/material'
import React from 'react'
import { InputStyle } from './verifyinput_style'

interface VerifyInputProps {
    label: string;
    onchangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

const VerifyInput: React.FC<VerifyInputProps> = ({label,onchangeHandler}) => {
  return (
    
    <TextField
    onChange={onchangeHandler}
    sx={InputStyle}
    margin="normal"
    fullWidth
   
    id="number"
    label={label}
    autoFocus
  />
  )
}

export default VerifyInput