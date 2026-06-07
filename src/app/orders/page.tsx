export default function Orders() {
  function getRow() {
    return (
      <tr className="text-sm md:text-base odd:bg-gray-50">
        <td className="hidden md:block py-6 px-1">123456789</td>
        <td className="py-6 px-1">29.06.2026</td>
        <td className="py-6 px-1">357</td>
        <td className="hidden md:block py-6 px-1">Mexican Pizza</td>
        <td className="py-6 px-1">Out for delivery</td>
      </tr>
    );
  }

  return (
    <div className="p-4 lg:px-15 xl:px-30">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {getRow()}
          {getRow()}
          {getRow()}
        </tbody>
      </table>
    </div>
  );
}
