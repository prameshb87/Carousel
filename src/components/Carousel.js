import { useState } from 'react';
import '../styles/Carousel.css';
import { cities } from '../data';

function Carousel() {
	const [current, setCurrent] = useState(0);
	const slideRight = () => {
		setCurrent(current === cities.length - 1 ? 0 : current + 1);
	};
	const slideLeft = () => {
		setCurrent(current === 0 ? cities.length - 1 : current - 1);
	};
	return (
		<>
			<div className='top-content'>
				<h2>Carousel</h2>
			</div>
			<div className='carousel' data-testid='carousel'>
				<div className='carousel-wrapper'>
					{
						cities.map(({ image, title }, index) => {
							return (
								<div key={index} className={`carousel-card ${index === current ? 'active' : ''}`}>
									<img className='card-image' src={image} alt={title} />
									<div className='card-overlay'>
										<h2 className='card-title'>{title}</h2>
									</div>
								</div>
							);
						})
					}
					<div data-testid='carousel-arrow-left' className='carousel-arrow-left' onClick={slideLeft}>&lsaquo;</div>
					<div data-testid='carousel-arrow-right' className='carousel-arrow-right' onClick={slideRight}>&rsaquo;</div>
				</div>
			</div>
		</>
	)
}

export default Carousel
