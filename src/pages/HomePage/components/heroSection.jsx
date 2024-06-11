import "./styles/hero_section.css";

function HeroSection() {
    return (
        <div className="hero_section">
            <div className="hero_info">
                <button className="hero_button">Full Stack Developer</button>
                <h1>
                    Welcome To My Portfolio Website
                </h1>
                <h3>I am a Full Stack Developer as well as a 3d Artist</h3>
                <button className="hero_button">Learn More</button>
            </div>
            <div className="hero_model"></div>

        </div>
    );
}

export default HeroSection;
