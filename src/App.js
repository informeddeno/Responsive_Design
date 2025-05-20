import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
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
            image="https://media.istockphoto.com/id/1157159143/photo/wheel-of-the-electric-bicycle-front-view-e-bike-motor-with-light-reflections-close-up.jpg?s=1024x1024&w=is&k=20&c=ewGRbKlEcnnAFfIq0JxK6BaRI6vQDUl6fxfdKENWdUs="
          />
          <Card
            title="Rear-Wheel Conversion Kit"
            description="Experience superior traction and power with our rear-wheel e-bike kit."
            image="https://media.istockphoto.com/id/2152143391/photo/electric-motor-and-gears-on-rear-e-bike-hub-close-up.jpg?s=1024x1024&w=is&k=20&c=1AaPxatvVA-KiehToQ01Bzk29zKUNT74aPNP6S_gYqU="
          />
          <Card
            title="Mid-Drive Conversion Kit"
            description="Optimal weight distribution and performance for all terrains."
            image="https://media.istockphoto.com/id/1416880845/photo/electric-mountain-bike-is-charging-with-the-plug-inserted-to-recharge-the-battery.jpg?s=1024x1024&w=is&k=20&c=H4JPirR6ZZ2aRroEj5iizV5FIXarMGTdNXlFWnI6sD8="
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
