import Head from './Head';
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import { FaMicrosoft } from 'react-icons/fa';

const Home = () => {
   
    return ( 
        <section className="home p-3 mh-full w-full">
            <NavBar/>
            <Head/>
            <SkillContainer/>
        </section>
     );
}
 
export default Home;

const SkillContainer = () => {
    const [skill, setSkill] = useState('Python')

    useEffect(() => {
        console.log('I am a Software developer');
        console.log(skill);

    }, [skill])

    return (  
        <div>
            <h1> {skill} developer </h1>
            <button onClick={() => {
                setSkill('NextJs')
            }}>
                <FaMicrosoft style={{color: 'white', fontSize: '30px', margin: 'auto'}}/>
            </button>

            
        </div>
    );
}
 