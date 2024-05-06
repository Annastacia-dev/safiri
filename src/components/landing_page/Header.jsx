import { FaWifi } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 justify-center gap-4 lg:pt-32 lg:px-16">
        <div className="flex flex-col gap-8 mt-10">
          <h1 className="lg:text-6xl  font-bold text-primary">
            Travel easy
            <br />
            Go cashless
          </h1>
          <p className="lg:w-3/4 leading-7 text-sm font-medium">
            Whether you&apos;re commuting daily or exploring destinations enjoy
            seamless, hassle-free payments across various modes of
            transportation, including buses, trains, taxis & more.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded capitalize font-semibold w-1/2">
            <a href="/signup">get started</a>
          </button>
        </div>
        <div className="relative">
          <img src="images/illustration.png" className="" alt="" />
          <div className="bg-primary/70 text-white flex flex-col justify-center items-center w-48 rounded p-5 absolute top-20 -left-20 font-semibold gap-2">
            <div className="bg-white/40 text-primary text-xl p-3 rounded-full flex justify-center items-center">
              <FaWifi />
            </div>
            <p className="text-sm ">Pay Kshs.50 to Zuri </p>
            <button className="bg-secondary px-3 py-2 w-full rounded mt-2">
              Pay
            </button>
          </div>
          <div className="bg-secondary/70 flex flex-col justify-center items-center w-48 rounded p-5 absolute bottom-0 right-0 font-semibold gap-2">
            <img src="logos/primary.png" className="w-16" />
            <p className="text-sm ">
              You have earned a <b>FREE</b> ride today.
              <br />
              Thank you for being a loyal customer
            </p>
            <button className="bg-primary text-white px-3 py-2 w-full rounded mt-2">
              <b>CODE: FXCV45</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
