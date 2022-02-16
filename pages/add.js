import axios from 'axios';
import { NDBBtn,MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {Router, useRouter} from "next/router"
import { useState } from 'react';


const AddNewHero = ()=> {
    const [superHero,setSuperHero] = useState("")
    const [realName,setRealName] = useState("")
    const router = useRouter()










    const handleChange = async (e)=> {
        e.preventDefault()
        try{
            if(!superHero,!realName) {
                alert("Please Enter all the fields")
            }
        const res = await axios.post("http://localhost:3000/api/hero/",{superHero,realName},{
            headers: {
                "Content-Type":"application/json"
            }
        })
        console.log(res);
        router.push("/")
    } catch (err) {
        console.log(err);
    }
    }

    return (
        <div>
            <div className='container'>
                <h4 className='display-4'>New hero identity</h4>
            </div>
            <form>
                <MDBInput className='my-2' type="text"
                onChange={(e)=>setSuperHero(e.target.value)}
                 />
                 <MDBInput type="text"
                onChange={(e)=>setRealName(e.target.value)}
                 />
                 <MDBBtn onClick={handleChange}>Add Name</MDBBtn>
            </form>
            
            
            <div>
            
            </div>
            {/* <Image src="https://cdn.cnn.com/cnnnext/dam/assets/220126091731-us-nato-file-2019-super-tease.jpg" alt='' /> */}
        </div>
    )
}

export default AddNewHero
