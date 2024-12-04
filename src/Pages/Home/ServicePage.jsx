import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Crafting responsive websites with cutting-edge technologies.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Creating stunning visuals for your brand and projects.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Helping your business grow through strategic campaigns.",
    icon: "📢",
  },
];

const ServicePage = () => {
  return (
    <section className="containe justify-center pt-10 pb-10 capitalize font-medium text-black">
      <div className="max-w-1200px text-center">
        <h1 className="text-4xl font-medium capitalize text-black mb-8">Our Services</h1>
        <div className="flex flex-wrap gap-20 justify-center">
          {services.map((service) => (
            <div key={service.id} className="card bg-white border-gray-200 border-2 p-4 w-96">
              <span className=" icon text-lg mb-10">{service.icon}</span>
              <h2 className="cardTitle text-lg mb-10 text-black">{service.title}</h2>
              <p className="cardDescription text-base text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicePage;
