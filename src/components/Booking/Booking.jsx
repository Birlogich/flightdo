import { Header } from "../Header/Header";
import { Search } from "../UI/Search/Search";
import { Flights } from "./Flights/Flights";

export const Booking = () => {
  return (
    <div className="flex-auto flex flex-col">
      <Search />
      <p className="text-mdbig text-purple mb-[25px]">
        Choose a departing flight
      </p>
      <Flights />
    </div>
  );
};
