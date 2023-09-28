import { motion } from 'framer-motion';

const About = () => {
    return ( 
        <section className='about '>
            <motion.article
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
            >
             <h1 className='bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-4xl font-extrabold text-transparent'> Everything you need to know</h1>
            </motion.article>
        </section>
     );
}
 
export default About;