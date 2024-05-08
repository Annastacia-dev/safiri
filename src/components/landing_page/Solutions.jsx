const passengerSolutions =[
  {
    id: 1,
    title: 'Cashless Payments'
  },
  {
    id: 2,
    title: 'Plan ahead'
  },
  {
    id: 3,
    title: 'Great discounts'
  }
]

const businessSolutions = [
  {
    id: 1,
    title: 'Revenue data analysis'
  },
  {
    id: 2,
    title: 'Easy management of day to day operations'
  },
]



const Solutions = () => {

  console.log(passengerSolutions, businessSolutions)

  return (
  <div className="min-h-screen flex flex-col gap-16 lg:pt-24 pt-10 lg:px-16 px-8" id="solutions">
    <h1 className="text-4xl  font-bold text-primary">
      How we make it easier.
    </h1>

    <div className="">
      <h5 className="text-xl text-tertiary font-bold">For passengers</h5>

    </div>

    <div className="">
      <h5 className="text-xl text-tertiary font-bold">For businesses</h5>

    </div>

  </div>
  );
};

export default Solutions;
