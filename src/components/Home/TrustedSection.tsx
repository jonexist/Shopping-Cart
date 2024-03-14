type TrustedSectionProps = {
  data: {
    title: string;
    value: number;
  }[];
};

export const TrustedSection = ({ data }: TrustedSectionProps) => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            Trusted by eCommerce Businesses
          </h2>

          <p className='mt-4 text-gray-600 sm:text-xl'>
            At PanicShop, we've earned the trust of ecommerce businesses through
            our unwavering commitment to security, seamless integration,
            reliable support, data-driven insights, and scalable solutions. With
            our robust platform and dedicated team, businesses can confidently
            navigate the digital marketplace, knowing that they have a trusted
            partner by their side every step of the way.
          </p>
        </div>

        <div className='mt-8 sm:mt-12'>
          <dl className='grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100'>
            {data.map((item, index) => (
              <div key={index} className='flex flex-col px-4 py-8 text-center'>
                <dt className='order-last text-lg font-medium text-gray-500'>
                  {item.title}
                </dt>
                <dd className='text-4xl font-extrabold text-secondary md:text-5xl'>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
