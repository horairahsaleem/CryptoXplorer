import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import harry from '../assets/harry.jpeg'

const Footer = () => {
  return (
   <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16','8']}>

    <Stack direction={['column','row']} alignItems={'center'} h={'full'}>
        <VStack w={'full'} alignItems={['center','flex-start']}>
            <Text fontWeight={'bold'}>About Us</Text>
            <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>
                Discover, analyze, and engage with the world of 
            cryptocurrencies on our user-friendly platform. From live coin data to detailed analysis and exchange insights, 
            CryptoExplorerX is your gateway to informed crypto decisions.
            </Text>

        </VStack>
        <VStack>
            <Avatar  name='Horairah Saleem ' src={harry} boxSize={'28'} mt={['4','0']}/>
            <Text>Our Founder </Text>
            <Text> Horairah </Text>
        </VStack>

    </Stack>

   </Box>
  )
}

export default Footer
