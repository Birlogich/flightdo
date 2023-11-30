import { Link } from "react-router-dom";
import { ReactComponent as MainLogo } from "../../assets/images/logos/MainLogo.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col px-[50px]">
      <div className="flex w-full justify-between py-[60px]">
        <div className="flex items-start">
          <MainLogo />
        </div>
        <div className="flex flex-col">
          <p className="text-grey font-extrabold mb-[10px]">About</p>
          <Link className="mb-[10px]">
            <span className="text-grey">About FlightsDo</span>
          </Link>
          <Link>
            <span className="text-grey">How it works</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="text-grey font-extrabold mb-[10px]">Partner with us</p>
          <Link className="mb-[10px]">
            <span className="text-grey">Partnership programs</span>
          </Link>
          <Link>
            <span className="text-grey">Affiliate program</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="text-grey font-extrabold mb-[10px]">Support</p>
          <Link className="mb-[10px]">
            <span className="text-grey">Contact us</span>
          </Link>
          <Link className="mb-[10px]">
            <span className="text-grey">Privacy policy</span>
          </Link>
          <Link className="mb-[10px]">
            <span className="text-grey">Terms of service</span>
          </Link>
          <Link className="mb-[10px]">
            <span className="text-grey">Trust and safety</span>
          </Link>
        </div>
      </div>
      <p className="py-[30px] text-center border-t-[1px] border-solid border-greylight">
        © 2023 REECARD LLC. All rights reserved. Flights are booked with our
        flight partners.
      </p>
    </div>
  );
};
