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
        start: "top 20%",
        end: "top 0",
        scrub: true
      }
    })

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#part-1-text",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        scrub: true
      }
    })

    tl2.from(".left1", {
      x: -400,
      duration: 1,
      opacity: 0,
      delay:0.5
    },"anim1")

    tl.from(".right1", {
      x: 400,
      duration: 1.2,
      opacity: 0,
      delay:0.5,
    }, "anim2")

    tl2.from(".left2", {
      x: -400,
      duration: 1,
      opacity: 0,
      delay:0.5
    },"anim1")

    tl.from(".right2", {
      x: 400,
      duration: 1.2,
      opacity: 0,
      delay:0.5,
    }, "anim2")

    tl.from("#last-info", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
    })

  }, []);


  return (
    <section className='text-[#E7CFB1] font-[500] leading-none tracking-tighter flex flex-col justify-center items-center text-[180px] py-10 relative'>

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
        <div className="text-[18px] absolute tracking-normal font-[300] right-4 bottom-20" id='last-info'>
          <p>THANKS TO A STORYTELLING</p>
          <p>IMPACTING AN IDENTITY</p>
          <p>STRONG VISUAL OF INTERFACES</p>
          <p>ULTRA-FLUID DIGITAL</p>
        </div>
      </div>

    </section>
  )
}

export default About
