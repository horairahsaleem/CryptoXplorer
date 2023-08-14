import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {server} from '../index'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import Loader from './Loader'
import Errorcomponent from './Errorcomponent'
import Coincard from './Coincard'


const Coins = () => {
    const [coins,setcoins] = useState([])
    const [loading,setloading] = useState(true)
    const [error,setError] = useState(false)
    const[page,setpage] = useState(1)
    const[currency,setcurrency] = useState("usd")
    const currencySymbol=
currency=== 'pkr'?'₨':currency==='eur'?'€':'$'
const changepage=(page)=>{
  setpage(page)
  setloading(true)

}
const btn = new Array(101).fill(1)
     useEffect(()=>{
        const fetchcoins=async()=>{
            try {
            const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
            setcoins(data)
            setloading(false)
                
            } 
            catch (error) {
                setError(true)
                setloading(false)

                
            }
            
        }
        fetchcoins()

    },[currency,page])
    if (error) return  (<Errorcomponent   messsage={'Error while fetching the  coins data'}/>)
  return (
    <Container maxW={'container.xl'} >
        {loading ? <Loader/> : <>


        <RadioGroup value={currency} onChange={setcurrency} >
          <HStack>
            <Radio value='pkr'>PKR</Radio>
            <Radio value='eur'>EUR</Radio>
            <Radio value='usd'>USD</Radio>
          </HStack>

        </RadioGroup>

        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {
                coins.map((i)=>(
                    <Coincard id={i.id} price={i.current_price} key={i.id} name={i.name} img={i.image} symbol={i.symbol} url={i.url}
                    currencySymbol={currencySymbol}
                    />

                ))

            }
            
        

                
        
        </HStack>
        
        
        <HStack  w={'full'}  p={'8'} overflowX={'auto'}>
          {btn.map((item,index)=>
          <Button bgColor={'blackAlpha.900'} color={'white'}  onClick={()=>{changepage(index+1)}}>{index+1}</Button>)}
        </HStack>
        
        
        </>}

    </Container>
  )
}



export default Coins


