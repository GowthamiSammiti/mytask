import React from "react";

const InvoiceInfo = () => {
  return (
    <div>
      <div className="flex justify-between pt-[20px] pb-[20px]">
        <h3>INVOICE ITEMS</h3>
        <div>
          <span className="text-[#fff]">Invoice amount</span>{" "}
          <span className="bg-[#fff] rounded-md p-[5px] pl-[10px] pr-[10px] text-[#ff5c5c]">
            99KD
          </span>
        </div>
      </div>
      <div>
        <ul className="flex w-[100%] bg-[#ff5c5c] rounded-tl-[9px] rounded-tr-[9px]">
          <li className="w-[10%] p-[10px] text-center">No.</li>
          <li className="w-[25%] p-[10px] text-center ">Invoice Details</li>
          <li className="w-[25%] p-[10px] text-center">Invoice Date </li>
          <li className="w-[20%] p-[10px] text-center">Quantity</li>
          <li className="w-[20%] p-[10px] text-center">Amount (KD)</li>
        </ul>
        <div className=" bg-white pb-[50px] rounded-bl-[9px] rounded-br-[9px]">
          <ul className="flex w-[100%]border-solid border-b-2 border-[#999] ">
            <li className="w-[10%] p-[10px] text-center">01</li>
            <li className="w-[25%] p-[10px] text-center">AJA/22-23/3</li>
            <li className="w-[25%] p-[10px] text-center">20/12/2023 </li>
            <li className="w-[20%] p-[10px] text-center">01</li>
            <li className="w-[20%] p-[10px] text-center">99</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfo;
