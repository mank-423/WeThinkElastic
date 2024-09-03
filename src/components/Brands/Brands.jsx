import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Brands = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from("#brand-line-1", {
            opacity: 0,
            duration: 3,
            delay: 2,
            scrollTrigger: {
                trigger: "#brand-line-1",
                scroller: "body",
                start: "top 60%", 
                end: "top 10%",
                scrub: true
            },
        });

        tl.from("#brand-line-2", {
            opacity: 0,
            duration: 3,
            delay: 2,
            scrollTrigger: {
                trigger: "#brand-line-2",
                scroller: "body",
                start: "top 60%",
                end: "top 10%",
                scrub: true,
            },
        });

        tl.from("#brand-line-3", {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#brand-line-3",
                scroller: "body",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            },
        });

        tl.from("#brand-line-4", {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#brand-line-4",
                scroller: "body",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            },
        });
    }, [])


    return (
        <section className='p-12 bg-[#151414]'>
            <div className='flex justify-between px-10 py-24' id='brand-line-1'>
                <img src="https://wethinkelastic.com/assets/images/17c7455d574fc6222d226.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/27275550faa69b382a7d9.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/36984a1f5516144b66b9f.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/4de000aa0c2fcb4105f0b.svg" alt="" />
            </div>

            <div className='flex justify-between px-10 py-24' id='brand-line-2'>
                <img src="https://wethinkelastic.com/assets/images/5f9435b780f885130afd4.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/6ab6b3724d98d20326313.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/7317ec5c8943977044c6d.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/83862fc8dc3642ac61cbe.svg" alt="" />
            </div>

            <div className='flex justify-between px-10 py-24' id='brand-line-3'>
                <img src="https://wethinkelastic.com/assets/images/96ed762b4556f90f0f409.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/10c9b9eb661788ed09261f.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/11dc1bdfff517735151c01.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/12875d4d9e8bb95bfa429a.svg" alt="" />
            </div>

            <div className='flex justify-between px-10 py-24' id='brand-line-4'>
                <img src="https://wethinkelastic.com/assets/images/139a5fddbe9f84e22e2dd7.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/18a783ec97b3e216399666.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/192319579aa9cc87bfd74d.svg" alt="" />
                <img src="https://wethinkelastic.com/assets/images/15976b2825c9b04f87d928.svg" alt="" />
            </div>

        </section>
    )
}

export default Brands
