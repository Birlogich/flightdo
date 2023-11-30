import { Flight } from "../../UI/Booking/Flights/Flight";

export const Flights = () => {
  return (
    <div className="flex flex-col w-full border-[1px] border-solid border-greylight rounded-md p-[16px] mb-[90px]">
      <Flight />
      <Flight />
      <Flight />
      <Flight />
    </div>
  );
};
