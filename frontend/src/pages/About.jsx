import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'}text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-6'>
        <img  className='w-full md:max-w-md'src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Forever was born out of a passion for innovation.  
                  Driven by a desire to revolutionize everyday experiences.  
                  Crafted to inspire progress and create lasting impact.
            </p>
            <p> Since our inception, we’ve worked tirelessly to curate a diverse selection that reflects both quality and variety. Guided by a clear vision, we strive to bring together products and experiences that resonate with people from all walks of life. Our commitment has always been to deliver excellence, ensuring that every choice we offer adds value and meaning to those who trust us.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p> Our mission at Forever is to empower customers with choice and convenience. We are dedicated to creating experiences that simplify everyday life while inspiring confidence in every decision. Guided by innovation and trust, we continue to shape solutions that bring lasting value to those we serve.</p>
        </div>

      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'}text2={' CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'> We meticulously select and vet each product to ensure it meets our stringent quality standards. Every item is carefully evaluated for performance, durability, and reliability before it becomes part of our collection. This commitment guarantees that our customers receive only the finest products, crafted to deliver trust and satisfaction. </p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>With our user‑friendly interface and hassle‑free ordering process, shopping becomes effortless and enjoyable. We’ve designed every step to be simple, intuitive, and convenient, ensuring that customers can find what they need without stress. Our goal is to make every purchase seamless, from browsing to checkout, so you can focus on the experience rather than the effort.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service</b>
                <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring that your experience is seamless and rewarding. With expertise and commitment at the core of everything we do, we strive to provide guidance, support, and solutions tailored to your needs. By combining passion with professionalism, we make sure you feel confident and cared for throughout your journey with us.</p>
            </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
