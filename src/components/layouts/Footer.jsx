const Footer = () => {
  return (
    <div className="bg-tertiary lg:p-10 p-8 flex flex-col gap-4">
      <div className="text-white grid lg:grid-cols-4 justify-center gap-4 capitalize">
        <div className="flex flex-col gap-3 text-sm ">
          <h5 className="font-semibold text-base">product</h5>
          <a className="underline cursor-pointer">pricing</a>
          <a className="underline cursor-pointer">solutions</a>
          <a className="underline cursor-pointer">use cases</a>
        </div>
        <div className="flex flex-col gap-5 text-sm">
          <h5 className="font-semibold text-base">company</h5>
          <a className="underline cursor-pointer">about</a>
          <a className="underline cursor-pointer">clients</a>
        </div>
        <div className="flex flex-col gap-5 text-sm">
          <h5 className="font-semibold text-base">resources</h5>
          <a className="underline cursor-pointer">articles</a>
          <a className="underline cursor-pointer">privacy policy</a>
          <a className="underline cursor-pointer">terms & conditions</a>
        </div>
        <div className="flex flex-col gap-5 text-sm">
          <h5 className="font-semibold text-base">links</h5>
          <a className="underline cursor-pointer">get started</a>
          <a className="underline cursor-pointer">log in</a>
        </div>
      </div>
      <hr className="border-secondary my-10" />
      <div className="flex flex-col justify-center items-center">
        <span className="block text-center">
          {' '}
          <a href="https://intasend.com/security" target="_blank">
            <img
              src="https://intasend-prod-static.s3.amazonaws.com/img/trust-badges/intasend-trust-badge-with-mpesa-hr-dark.png"
              width="375px"
              alt="IntaSend Secure Payments (PCI-DSS Compliant)"
            />
          </a>{' '}
          <strong>
            <a
              className=" block text-[#fafafa] mt-[0.6em]"
              href="https://intasend.com/security"
              target="_blank"
            >
              Secured by IntaSend Payments
            </a>
          </strong>{' '}
        </span>
      </div>
    </div>
  );
};

export default Footer;
