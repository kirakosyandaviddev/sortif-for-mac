import React from 'react';
import TrashIcon16 from 'renderer/environment/icons/TrashIcon16';
import PrimaryButton from '../UI/Buttons/PrimaryButton';

const MailAccountsTable: React.FC = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray9">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    MAIL ACCOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    STORAGE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    CONTACTS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider text-center"
                  >
                    INVOICES
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    PRICING/MONTH
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    EDIT ACCOUNT
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((number) => (
                  <tr key={`table-row-item-${number}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-size_12 text-dark4">
                        dummy@dummy.com
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-size_12 text-dark4">3,1 GB</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-size_12 text-dark4">1421</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="text-size_12 text-dark4 text-center">
                        24,0302
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <div className="text-size_12 text-dark4">22,4 $</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        type="button"
                        onClick={() => {}}
                        className="flex items-center text-dark4"
                      >
                        <TrashIcon16 />
                        <span className="text-size_12 ml-1.5 text-red2 uppercase">
                          DELETE
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="text-size_13 text-gray12 font-medium font-inter-med">
                      Showing 5 of 8 results
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 whitespace-nowrap">
                    <PrimaryButton
                      title="Next"
                      onClick={() => {}}
                      type="button"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailAccountsTable;
