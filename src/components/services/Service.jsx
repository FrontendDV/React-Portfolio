import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="servcie__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGn */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="servcie__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Support</h3>
          </div>
          <ul className="servcie__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Service