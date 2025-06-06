import React from "react";
import Card from "../components/Card";

const Home = () => (

<main className="flex-1 p-6 bg-gray-100">
    <h1 className="text-center text-3xl font-bold text-primary mb-6">
      E-Bike Conversion Kits
    </h1>
    <p className="text-center text-gray-700 mb-10">
      Transform your regular bike into a powerful e-bike with our easy-to-install conversion kits.
    </p>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Front-Wheel Conversion Kit"
        description="Quick and easy installation with a durable motor for front-wheel drive."
        image="https://img.freepik.com/premium-photo/axle-front-bicycle-wheel-closeup_389554-664.jpg?uid=R201118973&ga=GA1.1.1372238407.1747751594&semt=ais_hybrid&w=740"
      />
      <Card
        title="Rear-Wheel Conversion Kit"
        description="Experience superior traction and power with our rear-wheel e-bike kit."
        image="https://images.pexels.com/photos/19241605/pexels-photo-19241605/free-photo-of-close-up-of-a-bicycle-wheel.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Card
        title="Mid-Drive Conversion Kit"
        description="Optimal weight distribution and performance for all terrains."
        image="https://images.pexels.com/photos/19423654/pexels-photo-19423654/free-photo-of-close-up-of-bicycle.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </section>
  </main>
);

export default Home;
