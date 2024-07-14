"use client";
import React, { useState, useEffect } from "react";
import { getExperts } from "@/services/authService";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const [inquiry, setInquiry] = useState(false);
  const [experts, setExperts] = useState([]);

  async function getAllExperts() {
    await getExperts()
      .then((response) => {
        setExperts(response.data.experts);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAllExperts();
  }, []);

  return (
    <>
      <body className='font-body'>
        <section className='bg-white mb-20 md:mb-52 xl:mb-72'>
          <div className='container max-w-screen-xl mx-auto px-4'>
            <nav
              className='flex-wrap lg:flex items-center py-14 xl:relative z-10'
              x-data='{navbarOpen:false}'>
              <div className='flex items-center justify-between mb-10 lg:mb-0'>
                <img
                  src='/image/navbar-logo.png'
                  alt='Logo img'
                  className='w-52 md:w-80 lg:w-full'
                />

                <button className='lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-green-700 border border-green-700 rounded-md'>
                  <i data-feather='menu'></i>
                </button>
              </div>

              <ul
                className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16`}>
                <li className='font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0'>
                  <a href='#'>Landing</a>
                </li>

                <li className='font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0'>
                  <a href='#'>Pages</a>
                </li>

                <li className='font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0'>
                  <a href='#'>Contact</a>
                </li>

                <li className='font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0'>
                  <a href='#'>About</a>
                </li>
              </ul>

              <button className='px-5 py-3 lg:block border-2 border-green-700 rounded-lg font-semibold text-green-700 text-lg hover:bg-greenhover:text-white transition ease-linear duration-500'>
                Request quote
              </button>
            </nav>

            <div className='flex items-center justify-center xl:justify-end'>
              <div className='mt-28 text-center xl:text-left'>
                <h1 className='font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6'>
                  Get your dream <br /> house now
                </h1>

                <p className='font-normal text-xl text-gray-400 leading-relaxed mb-12'>
                  Having a sweet home is everyone's dream. Have you <br /> owned
                  your dream house?
                </p>

                <button className='px-6 py-4 bg-green text-white font-semibold text-lg rounded-xl hover:bg-green transition ease-in-out duration-500'>
                  Contact us
                </button>
              </div>

              <div className='hidden xl:block xl:absolute z-0 top-0 right-0'>
                <img src='/image/home-img.png' alt='Home img' />
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white py-10 md:py-16 xl:relative'>
          <div className='container max-w-screen-xl mx-auto px-4'>
            <div className='flex flex-col xl:flex-row justify-end'>
              <div className='hidden xl:block xl:absolute left-0 bottom-0 w-full'>
                <img src='/image/feature-img.png' alt='Feature img' />
              </div>

              <div className=''>
                <h1 className='font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6'>
                  Choice of various types of <br /> house
                </h1>

                <p className='font-normal text-gray-400 text-md md:text-xl text-center mb-16'>
                  We provide a wide of selection of home types for you and your{" "}
                  <br /> family and are free to choose a home model
                </p>

                <div className='flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20'>
                  <div className='px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0'>
                    <i
                      data-feather='check-circle'
                      className=' text-green-900'></i>
                  </div>

                  <div className='text-center md:text-left'>
                    <h4 className='font-semibold text-gray-900 text-2xl mb-2'>
                      Best Home Guarantee
                    </h4>
                    <p className='font-normal text-gray-400 text-xl leading-relaxed'>
                      We guarantees the quality of your home you bought <br />{" "}
                      from D’house
                    </p>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20'>
                  <div className='px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0'>
                    <i data-feather='lock' className=' text-green-900'></i>
                  </div>

                  <div className='text-center md:text-left'>
                    <h4 className='font-semibold text-gray-900 text-2xl mb-2'>
                      Safe Transaction
                    </h4>
                    <p className='font-normal text-gray-400 text-xl leading-relaxed'>
                      Your transactions will always be kept confidential <br />{" "}
                      and will get discounted
                    </p>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center xl:justify-start space-x-4'>
                  <div className='px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0'>
                    <i
                      data-feather='credit-card'
                      className=' text-green-900'></i>
                  </div>

                  <div className='text-center md:text-left'>
                    <h4 className='font-semibold text-gray-900 text-2xl mb-2'>
                      Low and Cost Home Taxes
                    </h4>
                    <p className='font-normal text-gray-400 text-xl leading-relaxed'>
                      By buying a house from D’house, you will get a tax <br />{" "}
                      discount
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white py-10 md:py-16'>
          <div className='container max-w-screen-xl mx-auto px-4'>
            <h1 className='font-semibold text-gray-900 text-4xl text-center mb-10'>
              Our Gallery
            </h1>

            <div className='hidden md:block flex items-center text-center space-x-10 lg:space-x-20 mb-12'>
              <a
                href='#'
                className='px-6 py-2 bg-green text-white font-semibold text-xl rounded-lg hover:bg-green transition ease-in-out duration-500'>
                All
              </a>
              <a
                href='#'
                className='px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500'>
                Exterior
              </a>
              <a
                href='#'
                className='px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500'>
                Interior
              </a>
              <a
                href='#'
                className='px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500'>
                Building
              </a>
            </div>

            <div className='flex space-x-4 md:space-x-6 lg:space-x-8'>
              <div>
                <img
                  src='/image/gallery-1.png'
                  alt='image'
                  className='mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500'
                />
                <img
                  src='/image/gallery-4.png'
                  alt='image'
                  className='hover:opacity-75 transition ease-in-out duration-500'
                />
              </div>

              <div>
                <img
                  src='/image/gallery-2.png'
                  alt='image'
                  className='mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500'
                />
                <img
                  src='/image/gallery-5.png'
                  alt='image'
                  className='mb-3 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500'
                />
                <img
                  src='/image/gallery-6.png'
                  alt='image'
                  className='hover:opacity-75 transition ease-in-out duration-500'
                />
              </div>

              <div>
                <img
                  src='/image/gallery-3.png'
                  alt='image'
                  className='mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500'
                />
                <img
                  src='/image/gallery-7.png'
                  alt='image'
                  className='hover:opacity-75 transition ease-in-out duration-500'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white py-10 md:py-16'>
          <div className='container max-w-screen-xl mx-auto px-4 xl:relative'>
            <p className='font-normal text-gray-400 text-lg md:text-xl text-center uppercase mb-6'>
              Testimonial
            </p>

            <h1 className='font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14'>
              What People Say <br /> About D’house
            </h1>

            <div className='hidden xl:block xl:absolute top-0'>
              <img src='/image/testimoni-1.png' alt='Image' />
            </div>

            <div className='hidden xl:block xl:absolute top-32'>
              <img src='/image/testimoni-2.png' alt='Image' />
            </div>

            <div className='flex flex-col md:flex-row md:items-center justify-center md:space-x-8 lg:space-x-12 mb-10 md:mb-20'>
              <div className='bg-gray-100 rounded-lg mb-10 md:mb-0'>
                <img
                  src='/image/testimoni-3.png'
                  alt='Image'
                  className='mx-8 my-8'
                />

                <div className='flex items-center gap-5 mx-8'>
                  <i data-feather='star' className='text-yellow-500'></i>
                  <i data-feather='star' className='text-yellow-500'></i>
                  <i data-feather='star' className='text-yellow-500'></i>
                  <i data-feather='star' className='text-yellow-500'></i>
                  <i data-feather='star' className='text-yellow-500'></i>
                </div>

                <p className='font-normal text-sm lg:text-md text-gray-400 mx-8 my-8'>
                  I recommend anyone to buy house on <br /> D’house. I received
                  great customer service <br /> from the specialists who helped
                  me.
                </p>

                <h3 className='font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8'>
                  Brooklyn Simmons
                </h3>
              </div>

              <div className='bg-gray-100 rounded-lg'>
                <img
                  src='/image/testimoni-4.png'
                  alt='Image'
                  className='mx-8 my-8'
                />

                <div className='flex items-center gap-5 mx-8'>
                  <i data-feather='star' className='text-yellow-500'></i>
                  <i data-feather='star' className='text-yellow-500'></i>
                  <i data-feather='star' className='text-yellow-500'></i>
                  <i data-feather='star' className='text-yellow-500'></i>
                  <i data-feather='star' className='text-yellow-500'></i>
                </div>

                <p className='font-normal text-sm lg:text-md text-gray-400 mx-8 my-8'>
                  D’house is the best property agent in the <br /> world. I
                  received great customer service <br /> from the D’house agent
                </p>

                <h3 className='font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8'>
                  Ralph Edwards
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white py-10 md:py-16'>
          <div className='container max-w-screen-xl mx-auto px-4 xl:relative'>
            <div className='bg-green flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl'>
              <div className='text-center lg:text-left mb-10 lg:mb-0'>
                <h1 className='font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4'>
                  Talk to us <br /> to discuss
                </h1>

                <p className='font-normal text-white text-md md:text-xl'>
                  Need more time to discuss? Won’t worry, we are <br /> ready to
                  help you. You can fill in the column on the <br /> right to
                  book a meeting with us. Totally free.
                </p>
              </div>

              <div className='hidden xl:block xl:absolute right-0'>
                <img src='/image/book.png' alt='Image' />
              </div>

              <div className='hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl'>
                <div className='py-3'>
                  <h3 className='font-semibold text-gray-900 text-3xl'>
                    Book a meeting
                  </h3>
                </div>

                <div className='py-3'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none'
                  />
                </div>

                <div className='py-3'>
                  <input
                    type='text'
                    placeholder='Email'
                    className='px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none'
                  />
                </div>

                <div className='py-3 relative'>
                  <input
                    type='text'
                    placeholder='Date'
                    className='px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none'
                  />

                  <div className='absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600'>
                    <i data-feather='calendar'></i>
                  </div>
                </div>

                <div className='py-3 relative'>
                  <input
                    type='text'
                    placeholder='Virtual Meeting'
                    className='px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none'
                  />

                  <div className='absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600'>
                    <i data-feather='chevron-down'></i>
                  </div>
                </div>

                <div className='py-3'>
                  <button className='w-full py-4 font-semibold text-lg text-white bg-green rounded-xl hover:bg-green transition ease-in-out duration-500'>
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className='bg-white py-10 md:py-16'>
          <div className='container max-w-screen-xl mx-auto px-4'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <div className='text-center lg:text-left mb-10 lg:mb-0'>
                <div className='flex justify-center lg:justify-start mb-5'>
                  <img src='/image/footer-logo.png' alt='Image' />
                </div>

                <p className='font-light text-gray-400 text-xl mb-10'>
                  Get your dream house with <br /> D’house
                </p>

                <div className='flex items-center justify-center lg:justify-start space-x-5'>
                  <a
                    href='#'
                    className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-green hover:text-white transition ease-in-out duration-500'>
                    <i data-feather='facebook'></i>
                  </a>

                  <a
                    href='#'
                    className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-green hover:text-white transition ease-in-out duration-500'>
                    <i data-feather='twitter'></i>
                  </a>

                  <a
                    href='#'
                    className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-green hover:text-white transition ease-in-out duration-500'>
                    <i data-feather='linkedin'></i>
                  </a>
                </div>
              </div>

              <div className='text-center lg:text-left mb-10 lg:mb-0'>
                <h4 className='font-semibold text-gray-900 text-2xl mb-6'>
                  Sitemap
                </h4>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Home
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Features
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Gallery
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Testimoni
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Book a meeting
                </a>
              </div>

              <div className='text-center lg:text-left mb-10 lg:mb-0'>
                <h4 className='font-semibold text-gray-900 text-2xl mb-6'>
                  Landing
                </h4>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Mobile App
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Property
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Personal Website
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Web Developer
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Online Course
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Donation
                </a>
              </div>

              <div className='text-center lg:text-left'>
                <h4 className='font-semibold text-gray-900 text-2xl mb-6'>
                  Utility
                </h4>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  FAQ
                </a>

                <a
                  href='#'
                  className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'>
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </footer>

        <script>feather.replace()</script>
      </body>
    </>
  );
}
