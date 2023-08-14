import { Heading, Image, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Coincard = ( {id ,name,img,symbol,price,currencySymbol }) => {
  return (
 <Link to={`/coin/${id}`} >

    <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} m={'4'}  transition={'all .3s'}
    css={{
"&:hover":{
    transform:'scale(1.1)'
},

    }}>
        
        <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt='Exchnages img'/>
        <Heading size={'md'} noOfLines={'1'} >{symbol} </Heading>
        <Text noOfLines={'1'}>{name}</Text>
        <Text noOfLines={'1'}>{price?`${currencySymbol}${price}`:"NA"}</Text>
    </VStack>





    </Link>  
    )
}

export default Coincard
