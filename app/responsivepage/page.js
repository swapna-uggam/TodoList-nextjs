import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Our Site</title>
        <meta name="description" content="Build beautiful interfaces with Next.js and Tailwind CSS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        aria-label="Welcome section"
        className="min-h-screen w-full flex items-center justify-center text-white bg-[url('/hero-bg.jpg')] bg-cover bg-center"
      >
        <div className="text-center bg-black/60 p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Site
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Build beautiful interfaces with Next.js and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#learn-more"
              className="bg-blue-600 hover:bg-blue-800 transition-colors px-6 py-3 rounded-lg font-semibold"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="text-blue-300 border border-blue-300 hover:text-white hover:bg-blue-600 transition-all px-6 py-3 rounded-lg font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Example Anchor Sections */}
      <section id="learn-more" className="min-h-screen bg-white text-black p-10">
        <h2 className="text-3xl font-bold mb-4">Learn More</h2>
        <p>Here you can add more information about your service or product.</p>
      </section>

      <section id="contact" className="min-h-screen bg-gray-100 text-black p-10">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>Drop us a line via email or fill out a form here.</p>
      </section>
    </>
  );
}
