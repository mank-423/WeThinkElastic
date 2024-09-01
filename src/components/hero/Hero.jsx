import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import firstVideo from '../../assets/video/brand.mp4';
import ScrollTrigger from 'gsap/ScrollTrigger'


const Hero = ({ isFixed }) => {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const vid = document.getElementById("video");
        if (vid) {
            vid.play();
        }
    }, []);

    useGSAP(() => {

        var tl = gsap.timeline();

        tl.from("#text-header", {
            y: 800,
            opacity: 0,
            duration: 1,
            delay: 0.7,
            ease: "circ.out",
        });

        tl.from("#text-small", {
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.5,
        });

        tl.to("#video-slider > div", {
            width: "100%",
            duration: 1.5,
            delay: 0.8,
            scrollTrigger: {
                trigger: "#video-slider",
                start: "top 90%", 
                end: "top 20%",   
                scrub: true,      
            },
        });


    }, [])

    return (
        <section id='hero' className={`flex flex-col items-center justify-center ${isFixed ? 'mt-20' : ''}`}>
            <h1 id='text-header' className='text-[#F3C77C] text-[500px] font-[1000] leading-none tracking-tighter'>
                hello
            </h1>

            <div id='text-small' className='w-[40%] text-[40px] font-extralight leading-none'>
                <h1 className='flex justify-center items-center text-[#F3C77C]'>
                    WE'RE THE SAME
                </h1>
                <h1 className='flex justify-center items-center text-[#F3C77C] pb-10'>
                    THINK ELASTIC
                </h1>
            </div>

            <div id='video-slider' className='flex justify-center items-center'>
                <div className='w-1/2'>
                    <video id="video-slider" autoPlay loop muted>
                        <source src={firstVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Hero
