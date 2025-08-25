import React from "react";

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const Services = () => {
  const services = [
    {
      title: "Accounting",
      description:
        "Professional bookkeeping, tax filing, and financial reporting services to keep your business compliant and profitable.",
      image: "/images/service1.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/6571598b987ad31d4ca923ea_clinic.svg",
      link: "/services/accounting",
    },
    {
      title: "Stationary",
      description:
        "High-quality office stationery, supplies, and custom printing to keep your workplace organized and efficient.",
      image: "/images/service2.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/6571597682dfecc9c1dbcf86_dental-implant.svg",
      link: "/services/stationary",
    },
    {
      title: "Fire and Safety Maintenance",
      description:
        "Comprehensive inspection and maintenance of fire alarms, extinguishers, and safety systems for full compliance.",
      image: "/images/service3.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715cedc41731789d25f9e6_periodontal-scaler.svg",
      link: "/services/fire-and-safety-maintenance",
    },
    {
      title: "Events and Collaborations",
      description:
        "Organizing and managing professional events, partnerships, and corporate collaborations with precision.",
      image: "/images/service4.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715cc017defee615ed9a65_root-canal.svg",
      link: "/services/events-and-collaborations",
    },
    {
      title: "Flats on Rent",
      description:
        "Helping you find affordable, fully verified rental flats in prime locations with flexible lease terms.",
      image: "/images/service5.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715c8219f5eea4b0665af4_dental-care.svg",
      link: "/services/flats-on-rent",
    },
    {
      title: "Printing",
      description:
        "High-resolution printing for marketing materials, business documents, and promotional items at competitive rates.",
      image: "/images/service6.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715d559da5271e8990bc41_happy-tooth.svg",
      link: "/services/printing",
    },
    {
      title: "Cakes, Flowers and Decorations",
      description:
        "Customized cakes, floral arrangements, and event decorations to make every celebration special.",
      image: "/images/service7.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715d559da5271e8990bc41_happy-tooth.svg",
      link: "/services/cakes-flowers-and-decorations",
    },
    {
      title: "Pantry Services and Products",
      description:
        "Supplying pantry essentials, beverages, and snacks for offices and events with regular restocking services.",
      image: "/images/service8.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715d559da5271e8990bc41_happy-tooth.svg",
      link: "/services/pantry-services-and-products",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your brand with SEO, social media marketing, PPC ads, and content strategies tailored to your goals.",
      image: "/images/service9.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715d559da5271e8990bc41_happy-tooth.svg",
      link: "/services/digital-marketing",
    },
    {
      title: "Web/App Development Services",
      description:
        "Custom website and mobile application development using modern technologies to meet your business needs.",
      image: "/images/service10.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715d559da5271e8990bc41_happy-tooth.svg",
      link: "/services/web/app-development-services",
    },
    {
      title: "Hoardings/ Advertising Screens/ Digital Media",
      description:
        "Outdoor and digital advertising solutions including hoardings, LED screens, and media campaigns.",
      image: "/images/service11.jpg",
      icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715d559da5271e8990bc41_happy-tooth.svg",
      link: "/services/hoardings/advertising-screens/digital-media",
    },
  ];

  return (
    <section>
      <div className="section-gap">
        <div className="w-layout-blockcontainer container w-container">
          {/* Eyebrow */}
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium tracking-widest text-gray-600 uppercase">
              Our Services
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl jost-font font-bold text-[#0d072c] leading-tight text-center mb-10">
            Dentistry for the whole <br /> Family
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      {/* <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"> */}
        
              <a
                key={index}
                href={service.link}
                className="group flex flex-col bg-white rounded-2xl shadow-md overflow-hidden h-full transition-transform duration-200 hover:-translate-y-1 items-center justify-center text-center p-6">
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-4xl md:text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
              
                {/* Image with fixed aspect ratio */}
                <div className="relative w-full aspect-[16/9]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Icon circle (kept simple) */}
                <div className="flex justify-center -mt-8">
                  <div className="h-16 w-16 rounded-full bg-indigo-300/70 backdrop-blur flex items-center justify-center shadow">
                    <img
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      className="h-7 w-7"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 pt-4 flex flex-col items-center text-center gap-3 grow">
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <div className="h-[1px] w-12 bg-gray-200" />
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </a>

               {/* </span> */}
    </NeonGradientCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
