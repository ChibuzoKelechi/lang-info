import { Link } from "react-router-dom";
import Head from './Head'
const Home = () => {
    return ( 
        <section className="mh-full">
            <Head/>
         <Link to="/info">Start</Link>
        </section>
     );
}
 
export default Home;