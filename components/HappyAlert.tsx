import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const HappyAlert = () => {
  return (
    <div className='bg-[#FEEBCB] h-20  border-l-4 border-[#DD6B20] flex items-center px-6'>
        <Image src='./alert.svg' width={25} height={25} alt="alert"/>
        <div className='ml-4'>
            <Text fontWeight='bold'>Happy Hour</Text>
            <Text>16:00 - 17:00 hs MEX</Text>
        </div>
    </div>
  )
}

export default HappyAlert