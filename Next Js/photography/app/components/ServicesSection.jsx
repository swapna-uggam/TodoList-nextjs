

'use client';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      title: 'Indoor Studio Shoot',
      description: 'Perfect lighting and backdrops in our professional studio.',
      image: '/studio.jpg',
    },
    {
      title: 'Outdoor Maternity Shoot',
      description: 'Natural settings to capture your glow.',
      image: '/pin3.jpg',
    },
    {
      title: 'Home Sessions',
      description: 'Comfort of your own space with our mobile setup.',
      image: '/pin10.jpg',
    },
    {
      title: 'Family Involvement',
      description: 'Include your partner and kids for a full-family memory.',
      image: '/pin8.jpg',
    },
    {
      title: 'Ethnic Theme Shoots',
      description: 'Celebrate culture with traditional attire and styling.',
      image: '/pin6.jpg',
    },
    {
      title: 'Black & White Portraits',
      description: 'Timeless and elegant monochrome captures.',
      image: '/pin7.jpg',
    },
    {
      title: 'Creative Concept Shoots',
      description: 'Artistic expressions of your maternity journey.',
      image: '/pin2.jpg',
    },
    {
      title: 'Couple Maternity Sessions',
      description: 'Cherish the bond through romantic frames.',
      image: '/pin1.jpg',
    },
  ];

  return (
    <section id="services" className="py-8 md:py-24 bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Our Maternity Photography Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a variety of photography styles tailored to your comfort and preferences.
          </p>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-36 sm:h-40 md:h-44 lg:h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"/>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-black mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
