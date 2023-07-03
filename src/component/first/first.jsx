import Carousel from './carousel'
import './first.css'

function First() {
  return (
   <>

        <div>
            <div className="first-complete" id='first'>
               <div className="main-bg-wrap">
                    <img className="bg" src="asset/h3.jpg" alt="" />
                    <div className="one-content">
                       <div className="number-content">
                            <div className="thefirst">01.</div>
                            <div className="history">HISTORY</div>
                       </div>
                       <div className="lorep">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Duis maximus, nibh eu pulvinar commodo, nisl nulla 
                       vehicula nibh, a sagittis arcu sem et dui. Suspendisse 
                       gravida venenatis aliquet. Donec ultrices, ante a 
                       scelerisque pretium, ligula neque molestie felis, 
                       quis viverra quam ante ut lacus. Sed at condimentum ipsum.
                      
                       </div>
                    </div>
                    
                  <div className="carousel">
                    <Carousel/>
                 </div> 
               </div>
            </div>
        </div>
   
   </>
  )
}

export default First