import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Business = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.from("#text h1", {
            opacity: 0,
            duration: 2,
            delay: 0.7,
            stagger: 0.4,
            scrollTrigger: {
                trigger: "#text",
                scroller: "body",
                start: "top 50%",
                end: "top 40%",
                scrub: true,
            },
        })
    })

    return (
        <section id='business' className='bg-[#E7CFB1] p-20'>
            <div id="text" className='flex flex-col justify-center items-center leading-none tracking-tighter text-[70px] text-[#151414]'>
                <h1 className=''>YOU HAVE A BEAUTIFUL</h1>
                <h1>PROJECT? LET'S TALK</h1>
                <h1>AROUND ONE</h1>
                <h1>GOOD COFFEE</h1>
            </div>
        </section>
    )
}

export default Business
