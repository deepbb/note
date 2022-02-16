import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';

function index({heros}) {
  return (
    <div className="container">
      <h5>Super hero identity manager</h5>
      <div className='border border-2'>
      {heros.map((hero,index)=> (
        <MDBCard key={index} style={{ maxWidth: '10rem' }}>
      <MDBCardBody>
        <MDBCardTitle>Reavel Identiry</MDBCardTitle>
        <MDBCardText>
          {hero.realName}
        </MDBCardText>
       <button type="button" className="btn btn-outline-primary" data-mdb-ripple-color="dark"><Link href={`/${hero._id}`} passHref> view hero </Link></button>

      </MDBCardBody>
    </MDBCard>
      ))}
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await axios.get("http://localhost:3000/api/hero/")
  console.log(res.data.heros);
  const {heros} = res.data
  console.log(heros);
  return {
    props:{heros:heros}
  }

}

export default index
