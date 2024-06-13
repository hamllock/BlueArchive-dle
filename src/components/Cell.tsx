const Cell = ({ content, image }: { content?: string; image?: any }) => {
  return (
    <>
      <div className="flex w-28 h-28 justify-center items-center grow-0 border-solid border-2">
        {image && <img className="object-contain h-full w-full" src={image} />}

        {content}
      </div>
    </>
  );
};
export default Cell;
