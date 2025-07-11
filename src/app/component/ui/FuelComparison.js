'use client';

import { useState } from 'react';

export default function FuelComparison() {
  const [selectedCompany, setSelectedCompany] = useState('ティーワイエス (TYS)');
  const companies = [
    'ティーワイエス (TYS)',
    '中央リース(Chūō Rīsu-Leasing and Rental )',
    '森谷リース(森谷商会）Moriya Rīsu-Moriya Lease',
    'フジケン-Fujiken',
    'その他（東建リース他）-Sono hoka (Tōken Rīsu hoka)-(Including Token Lease, etc.)',
  ];

  const tableData = [
    ['1', '833,897', '400,000', '400,000', '627,000'],
    ['2', '399,000', '400,000', '833,897', '400,000'],
    ['3', '627,000', '324,980', '399,000', '324,980'],
    ['4', '235,000', '56754767', '1,158,877', '635,000'],
    ['5', '627,000', '399,000', '399,000', '779,425'],
    ['6', '460,000', '1,095,000', '1,938,302', '1,095,000'],
    ['7', '627,000', '627,000', '399,000', '614,021'],
    ['8', '371,500', '627,000', '399,000', '2,552,323'],
    ['9', '1,466,500', '627,000', '399,000', '833,897'],
    ['10', '400,000', '324,980', '235,000', '1,158,877'],
    ['11', '635,000', '779,425', '460,000', '1,938,302'],
    ['12', '1,095,000', '614,021', '371,500', '2,552,323'],
    ['13', '1,095,000', '614,021', '371,500', '2,552,323'],
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h3 className="text-xl font-semibold">
          燃料比較 -Rīsu・Nenryō Hikaku - Lease and Fuel Comparison
        </h3>
        <div className="relative mt-4 md:mt-0">
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Year ▼
          </button>
          <div className="absolute mt-2 bg-white shadow-md rounded w-48 z-10">
            <div className="px-4 py-2 text-gray-500 font-semibold">Latest</div>
            <a className="block px-4 py-2 hover:bg-gray-100" href="#">2017</a>
            <a className="block px-4 py-2 hover:bg-gray-100" href="#">2018</a>
            <a className="block px-4 py-2 hover:bg-gray-100" href="#">2019</a>
            <div className="border-t my-1"></div>
            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Oldest</a>
          </div>
        </div>
      </div>

      {/* Company Buttons */}
      <div className="mb-4 flex flex-wrap gap-2">
        {companies.map((name, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCompany(name)}
            className={`border rounded px-4 py-1 text-sm ${
              selectedCompany === name
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Description */}
      <p className="mb-4 text-gray-700 font-medium">{selectedCompany}</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Ｒ2年度 (2020)</th>
              <th className="p-2 border">内廻送費 (Internal transfer)</th>
              <th className="p-2 border">Ｒ3年度 (2021)</th>
              <th className="p-2 border">（内廻送費）</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-2 border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="mt-6 flex flex-col sm:flex-row justify-between items-center border-t pt-4 text-gray-600">
        <span className="text-center mb-2 sm:mb-0">
          You are viewing first page of ティーワイエス (TYS)
        </span>
        <div className="flex gap-2">
          <button className="px-2 py-1 border rounded">‹</button>
          <button className="px-2 py-1 border rounded">2</button>
          <button className="px-2 py-1 border rounded">3</button>
          <button className="px-2 py-1 border rounded">12</button>
          <button className="px-2 py-1 border rounded">›</button>
        </div>
      </footer>
    </div>
  );
}
