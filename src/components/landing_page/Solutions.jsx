const passengerSolutions = [
  {
    id: 1,
    title: 'Cashless Payments',
    description:
      'Facilitates seamless, secure, and convenient transactions for passengers.',
    icon: 'icons/cashless.png',
  },
  {
    id: 2,
    title: 'Plan ahead',
    description:
      'Enables passengers to schedule their trips in advance, ensuring timely arrivals and departures.',
    icon: 'icons/schedule.png',
  },
  {
    id: 3,
    title: 'Great discounts',
    description:
      'Offers attractive discounts and deals to passengers, enhancing affordability and encouraging repeat usage.',
    icon: 'icons/discount.png',
  },
];

const businessSolutions = [
  {
    id: 1,
    title: 'Revenue data analysis',
    description:
      'Provides comprehensive insights into revenue streams, helping businesses make informed decisions. Tracks payment trends and customer spending patterns. Generates reports for financial analysis and forecasting.',
    icon: 'icons/dataanalysis.png',
  },
  {
    id: 2,
    title: 'Easy management of day to day operations',
    description:
      'Simplifies the management of daily tasks and activities, improving efficiency and productivity. Manages vehicle fleets, schedules, and driver assignments. Automates administrative processes like invoicing and payroll. Monitors performance metrics for optimization opportunities.',
    icon: 'icons/management.png',
  },
  {
    id: 3,
    title: 'Real-time Vehicle Tracking',
    description:
      'Enables real-time tracking of vehicles, improving operational efficiency and safety.Integrates GPS technology for accurate vehicle tracking. Optimizes routes based on real-time traffic and road conditions.',
    icon: 'icons/tracking.png',
  },
  {
    id: 4,
    title: 'Enhanced Customer Support',
    description:
      'Provides improved customer support services, enhancing passenger experience and satisfaction.',
    icon: 'icons/support.png',
  },
  {
    id: 5,
    title: 'Marketing and Promotions',
    description:
      'Facilitates marketing campaigns and promotions to attract and retain customers. Creates and manages promotional offers and discounts. Utilizes data analytics for targeted marketing strategies.',
    icon: 'icons/promotion.png',
  },
  {
    id: 6,
    title: 'Supply Chain Optimization',
    description:
      'Optimizes supply chain processes to ensure efficient inventory management and logistics.Tracks inventory levels and facilitates inventory replenishment. Optimizes logistics routes and transportation modes for cost savings.',
    icon: 'icons/inventory.png',
  },
];

const Solutions = () => {
  return (
    <div
      className="min-h-screen flex flex-col gap-16 lg:pt-40 pt-10 lg:px-16 px-8 pb-10"
      id="solutions"
    >
      <h1 className="text-4xl  font-bold text-primary">
        How we make it easier.
      </h1>

      <div className="">
        <h5 className="text-xl text-tertiary font-bold">For passengers</h5>
        <div className="grid lg:grid-cols-3 gap-5 mt-6">
          {passengerSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className="flex flex-col gap-4 justify-center"
            >
              <div className="bg-secondary w-48 flex justify-center items-center p-5 rounded">
                <img src={solution.icon} className="w-16" />
              </div>
              <h5 className="font-semibold flex gap-3">
                <span className="font-bold text-primary ">0{index + 1}</span>
                <span className="">{solution.title}</span>
              </h5>
              <p className="lg:w-3/4 text-sm leading-7">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h5 className="text-xl text-tertiary font-bold">For businesses</h5>
        <div className="grid lg:grid-cols-3 gap-x-5 gap-y-8 mt-8">
          {businessSolutions.map((solution, index) => (
            <div key={solution.id} className="flex flex-col gap-4">
              <div className="bg-secondary w-48 flex justify-center items-center p-5 rounded">
                <img src={solution.icon} className="w-16" />
              </div>
              <h5 className="font-semibold flex gap-3">
                <span className="font-bold text-primary ">0{index + 1}</span>
                <span className="">{solution.title}</span>
              </h5>
              <p className="lg:w-3/4 text-sm leading-7">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
