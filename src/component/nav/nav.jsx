import './nav.css'
import { useRef, useState } from 'react'
import { HashLink as Link} from 'react-router-hash-link'



function Nav({list, mixed, listing, theWrap, secLogo}) {

  const ref = useRef(null)

  const [listz, setListz] = useState()
  
  const display = ()=>{
      setListz(!listz)
  }
  
  return (
    <div>
      <div className="navy-complete">
         <div className="logo-navigation">
            <div className={theWrap}>
             <Link smooth to="#home"><img className='main-logo' src="asset/logo.png" alt="" /></Link>
                
                <img className={secLogo} src={secLogo} alt="" />
            </div>
            <div className={list}>
                <ul className={mixed} ref={ref}>
                    <li className={listing}><Link smooth to="#first">0.1 <span> HISTORY</span></Link></li>
                    <li  className={listing}><Link smooth to="#second">0.2 <span> TEAM</span></Link></li>
                </ul>
                <div className={listz? "mobile" :"unshow"}>
                    <div className="custom-move">
                      <li className={listing}><Link to="">0.1 <span> HISTORY</span></Link></li>
                      <li  className={listing}><Link to="">0.2 <span> TEAM</span></Link></li>
                    </div>
                </div>
            </div>
            <div className="farbar" onClick={display}>
              <div></div>
              <div></div>
              <div></div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Nav
