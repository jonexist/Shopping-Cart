type ReviewSectionProps = {
  review: {
    id: number;
    name: string;
    review: string;
    rating: number;
  }[];
};

export const ReviewSection = ({ review }: ReviewSectionProps) => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <h2 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Read trusted reviews from our customers
        </h2>

        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
          {review.map((item) => (
            <blockquote
              key={item.id}
              className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'
            >
              <div className='flex items-center gap-4'>
                <img
                  alt=''
                  src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                  className='size-14 rounded-full object-cover'
                />
                <div className='rating'>
                  {[...Array(item.rating)].map((_, index) => (
                    <input
                      key={index}
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                      disabled
                    />
                  ))}
                </div>
              </div>
              <span className='text-xl font-medium italic'>{item.name}</span>
              <p className='mt-4 text-gray-600'>{item.review}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
