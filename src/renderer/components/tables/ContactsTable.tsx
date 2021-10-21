import React from 'react';
import FolderIcon24 from 'renderer/environment/icons/FolderIcon24';
import RefetchIcon21 from 'renderer/environment/icons/RefetchIcon21';
import useNavigation from 'renderer/hooks/useNavigation';
import SecondaryButton from '../UI/Buttons/SecondaryButton';

const ContactsTable: React.FC = () => {
  const { routes, navigate } = useNavigation();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
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
                    ID NUMBER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    CONTACT NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    EMAIL ADDRESS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider text-center"
                  >
                    AMOUNT OF INVOICES
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    IMORT DATE / TOTAL STORAGE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider"
                  >
                    <button type="button" onClick={() => {}}>
                      <RefetchIcon21 />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((number) => (
                  <tr key={`table-row-item-${number}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-7 w-7">
                          <div className="h-7 w-7 rounded-full bg-gray7" />
                        </div>
                        <div className="ml-3">
                          <div className="text-size_12 text-dark4">
                            89413323
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-size_12 text-dark4">
                        Apple Inc . SA..
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-size_12 text-dark4">
                        invoice@apple.com
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="text-size_12 text-dark4 text-center">
                        10
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="text-size_12 text-dark4">
                        06/08/2021 / 25 MB
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() =>
                          navigate(routes.contactDetails(String(number)))
                        }
                        className="flex items-center text-dark4"
                      >
                        <FolderIcon24 />
                        <span className="text-size_12 ml-1.5 text-gray11">
                          OPEN
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="text-size_13 text-gray12 font-medium font-inter-med">
                      Showing 8 of 24 results
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap">
                    <SecondaryButton
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

export default ContactsTable;
