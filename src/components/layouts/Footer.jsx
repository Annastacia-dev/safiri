const Footer = () => {
  return (
    <div className="bg-tertiary lg:p-10 p-8 text-white grid lg:grid-cols-4 justify-center gap-4 capitalize">
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
  );
};

export default Footer;
