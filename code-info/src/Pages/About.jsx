import { motion } from 'framer-motion';
import { FaAppStoreIos, FaAndroid, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {

    return ( 
        <section className='about'>
            <Link to="/" className='text-white p-2'>
              <FaHome style={{color: 'white', fontSize: '50px', padding:'10px'}}/>
            </Link>
              <motion.article
              className='text-center m-1 mt-32'
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1,
                  transition: { duration: 1 }}}
              >
                <h1 className='bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-3xl p-4 font-extrabold text-transparent'> Everything you need to know</h1>
                <p className='w-3/4 text-blue-50 mx-auto font-bold'>Get top information about the world&apos;s most popular programming languages</p>
      
              <Feature
               head='Resources'
               desc='Get learning resources for any language of choice'
               icon={ <FaAppStoreIos style={{color: 'white', fontSize: '50px', marginTop: '1rem', paddingBottom: '10px'}}/>}
              />
                
              <Feature
               head='Fun facts and trivia'
               desc='Learn the funny and unknown things about ur fave language'
               icon={ <FaAndroid style={{color: 'white', fontSize: '50px', marginTop: '1rem', paddingBottom: '10px'}}/>}
              />
             
             </motion.article>

            
        </section>
     );
}
 
export default About;


// eslint-disable-next-line react/prop-types
const Feature = ({head, desc, icon}) => {
    return (
        <motion.div 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1,
           transition: { duration: 1 }}
           }
         className='div mt-20 m-3 p-4 text-left bg-gray-900 rounded-xl w-3/4 mx-auto'>

            <div>{icon}</div>
            
            <div>
             <h2 className='font-bold'>{head}</h2>
             <p className="">{desc}</p>
            </div>
            
        </motion.div>
      );
}
 