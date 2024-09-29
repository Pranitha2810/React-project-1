const HeroSection = ( ) =>{
    return <main className="hero container">
        <div className="Hero-content">
            <h1>YOUR FEET DESERVETHE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="Hero-btn">
                <button>Shop Now</button>
                <button className="Secondary-btn">Category</button>
            </div>
            <div className="Shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/images/flipkart.png" alt="flipkart" />
                    <img src="/images/amazon.png" alt="amazon" />
                </div>
            </div>
        </div>
        <div className="Hero-image">
            <img src="/images/hero_image.png" alt="shoe" />
        </div>
    </main>;
};
export default HeroSection;