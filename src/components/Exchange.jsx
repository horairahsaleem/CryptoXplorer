import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {server} from '../index'
import { Container, HStack ,Button} from '@chakra-ui/react'
import Loader from './Loader'
import Exchangecard from './Exchangecard'
import Errorcomponent from './Errorcomponent'

const Exchange = () => {
    const [exchanges,setexchanges] = useState([])
    const [loading,setloading] = useState(true)
    const [error,setError] = useState(false)
    const[page,setpage] = useState(1)

    const changepage=(page)=>{
        setpage(page)
        setloading(true)
      
      }
      const btn = new Array(6).fill(1)

     useEffect(()=>{
        const exchanges=async()=>{
            try {
            const {data} = await axios.get(`${server}/exchanges?page=${page}`)
            setexchanges(data)
            setloading(false)
                
            } 
            catch (error) {
                setError(true)
                setloading(false)

                
            }
            
        }
        exchanges()

    },[page])
    if (error) return  <Errorcomponent   messsage={'Error while fetching the data '}/>
  return (
    <Container maxW={'container.xl'} >
        {loading ? <Loader/> : <>

        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {
                exchanges.map((i)=>(
                    <Exchangecard  key={i.id} name={i.name} rank={i.trust_score_rank} img={i.image} url={i.url}/>

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

export default Exchange
