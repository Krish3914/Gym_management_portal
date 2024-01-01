export const Newadduser = () => {
  return (
    <form className="flex flex-col gap-4 bg-white rounded-lg w-9/12 p-4 justify-center my-10">
      <div className="flex gap-4">
        <label for="name" className="my-auto ">Name</label>
        <input id="name" type="text" placeholder="Name" className="rounded p-2 w-7/12 border-2" />
      </div>

      <div className="flex gap-4">
        <label for="phone" className="my-auto">Enter Your Email </label>
        <input id="phone" type="number" placeholder="1201402" className="rounded p-2 w-7/12 border-2"/>
      </div>

      <div className="flex gap-4">
        <label for="DOB" className="my-auto">Enter the Date of Birth</label>
        <input id="DOB" type="date" placeholder="Date of birth" className="rounded p-2 w-7/12 border-2" />
      </div>

      <div className="flex gap-4">
        <label for="email" className="my-auto">Enter Your Email </label>
        <input id="email" type="email" placeholder="abc@gmail.com" className="rounded p-2 w-7/12 border-2" />
      </div>

      <select className="w-1/3 p-2">
        <option>mumbai</option>
        <option>delhi</option>
      </select>
      <button type="submit" className="bg-blue-500 p-1 rounded w-1/12 text-white shadow-lg">Submit</button>
    </form>
  );
};
