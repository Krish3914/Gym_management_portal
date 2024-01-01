// export const Transactions = () => {
//   return (
//     <div className="flex flex-col gap-5 bg-white rounded w-9/12">
//       <div className="p-2">
//         <span className="font-medium text-xl opacity-50">Transactions</span>
//       </div>
//       <div className="flex gap-5">
//         <img
//           src={require("../../images/icons/unicons/paypal.png")}
//           className=" h-10"
//         />
//         <div className="flex flex-col">
//           <span className="text-sm opacity-65">Paypal</span>
//           <span className="opacity-70 font-normal">Send Money</span>
//         </div>
//         <span className="opacity-60">123</span>
//       </div>
//       <div className="flex gap-5">
//         <img
//           src={require("../../images/icons/unicons/chart.png")}
//           className="h-10"
//         />
//         <div className="flex flex-col">
//           <span className="text-sm opacity-65">Wallet</span>
//           <span className="opacity-70 font-normal">mac'D</span>
//         </div>
//         <span className="opacity-60">451</span>
//       </div>
//       <div className="flex gap-5">
//         <img
//           src={require("../../images/icons/unicons/wallet.png")}
//           className=" h-10"
//         />
//         <div className="flex flex-col">
//           <span className="text-sm opacity-65">Transfer</span>
//           <span className="opacity-70 font-normal">Refund</span>
//         </div>
//         <span className="opacity-60">471</span>
//       </div>
//       <div className="flex gap-5">
//         <img
//           src={require("../../images/icons/unicons/cc-success.png")}
//           className=" h-10"
//         />
//         <div className="flex flex-col">
//           <span className="text-sm opacity-65">Credit Card</span>
//           <span className="opacity-70 font-normal">Ordered Food</span>
//         </div>
//         <span className="opacity-60">874</span>
//       </div>
//       <div className="flex gap-5">
//         <img
//           src={require("../../images/icons/unicons/wallet.png")}
//           className=" h-10"
//         />
//         <div className="flex flex-col">
//           <span className="text-sm opacity-65">Wallet</span>
//           <span className="opacity-70 font-normal">Starbucks</span>
//         </div>
//         <span className="opacity-60">32.1</span>
//       </div>
//       <div className="flex gap-5">
//         <img
//           src={require("../../images/icons/unicons/cc-warning.png")}
//           className=" h-10"
//         />
//         <div className="flex flex-col">
//           <span className="text-sm opacity-65">Master Card</span>
//           <span className="opacity-70 font-normal">Ordered Food</span>
//         </div>
//         <span className="opacity-60">741</span>
//       </div>
//     </div>
//   );
// };




export const Transactions = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-5 bg-white rounded w-9/12">
      <div className="p-2 grid-rows-3 mx-auto">
        <span className="font-medium text-xl opacity-50">Transactions</span>
      </div>
      <div className="flex gap-5">
        <img
          src={require("../../images/icons/unicons/paypal.png")}
          className=" h-10"
        />
        <div className="flex flex-col">
          <span className="text-sm opacity-65">Paypal</span>
          <span className="opacity-70 font-normal">Send Money</span>
        </div>
        <span className="opacity-60">123</span>
      </div>
      <div className="flex gap-5">
        <img
          src={require("../../images/icons/unicons/chart.png")}
          className="h-10"
        />
        <div className="flex flex-col">
          <span className="text-sm opacity-65">Wallet</span>
          <span className="opacity-70 font-normal">mac'D</span>
        </div>
        <span className="opacity-60">451</span>
      </div>
      <div className="flex gap-5">
        <img
          src={require("../../images/icons/unicons/wallet.png")}
          className=" h-10"
        />
        <div className="flex flex-col">
          <span className="text-sm opacity-65">Transfer</span>
          <span className="opacity-70 font-normal">Refund</span>
        </div>
        <span className="opacity-60">471</span>
      </div>
      <div className="flex gap-5">
        <img
          src={require("../../images/icons/unicons/cc-success.png")}
          className=" h-10"
        />
        <div className="flex flex-col">
          <span className="text-sm opacity-65">Credit Card</span>
          <span className="opacity-70 font-normal">Ordered Food</span>
        </div>
        <span className="opacity-60">874</span>
      </div>
      <div className="flex gap-5">
        <img
          src={require("../../images/icons/unicons/wallet.png")}
          className=" h-10"
        />
        <div className="flex flex-col">
          <span className="text-sm opacity-65">Wallet</span>
          <span className="opacity-70 font-normal">Starbucks</span>
        </div>
        <span className="opacity-60">32.1</span>
      </div>
      <div className="flex gap-5">
        <img
          src={require("../../images/icons/unicons/cc-warning.png")}
          className=" h-10"
        />
        <div className="flex flex-col">
          <span className="text-sm opacity-65">Master Card</span>
          <span className="opacity-70 font-normal">Ordered Food</span>
        </div>
        <span className="opacity-60">741</span>
      </div>
    </div>
  );
};
