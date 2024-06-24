"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Store/store";
import { fetchContacts } from "../Slice/contactSlice";

const ContactTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const { contacts, loading, error } = useSelector(
    (state: RootState) => state.contact
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
  <main className="flex-grow container mx-auto p-4 flex flex-col">
    <div className="overflow-x-auto flex-grow">
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
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Message
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Created At
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Updated At
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="px-6 py-4 whitespace-nowrap">{contact._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.message}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(contact.createdAt).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(contact.updatedAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
  <footer className="bg-gray-800 text-white py-4">
    {/* Your footer content here */}
  </footer>
</div>

  );
};

export default ContactTable;
