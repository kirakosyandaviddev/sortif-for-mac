import React from 'react';
import DownloadIcon21 from 'renderer/environment/icons/DownloadIcon21';
import RefetchIcon21 from 'renderer/environment/icons/RefetchIcon21';
import PrimaryButton from '../UI/Buttons/PrimaryButton';

const PaymentMethodTable: React.FC = () => {
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
                    INVOICE NUMBER
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
                    TOTAL AMOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-normal text-size_12 text-gray10 uppercase tracking-wider text-center"
                  >
                    INVOICE DATE
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
                      <div className="text-size_12 text-dark4">Sortig UG,</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-size_12 text-dark4">
                        invoice@sortif.com
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="text-size_12 text-dark4 text-center">
                        121,23 $
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="text-size_12 text-dark4 text-center">
                        01/03/2021 - 01/04/2021
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => {}}
                        className="flex items-center text-dark4"
                      >
                        <DownloadIcon21 />
                        <span className="text-size_12 ml-1.5 text-dark4">
                          DOWNLOAD
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="text-size_13 text-gray12 font-medium font-inter-med">
                      Showing 11 of 18 results
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap" />
                  <td className="px-6 py-6 whitespace-nowrap text-center">
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

export default PaymentMethodTable;
