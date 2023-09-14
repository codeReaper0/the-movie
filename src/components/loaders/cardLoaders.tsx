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

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
      {rows}
    </div>
  );
};

export const SearchCardLoader = ({itemCount}: any) => {
  const rows = Array.from({length: itemCount}, (_, rowIndex) => (
    <div key={rowIndex} className="animate-pulse w-full h-[180px]">
      <div className="flex h-full w-full gap-4">
        <div className="h-full w-1/2 bg-lightgray/50 rounded-md"></div>
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="h-[15%] w-full bg-lightgray/50 rounded"></div>
          <div className="h-[45%] w-full bg-lightgray/50 rounded"></div>
          <div className="h-[15%] w-full bg-lightgray/50 rounded"></div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rows}
    </div>
  );
};
