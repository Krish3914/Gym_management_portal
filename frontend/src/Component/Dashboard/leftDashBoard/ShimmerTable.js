export const ShimmerTable = () => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
        <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">DOB</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">MemberShip Plan</th>
            <th className="py-2 px-4 border-b">Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Add table rows and data here */}

        <tr>
          <td className="py-2 px-4 border-b bg-slate-200"></td>
          <td className="py-2 px-4 border-b bg-slate-200"></td>
          <td className="py-2 px-4 border-b bg-slate-200"> </td>
          <td className="py-2 px-4 border-b bg-slate-200"></td>
        </tr>

        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};
