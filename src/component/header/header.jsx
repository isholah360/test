import Nav from '../nav/nav'
import './header.css'


function Header() {
  return (
    <div>
      <div className="header-complete" id='home'>
        <Nav list="list" mixed="mixer" listing="head-list" theWrap="wrap" secLogo="seclogo"/>
      </div>
    </div>
  )
}

export default Header
