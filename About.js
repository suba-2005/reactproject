import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

const About=()=>{

    useEffect(()=>{
        window.scrollTo(0,0);
    });
    return<>
    <Header />
    <main class="main" id="main">
      <section
        class="section about-hero"
        style={{backgroundImage: 'url(./media/bg-about.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">About Us</h1>
      </section>

      <section class="section about container">
        <div class="about__container">
          <img class="about__img" src="./media/about-image.jpg" alt="" />

          <div class="about__data">
            <h3 class="about__data-title">Travlr</h3>
            <p class="about__data-description">
             Plan your dream vacation effortlessly with TripEase! Discover diverse destinations, create personalized itineraries, and book accommodations and activities seamlessly. Access expert travel tips, manage your budget, and share experiences within our vibrant travel community. Let TripEase be your go-to platform for crafting unforgettable journeys!
            </p>
            <p class="about__data-description">
              Consulting represents success at realizing the company is going in
              the wrong direction. The only time the company fails is when it is
              not possible to do a turnaround anymore. We help companies
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
}
export default About;