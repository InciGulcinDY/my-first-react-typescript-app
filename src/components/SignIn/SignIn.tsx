import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart';

type Props = {}

interface SignInProps {
    signOut: () => void;
  }

const SignIn = (prop: SignInProps) => {


  

  return (
    <div className='container-fluid d-flex'>

        {/*Language Dropdown Menu*/}
        <Link className="navbar-brand btn dropdown-toggle" to="/">
            Language
        </Link>

        {/*TODO: Dropdown will be added!!!*/}

        <Link className="navbar-brand btn d-flex" to="/" >
            <img src="/assets/profil.jpg" className="rounded mx-auto d-block me-1" width={30} alt="" onClick={prop.signOut}/>
            Inci
        </Link>

 {/*Cart*/} 
 <Cart/>
        
    </div>
  )
}

export default SignIn