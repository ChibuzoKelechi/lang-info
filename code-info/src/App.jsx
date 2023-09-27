import './App.css'
import Router from './Router'
import Intro from './Head'
// import Info from './Info'

function App() {

  return (
    <Router>
      <section className='h-screen bg-black text-white'>
      <Intro/>
      {/* <Head/>
      <Info/> */}
      </section>
   </Router>
  )
}

export default App