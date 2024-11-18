import "../style/hero.css";
import Image from "next/image";

function Hero() {
    return (
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                    <Image
                        src={"/images/profileimage.jpg"}
                        width={200}
                        height={200}
                        className="header-image"
                        alt="profile"
                    />
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-head">
                        Hi I&apos;M Areeba <br />
                        Front-end Developer
                    </h1>
                    <p className="des-hero">
                        Hi, I&apos;m Areeba, a passionate web developer dedicated to crafting
                        interactive and user-friendly websites.
                    </p>
                    <button className="hero-btn">HIRE ME</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
