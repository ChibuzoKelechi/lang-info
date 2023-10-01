import Head from './Pages/Head';
import NavBar from "./Components/NavBar";

const Home = () => {
    return ( 
        <section className="home p-3 mh-full w-full">
            <NavBar/>
            <Head/>
        </section>
     );
}
 
export default Home;