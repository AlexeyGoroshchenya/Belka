import React, { useEffect, useRef } from 'react';
import styles from './FAQs.module.css'

const FAQs = ({ scroll }) => {

    const faqsRef = useRef()

    useEffect(() => {
        scroll.setScrollBorders(prev => [...prev, { id: faqsRef.current.attributes.id.value, offset: faqsRef.current.offsetTop }])
        console.log(scroll.scrollBorders)
    }, [])

    return (
        <section id='faqs' ref={faqsRef} className={styles.faqs}>

            <div className={styles.body}>

                <div className={styles.title}>
                    Вопросы
                </div>

                <div className={styles.questions}>

                    <div className={styles.question}>
                        <p>Lorem ipsum dolor sit amet consectetur?</p>
                        <div className={styles.text}>
                            

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti, nemo blanditiis consequuntur odit vel fugiat, voluptatibus suscipit non commodi, laudantium quisquam dolore temporibus voluptatum ipsa quam delectus est pariatur.</p>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <p>Lorem ipsum dolor sit amet consectetur?</p>
                        <div className={styles.text}>
                            

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti, nemo blanditiis consequuntur odit vel fugiat, voluptatibus suscipit non commodi, laudantium quisquam dolore temporibus voluptatum ipsa quam delectus est pariatur.</p>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <p>Lorem ipsum dolor sit amet consectetur?</p>
                        <div className={styles.text}>
                            

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti, nemo blanditiis consequuntur odit vel fugiat, voluptatibus suscipit non commodi, laudantium quisquam dolore temporibus voluptatum ipsa quam delectus est pariatur.</p>
                        </div>
                    </div>
                    
                </div>
            

        

            </div >

        </section >
    );
};

export default FAQs;