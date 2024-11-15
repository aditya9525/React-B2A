import './Hero.css'

const Hero = () => {
    return (
        <div className="hero container">
            <div className="left-hero">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>

                <div className="shoping">
                    <p>Also Available on</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="" />
                        <img src="/images/flipkart.png" alt="" />
                    </div>
                </div>

            </div>
            <div className="right-hero">
            <img src="../../public/images/shoe_image.png" alt="" />
            </div>

        </div>
    )
}

export default Hero
