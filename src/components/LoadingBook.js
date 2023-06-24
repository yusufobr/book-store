import React from 'react';

function LoadingBook() {
  return (
    <div className="py-8 px-6 my-4 border rounded-sm border-gray-300 bg-white h-[202px]">
      <div className="col-span-2 flex justify-between">
        <div className="flex flex-col gap-1 capitalize w-[35%]">
          <span className="w-[50%] h-4 bg-gray-200"> </span>
          <div className="flex flex-col">
            <span className="w-full h-6 mt-3 bg-gray-200"> </span>
            <span className="w-[30%] h-4 bg-gray-200 mt-2"> </span>
          </div>
          <div className="mt-8 w-full h-4 bg-gray-200"> </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingBook;
