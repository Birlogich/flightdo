export const ActionButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-mdbig text-white bg-purplebg px-[20px] py-[13px] rounded-sm"
    >
      {title}
    </button>
  );
};
