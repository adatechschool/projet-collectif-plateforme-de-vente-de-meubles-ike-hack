import logo from './assets/logo.svg';
import accountLogo from './assets/account.svg'

function Header() {

    return (
      <>
        <ul className='header'>
            <li><img id="logo" src={logo} alt="Logo" /></li>
            <li><a href=''>Iké'hack</a></li>
            <li><a href=""><img id="accountLogo" src={accountLogo} alt="account" /></a></li>
        </ul>
      </>
    )
    }
    
export default Header
    