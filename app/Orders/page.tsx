"use client"; 
import { fetchOrders } from "@/app/Slice/ordersSlice";
import { AppDispatch, RootState } from "@/app/Store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderDetailTable = () => {
    const dispatch: AppDispatch = useDispatch();
    const { orders, loading, error } = useSelector((state: RootState) => state.order);
  
    useEffect(() => {
      dispatch(fetchOrders());
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              First Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Last Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Address
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              City
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Postal Code
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Payment Method
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Country
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="px-6 py-4 whitespace-nowrap">{order._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.city}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {order.postalCode}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{order.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {order.paymentMethod}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{order.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailTable;
