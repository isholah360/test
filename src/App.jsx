
import './App.css'
import { First, Header, Nav, Second, Footer} from './component'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {


  return (
    <>
     <BrowserRouter>

      <Header/>
      <div className="nav-bg">
       <Nav list="color-one" mixed="mixer" listing="listing" theWrap="wraps" secLogo="asset/h10.png"/>
      </div>
    
        <First/>
        <Second/>
      
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
