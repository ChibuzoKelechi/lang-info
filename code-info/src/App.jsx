import './App.css'
import Router from './Router'
import Intro from './Pages/Head'
// import Info from './Info'
// import NavBar from "./Components/NavBar";


function App() {

  return (
    <Router>
        <section className='h-screen bg-black text-white'>
          <Intro/>
        </section>
     </Router>
  )
}

export default App