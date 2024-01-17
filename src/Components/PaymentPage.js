import React, { useReducer } from "react";
import InvoiceInfo from "./InvoiceInfo";
import logo from "../assets/images/Screenshot 2024-01-17 at 9.19.58 PM.png";

const PaymentPage = () => {
  function formHanler(state, action) {
    let statecopy = JSON.parse(JSON.stringify(state));
    if (action?.type === "name") {
      statecopy.customerName = action?.value;
      if (statecopy.customerName.length === 0) {
        statecopy.isvalidCustomeName = true;
      } else {
        statecopy.isvalidCustomeName = false;
      }
    }

    if (action?.type === "email") {
      statecopy.email = action?.value;

      statecopy.isvalidemail =
        !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(statecopy.email);
    }

    if (action?.type === "TN") {
      statecopy.phoneNumber = action?.value;

      statecopy.isvalidPhoneNumber =
        statecopy.phoneNumber.length < 10 ? true : false;
    }
    return statecopy;
  }
  const [paymentForm, dispatchPaymentForm] = useReducer(formHanler, {
    customerName: "",
    phoneNumber: "",
    email: "",
    countryCode: "+91",
    isvalidPhoneNumber: false,
    isvalidCustomeName: false,
    isvalidemail: false,
  });
  function handleSubmit() {
    console.log(paymentForm);
    alert("Form Consoled !! check console for values");
  }
  return (
    <div className="w-[50%] m-auto pt-[50px] relative">
      <div className="flex justify-between items-center rounded-tl-[9px] rounded-tr-[9px] bg-white ">
        <h2 className="text-[35px] text-[#585858] p-[24px] font-bold">
          ALPHA SOLUTIONS
        </h2>
        <div>
          <img width="100px" src={logo} alt="paymentLogo" />
        </div>
      </div>
      <section>
        {/* Payment Info section */}
        <section className="flex justify-between gradient2 p-[24px] pb-[10px] text-[#585858]">
          <div>
            <div>Payment Link Reference</div>
            <div className="font-bold">ALP/23-24/1</div>

            <div>Payment Url Title</div>
            <div className="font-bold">Payment link from Alpha</div>
          </div>
          <div>
            <div className="text-[#fff] text-[25px] font-bold">
              TOTAL INVOICE
            </div>
            <div className="text-right font-bold text-[45px] text-[#fff]">
              513
            </div>
          </div>
        </section>
        {/* Customer Info section */}

        <section className="gradient2 p-[24px] pt-0 text-[#585858]">
          <form>
            <div>
              <label htmlFor="name">Customer Name</label>
              <input
                type="text"
                id="name"
                placeholder="Ameer"
                className="block border w-[100%] rounded-[9px]  bg-[#fff] p-[8px]"
                onChange={(e) => {
                  dispatchPaymentForm({ type: "name", value: e.target.value });
                }}
              />
              {paymentForm.isvalidCustomeName && (
                <div className="text-red-700">Please Enter Valid Name</div>
              )}
            </div>
            <div className="flex justify-between pt-[15px]">
              <div className="w-[50%] pr-[15px]">
                <label htmlFor="contact">Mobile Number</label>
                <div className="">
                  <input
                    type="tel"
                    id="contact"
                    maxLength={10}
                    placeholder="321456598"
                    value={paymentForm.phoneNumber}
                    onChange={(e) => {
                      dispatchPaymentForm({
                        type: "TN",
                        value: e.target.value.replace(/\D/g, ""),
                      });
                    }}
                    className="inline-block border w-[100%] rounded-[9px] rounded-tr-[9px] bg-[#fff] p-[8px]"
                  />
                  {paymentForm.isvalidPhoneNumber && (
                    <div className="text-red-700">
                      Please Enter Valid Phone Number
                    </div>
                  )}
                </div>
              </div>
              <div className="w-[50%] pl-[15px]">
                <label htmlFor="email">Customer Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="xyz@gmail.com"
                  onChange={(e) => {
                    dispatchPaymentForm({
                      type: "email",
                      value: e.target.value,
                    });
                  }}
                  className="block border w-[100%]  rounded-[9px] bg-[#fff] p-[8px]"
                />
                {paymentForm.isvalidemail && (
                  <div className="text-red-700">Please Enter Valid Email</div>
                )}
              </div>
            </div>
          </form>
        </section>
        {/* Invoice Info section */}

        <section className="gradient2 p-[24px] rounded-bl-[9px] rounded-br-[9px]">
          <InvoiceInfo />
          <div className=" flex justify-center items-center  font-bold text-[20px] pt-[50px] pb-[10px]">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="text-center p-[5px] pl-[35px] pr-[35px] bg-[#fff] text-[#ff5c5c]  rounded-[8px]  "
            >
              PAY NOW
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PaymentPage;
