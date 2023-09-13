export const MovieLoader = () => {
  return (
    <div className="flex-grow p-6 h-screen overflow-y-auto  animate-pulse rounded-md">
      <div className="flex flex-col h-auto flex-grow gap-3">
        <div className="h-[405px] w-full bg-lightgray/50 rounded-[20px] mb-4"></div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 h-[335px] w-full  rounded-[20px] space-y-6">
            <div className="h-6 w-full bg-lightgray/50 rounded"></div>
            <div className="h-16 w-full bg-lightgray/50 rounded"></div>
            <div className="h-6 w-full bg-lightgray/50 rounded"></div>
            <div className="h-6 w-full bg-lightgray/50 rounded"></div>
            <div className="h-6 w-full bg-lightgray/50 rounded"></div>
            <div className="h-11 w-full bg-lightgray/50 rounded"></div>
          </div>

          <div className="col-span-4 h-[335px] w-full  rounded-[20px] space-y-6">
            <div className="h-6 w-full bg-lightgray/50 rounded"></div>

            <div className="h-11 w-full bg-lightgray/50 rounded"></div>

            <div className="h-11 w-full bg-lightgray/50 rounded"></div>

            <div className="h-[164px] w-full bg-lightgray/50 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
