import { useGSAP } from '@gsap/react'
import React from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const Parallax = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.to("#expertises", {
            transform: "translateX(-110%)",
            duration: 3,
            scrollTrigger: {
                trigger: "#parallax",
                scroller: "body",
                start: "top 0%",
                end: "top -100%",
                pin: true,
                scrub: true,
            }
        })

        gsap.from("#column-1", {
            opacity: 0,
            duration: 2,
            scrollTrigger: {
              trigger: "#list-items-parallax",
              scroller: "body",
              start: "top 70%", 
              end: "top 20%",   
              scrub: true,    
            },
        })
    }, [])


    return (
        <section className='bg-[#9AC1CB] pl-5 py-20 pr-[-10]' id='parallax'>
            <div id='parallax' className='leading-none'>
                <h1 id='expertises' className='text-[500px] font-[500] text-[#151414] tracking-tighter'>EXPERTISES</h1>
            </div>

            <div className='flex items-start justify-around p-10' id="list-items-parallax">

                <div id="column1">
                    <h1 className='text-[#151414] text-2xl font-[500]'>STRATEGY & IDEAS</h1>
                    <ul className='text-lg text-[#383737] font-[400]'>
                        <li>Positioning</li>
                        <li>Brand platform</li>
                        <li>Digital Strategy</li>
                        <li>Social Strategy</li>
                        <li>Content Marketing</li>
                    </ul>
                </div>

                <div id="column2">
                    <h1 className='text-[#151414] text-2xl font-[500]'>BRAND IDENTITY</h1>
                    <ul className='text-lg text-[#383737] font-[400]'>
                        <li>Logo</li>
                        <li>Graphic identity</li>
                        <li>Graphic charter</li>
                        <li>Editorial charter</li>
                        <li>Content Creation</li>
                        <li>Social media guidelines</li>
                    </ul>
                </div>

                <div id="column3">
                    <h1 className='text-[#151414] text-2xl font-[500]'>DIGITAL EXPERIENCE</h1>
                    <ul className='text-lg text-[#383737] font-[400]'>
                        <li>UI Design</li>
                        <li>Audit and UX Design</li>
                        <li>Showcase site</li>
                        <li>E-commerce website</li>
                        <li>Web Application</li>
                        <li>Mobile Application</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default Parallax
