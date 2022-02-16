import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import Link from 'next/link';
import {Router, useRouter} from "next/router"
import { useState } from 'react';



function EachHero({heros}) {
    console.log(heros.superHero);
    const [superHero,setSuperHero] = useState("")
    const [realName,setRealName] = useState("")
    const [update,setUpdate] = useState(false)
    const router = useRouter()
    const id = heros._id
    const onDelete = async (e)=> {
        e.preventDefault()
        const res= await axios.delete(`http://localhost:3000/api/hero/${id}`)
        console.log(res);
        router.push("/")
    }

    const updateHandler = async(e)=> {
            e.preventDefault()
            const res = await axios.put(`http://localhost:3000/api/hero/${id}`,{superHero,realName},{
                headers: {
                    "Content-Type":"application/json"
                }
            })
            console.log(res);
            router.push("/")
    }
    return (
        <div className='container'>
             <MDBCard  style={{ maxWidth: '10rem' }}>
      <MDBCardBody>
        <MDBCardTitle>Reavel Identiry</MDBCardTitle>
        <MDBCardText>
        {heros.realName}
        </MDBCardText>
        <MDBCardText>
        {heros.superHero}
        </MDBCardText>
        <MDBBtn className='btn btn-success mb-2' onClick={()=>setUpdate(true)}>Edit</MDBBtn>
        <MDBBtn className='btn btn-danger mb-2' onClick={onDelete}>Delete</MDBBtn>

      </MDBCardBody>
    </MDBCard>
    <div>
    {update && 
    <form>
                <MDBInput className='my-2'
                 type="text"
                 label={heros.superHero}
                onChange={(e)=>setSuperHero(e.target.value)}
                 />
                 <MDBInput type="text"
                 label={heros.realName}
                onChange={(e)=>setRealName(e.target.value)}
                 />
                 <MDBBtn onClick={updateHandler} >Add Name</MDBBtn>
            </form>
    }
    </div>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const id = params.id
    const res = await axios.get(`http://localhost:3000/api/hero/${id}`)
    console.log(res.data.heros);
    const {hero} = res.data
    console.log(hero);
    return {
      props:{heros:hero}
    }
}
  

export default EachHero
