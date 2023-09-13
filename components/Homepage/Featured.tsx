const Featured = () => {
  return (
    <section className='bg-white-900 dark:bg-gray-900'>
      <h2>
        Feature
        <div className='relative w-fit'>
          <div className='relative z-10'>Projects</div>
          <div className='absolute bottom-0.5 z-0 h-6 w-full bg-accent' />
        </div>
      </h2>
    </section>
  );
};

export default Featured;
