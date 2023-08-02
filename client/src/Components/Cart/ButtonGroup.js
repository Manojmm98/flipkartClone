import {Button, ButtonGroup, styled } from '@mui/material'
import React, { useState,useEffect, useContext } from 'react'


const GroupedButton = () => {


 

 const MultiButton = styled(ButtonGroup)({
            marginTop:30
})

const ActionButton = styled(Button)({
 
    borderRadius:"50%"
})







  return (
       <MultiButton>
        <ActionButton>-</ActionButton>
        <Button disabled>1</Button>
        <ActionButton >+</ActionButton>
       </MultiButton>
  )
}

export default GroupedButton