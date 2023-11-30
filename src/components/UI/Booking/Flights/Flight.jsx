import { ReactComponent as FlightMockIcon } from "../../../../assets/images/booking/flight/FlightMockIcon.svg";

export const Flight = () => {
  return (
    <div className="w-full flex border-b-[1px] border-solid border-greylight p-[16px] justify-between text-mdbig">
      <div className="flex">
        <FlightMockIcon className="mr-[25px]" />
        <div className="flex flex-col">
          <p>16h 45m</p>
          <p className="text-lightgrey">American Airline</p>
        </div>
      </div>
      <div className="flex items-start">
        <p>7:00AM - 4:15PM</p>
      </div>
      <div className="flex flex-col justify-end text-right">
        <p>1 stop</p>
        <p className="text-lightgrey">2h 45m in NHL</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-purple">
          <span className="mr-[5px] line-through">$624</span>
          <span className="ml-[5px]">$250</span>
        </div>
        <p className="text-lightgrey">round trip</p>
      </div>
    </div>
  );
};
