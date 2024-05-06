import { IoCloseSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

const MobileNavbar = ({ isOpen, toggle }) => {
  return (
    isOpen && (
      <ul className="flex-col flex fixed inset-0 left-1/4 bg-primary gap-8 items-center pt-28 px-10  text-white  font-medium  text-sm">
        <div className="absolute right-16 top-10">
          <IoCloseSharp className="text-xl" onClick={toggle} />
        </div>
        <div className="flex flex-col justify-center items-center gap-12 p-2 font-medium text-sm capitalize mb-10">
          <li>
            <a href="/login" className="hover:underline">
              login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="bg-lavender text-primary px-4 py-2 rounded"
            >
              get started
            </a>
          </li>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 p-2 font-medium text-sm capitalize">
          <li>
            <a href="#solutions" className="hover:underline">
              solutions
            </a>
          </li>
          <li>
            <a href="#usecases" className=" hover:underline">
              use cases
            </a>
          </li>
          <li>
            <a href="#company" className="hover:underline">
              company
            </a>
          </li>
          <li>
            <a href="#clients" className="hover:underline">
              clients
            </a>
          </li>
        </div>
      </ul>
    )
  );
};

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MobileNavbar;
