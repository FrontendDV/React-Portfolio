import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'
import IMG4 from '../../assets/portfolio-4.png'
import IMG5 from '../../assets/portfolio-5.png'
import IMG6 from '../../assets/portfolio-6.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard & FInancial Visualization',
        github: 'https://github.com',
        demo: 'https://frontenddv.github.io/Portfolio/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Crypto Currency Dashboard & FInancial Visualization',
        github: 'https://github.com',
        demo: 'https://frontenddv.github.io/Portfolio/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Crypto Currency Dashboard & FInancial Visualization',
        github: 'https://github.com',
        demo: 'https://frontenddv.github.io/Portfolio/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Crypto Currency Dashboard & FInancial Visualization',
        github: 'https://github.com',
        demo: 'https://frontenddv.github.io/Portfolio/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Crypto Currency Dashboard & FInancial Visualization',
        github: 'https://github.com',
        demo: 'https://frontenddv.github.io/Portfolio/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Crypto Currency Dashboard & FInancial',
        github: 'https://github.com',
        demo: 'https://frontenddv.github.io/Portfolio/'
    }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id,image,title,github,demo})=>{
                    return(
                        <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-CTA">
                                <a href={github}className='btn'>GitHub</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio