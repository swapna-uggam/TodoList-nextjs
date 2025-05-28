export default function Features() {
  const features = [
    { title: 'Fast Setup', desc: 'Get started in minutes with our intuitive onboarding.' },
    { title: 'Secure', desc: 'Built with industry-standard security practices.' },
    { title: 'Support', desc: '24/7 customer support to help you anytime.' },
  ];

  return (
    <section className="py-16 bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
      <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6 rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white">
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
