type CellProps = {
  content?: string;
  image?: any;
  state?: 'red' | 'green';
  textColor?: string;
};

const Cell = ({ content, image, state, textColor }: CellProps) => {
  let bgColor = '';
  switch (state) {
    case 'red':
      bgColor = 'bg-red-500';
      break;
    case 'green':
      bgColor = 'bg-green-500';
      break;
    default:
      bgColor = '';
  }

  return (
    <>
      <div
        className={`flex w-28 h-28 justify-center items-center grow-0 border-solid border ${bgColor} ${textColor}`}>
        {image && <img className="object-contain h-full w-full" src={image} />}
        {content}
      </div>
    </>
  );
};

export default Cell;
