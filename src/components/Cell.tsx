type CellProps = {
  content?: string;
  image?: any;
  variant?: "red" | "green";
};

const Cell = ({ content, image, variant }: CellProps) => {
  let bgColor = "";
  switch (variant) {
    case "red":
      bgColor = "bg-red-500";
      break;
    case "green":
      bgColor = "bg-green-500";
      break;
    default:
      bgColor = "";
  }

  return (
    <>
      <div
        className={`flex w-28 h-28 justify-center items-center grow-0 border-solid border ${bgColor}`}
      >
        {image && <img className="object-contain h-full w-full" src={image} />}
        {content}
      </div>
    </>
  );
};

export default Cell;
