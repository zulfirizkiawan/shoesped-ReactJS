import React from "react";

const Size = ({ size, disable }) => {
  if (disable) {
    return (
      <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
        {size}
      </div>
    );
  }

  return (
    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
      {size}
    </div>
  );
};

export default Size;
