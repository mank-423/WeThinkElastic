import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'


const About = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#part-1-text",
        scroller: "body",
        start: "top+=30% 60%",
        // markers: true,
        end: "end",
        scrub: true
      }
    })

    tl.from(".left1", {
      y: 100,
      duration: 3,
      opacity: 0,
      delay: 0.5
    })

    tl.from(".right1", {
      y: 100,
      duration: 3,
      opacity: 0,
      delay: 1.5,
    })

    tl.from(".left2", {
      y: 100,
      duration: 3,
      opacity: 0,
      delay: 2
    })

    tl.from(".right2", {
      y: 100,
      duration: 3,
      opacity: 0,
      delay: 2.5,
    })

    gsap.from("#last-info", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#last-info",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        scrub: true
      }
    })

  }, []);


  return (
    <section className='text-[#E7CFB1] font-[500] leading-none tracking-tighter flex flex-col justify-center items-center text-[180px] py-10 mt-20'>

      <div id="part-1-text" className='flex flex-col'>
        <h1 className='left1'>
          <span className='different-font'>we </span> HELP
        </h1>
        <h1 className='right1'>THE BRANDS</h1>
      </div>

      <div id='part-2' className='ml-12'>
        <h2 className="left2">
          <span className='different-font'>to </span> GROW
        </h2>
      </div>


      <div id="part-3" className='flex flex-row justify-start items-start mr-24'>
        <h1 className='right2'>
          PLUS FAST
        </h1>
      </div>

      <div className="text-[18px] tracking-normal font-[300] right-4 bottom-20" id='last-info'>
        <p>THANKS TO A STORYTELLING</p>
        <p>IMPACTING AN IDENTITY</p>
        <p>STRONG VISUAL OF INTERFACES</p>
        <p>ULTRA-FLUID DIGITAL</p>
      </div>

    </section>
  )
}

export default About
