import './footer.css'
import { useRef, useState } from 'react'

function Footer() {
   const h1 = useRef(null)
   const h2= useRef(null)
   const bg = useRef(null)

   const [bgImg, SetBgImg] = useState ("footer-bg")

   const changeH1 = ()=>{
    h1.current.style.backgroundColor="rgba(241, 241, 241, 0.897)"
    h1.current.style.color="rgb(63, 78, 129)"
    h2.current.style.backgroundColor="rgb(63, 78, 108)"
    h2.current.style.color="rgba(241, 241, 241, 0.897)"
    SetBgImg("footer-bg")
   }
   const changeH2 = ()=>{
     h2.current.style.backgroundColor="rgba(241, 241, 241, 0.897)"
     h2.current.style.color="rgb(63, 78, 129)"
     h1.current.style.backgroundColor="rgb(63, 78, 108)"
     h1.current.style.color="rgba(241, 241, 241, 0.897)"
     SetBgImg(!bgImg)
   }

  return (
    <div>
      <div className="footer-complete">
        <div className={bgImg ? "footer-bg":"footer-bg2"} ref={bg} >
            <div className="mountain">
               <p className='mount active' ref={h1} onClick={changeH1}>MOUNTAIN 1</p>
               <p  className='mount' ref={h2} onClick={changeH2}>MOUNTAIN 2</p>
            </div>
            <div className="schedule-blub">
                <div className="schedule">SCHEDULE</div>
                <div className="schedule-date">
                  <p> 02 July 2023 <span >Mountain Hiking</span></p>
                  <p> 02 July 2023 <span >Mountain Hiking</span></p>
                  <p> 10 July 2023 <span >Mountain Hiking</span></p>
                  <p> 25 July 2023 <span >Mountain Hiking</span></p>
                </div>
            </div>
        </div>
      </div>
      <div className="main-footer">
          <div className="footer-logos">
            <div className="footer-logos-wrap">
                <img className="footer-logos-main" src="asset/logo.png" alt="" />
            </div>
            <div className="sec-footer-logo">
              <p>LOSANGELES</p>
              <p className='mountain-letters'>MOUNTAINS</p>
            </div>
          </div>
          <div className="copyright">
            COPYRIGHT 2016. ALL RIGHTS RESERVED
          </div>
      </div>
    </div>
  )
}

export default Footer
