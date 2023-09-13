export const CardLoader = ({itemCount}: any) => {
  const rows = Array.from({length: itemCount}, (_, rowIndex) => (
    <div key={rowIndex} className="bg-gray/10 animate-pulse w-full p-2 rounded">
      <div className="flex flex-col h-auto flex-grow gap-3">
        <div className="h-[408px] w-full bg-lightgray/50 rounded-md"></div>
        <div className="h-5 w-full bg-lightgray/50 rounded"></div>
        <div className="h-5 w-full bg-lightgray/50 rounded"></div>
        <div className="h-5 w-full bg-lightgray/50 rounded"></div>
        <div className="h-5 w-full bg-lightgray/50 rounded"></div>
      </div>
    </div>
  ));

  return <div className="w-full grid grid-cols-4 gap-16">{rows}</div>;
};
