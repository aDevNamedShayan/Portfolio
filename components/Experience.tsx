const Experience = () => {
  return (
    <div id='testimonials' className='py-20'>
      <h1 className='heading'>
        My {' '}
        <span className='text-purple'>work experiece</span>
      </h1>

      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          
        ))}
      </div>
    </div>
  )
}

export default Experience