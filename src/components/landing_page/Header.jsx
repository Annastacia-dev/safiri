import { FaWifi } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 justify-center gap-4 lg:pt-32 pt-20 lg:px-16 px-8">
        <div className="flex flex-col gap-8 mt-10">
          <h1 className="lg:text-6xl text-4xl lg:w-3/4 font-bold text-primary">
            Go cashless, travel easy
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
          <img
            src="images/illustration.png"
            alt="an illustration of two people on a train, the man is sitting down on their phone and a girl standing holding on to the pole listening to music"
          />
          <div className="bg-primary/70 text-white flex flex-col justify-center items-center w-48 rounded p-5 lg:absolute lg:top-20 lg:-left-20 font-semibold gap-2">
            <div className="bg-white/40 text-primary text-xl p-3 rounded-full flex justify-center items-center">
              <FaWifi />
            </div>
            <p className="text-sm ">Pay Kshs.50 to Zuri </p>
            <button className="bg-secondary px-3 py-2 w-full rounded mt-2">
              Pay
            </button>
          </div>
          <div className="bg-secondary/70 flex flex-col justify-center items-center lg:w-96 w-72 rounded p-5 lg:absolute lg:-bottom-20 lg:-right-10 font-semibold gap-5 lg:mt-0 mt-4 lg:ml-0 ml-10">
            <img src="logos/primary.png" className="w-16" />
            <p className="text-sm">
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
