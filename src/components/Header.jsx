
import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'black'} w={'full'}>
      <Button variant={'unstyled'} color={'white'} >
        <Link to={'/'} > Home</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'} >
        <Link to={'/coins'} > Coins</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'} >
      <Link to={'/exchange'} color='white' > Exchanges</Link>
      </Button>
      
    


    </HStack>
   

   
  )
}

export default Header
