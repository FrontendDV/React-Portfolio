import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
import AVATAR5 from '../../assets/avatar5.jpg'


import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Deleniti aliquam officiis culpa omnis necessitatibus minima id consequatur provident eum in sit impedit iure et delectus, ea odio reprehenderit tempore repudiandae sunt ducimus quia quidem! Eligendi numquam corporis cupiditate eum ex, quasi ullam voluptates ab voluptatum porro temporibus quam dicta alias.'
  },
  {
    avatar: AVATAR2,
    name: 'Albert Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Deleniti aliquam officiis culpa omnis necessitatibus minima id consequatur provident eum in sit impedit iure et delectus, ea odio reprehenderit tempore repudiandae sunt ducimus quia quidem! Eligendi numquam corporis cupiditate eum ex, quasi ullam voluptates ab voluptatum porro temporibus quam dicta alias.'
  },
  {
    avatar: AVATAR3,
    name: 'Jonny Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Deleniti aliquam officiis culpa omnis necessitatibus minima id consequatur provident eum in sit impedit iure et delectus, ea odio reprehenderit tempore repudiandae sunt ducimus quia quidem! Eligendi numquam corporis cupiditate eum ex, quasi ullam voluptates ab voluptatum porro temporibus quam dicta alias.'
  },
  {
    avatar: AVATAR4,
    name: 'George Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Deleniti aliquam officiis culpa omnis necessitatibus minima id consequatur provident eum in sit impedit iure et delectus, ea odio reprehenderit tempore repudiandae sunt ducimus quia quidem! Eligendi numquam corporis cupiditate eum ex, quasi ullam voluptates ab voluptatum porro temporibus quam dicta alias.'
  },
  {
    avatar: AVATAR5,
    name: 'Avto Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Deleniti aliquam officiis culpa omnis necessitatibus minima id consequatur provident eum in sit impedit iure et delectus, ea odio reprehenderit tempore repudiandae sunt ducimus quia quidem! Eligendi numquam corporis cupiditate eum ex, quasi ullam voluptates ab voluptatum porro temporibus quam dicta alias.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper  modules={[EffectCards]} effect="cards" className="container testimonials__container"> 
          {
            data.map(({avatar,name,review}, index)=>{
              return(
                <SwiperSlide key={index} className='testimonial'>
                    <div className="client__avatar">
                      <img src={avatar} alt="avatar one" />
                    </div>
                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">
                      {review}
                    </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials