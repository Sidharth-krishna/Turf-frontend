// Import React and any other necessary dependencies
import React from 'react';

// Create the AboutSection component
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container mt-5 ">
        <h2>About Our Turf Booking Service</h2>
        <p>
          Welcome to our turf booking platform! We provide a convenient way for sports enthusiasts to book turfs and engage in their favorite activities.
        </p>
        <p>
          Whether you're into soccer, cricket, or any other sports, our platform allows you to find and book turfs near you with ease. Enjoy a hassle-free experience and focus on your game while we take care of the booking process.
        </p>
        <p>
          Features:
        </p>
        <ul>
          <li>Search and browse turfs based on location and availability.</li>
          <li>Secure and easy booking process.</li>
          <li>Real-time availability updates.</li>
          <li>Flexible booking options to fit your schedule.</li>
        </ul>
        <p>
          Join our community of sports enthusiasts and make the most of your playing time. Book your turf now and experience the joy of sports with us!
        </p>
      </div>
    </section>
  );
};

// Export the AboutSection component
export default AboutSection;
