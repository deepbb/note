import Link from 'next/link'
import {MDBBtn} from "mdb-react-ui-kit"

function Navbar() {
    return (
        <div className='navbar container'>
            <Link href="/">
                    <a className='navbar-brand'> Superhero identity</a>
            </Link>
            <Link href="/add" passHref>
                    <MDBBtn>identity</MDBBtn>
            </Link>
        </div>
    )
}

export default Navbar
