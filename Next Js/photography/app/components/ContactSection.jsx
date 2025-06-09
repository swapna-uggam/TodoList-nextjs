
'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
} from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white mt-7 py-14 px-4">
      {/* Section: Connect With Us */}
      <div className="text-center mb-12 border-b border-gray-300 dark:border-gray-700 pb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Connect With Us</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-pink-500 text-xl">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
            <FaYoutube />
          </Link>
          <Link href="https://wa.me/447933223422" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp />
          </Link>
          <Link href="https://business.google.com" target="_blank" aria-label="Google Business">
            <FaGoogle />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </Link>
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Follow us for updates and news</p>
      </div>

      {/* Section: Direct Contact */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">Prefer Direct Contact?</h3>
        <p className="mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          We're always available for a friendly chat – reach out anytime, day or night!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/447933223422"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp Us
          </Link>

          {/* Call Button */}
          <Link
            href="tel:+447933223422"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <FaPhoneAlt className="text-sm" />
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}
