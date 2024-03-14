export const AboutSection = () => {
  return (
    <section>
      <div className='py-16 bg-white'>
        <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
          <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
            <div className='md:5/12 lg:w-5/12'>
              <img
                src='https://tailus.io/sources/blocks/left-image/preview/images/startup.png'
                alt='image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='md:7/12 lg:w-6/12'>
              <h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>
                PANICSHOP - The Future of Online Shopping
              </h2>
              <p className='mt-6 text-gray-600 text-justify sm:text-xl'>
                Welcome to PANICSHOP, the ultimate destination for all your
                online shopping needs! Powered by the FakeStore API, we bring
                you a seamless and secure ecommerce experience like never
                before. Whether you're browsing for the latest fashion trends,
                searching for gadgets to elevate your tech game, or hunting for
                home essentials, we've got you covered. With a wide range of
                products from various categories, competitive prices, and
                reliable shipping, shopping with us is a breeze. Say goodbye to
                endless scrolling and hello to effortless shopping. Discover
                convenience, reliability, and endless possibilities with
                PANICSHOP today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
