import React from 'react'
import Motion from '../Components/Motion'
import Title from '../Components/Title'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <Motion>
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src="/assets/about_img.png" alt="aboutimage" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia corporis eveniet consequatur, atque adipisci eos expedita? Delectus iste deserunt pariatur numquam deleniti fuga accusantium consequatur, alias doloribus nisi eum ipsam rerum aliquam officia reiciendis. Repellendus impedit modi voluptates rerum architecto incidunt. Beatae accusamus aliquid culpa.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus veniam dignissimos ex temporibus velit?</p>
          <b>Our mISSION</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate nobis praesentium a, nostrum asperiores doloribus repellendus voluptatum consectetur quis ratione illum sed voluptates eaque.</p>
        </div>
      </div>
      <div>
        <Title text1={"WHY"} text2={"CHHOSE US"}/>
        <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quantity Ansurancee :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis, iste rerum assumenda repellendus et beatae dolor voluptatum ipsum blanditiis, eveniet rem culpa neque aliquam?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convienience :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis, iste rerum assumenda repellendus et beatae dolor voluptatum ipsum blanditiis, eveniet rem culpa neque aliquam?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis, iste rerum assumenda repellendus et beatae dolor voluptatum ipsum blanditiis, eveniet rem culpa neque aliquam?</p>
        </div>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
    </Motion>
  )
}

export default About