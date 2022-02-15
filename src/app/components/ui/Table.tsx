/* eslint-disable react/jsx-key */
import { Column, usePagination, useTable } from 'react-table';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface TableProps {
  columns: Column[];
  data: {}[];
}

export const Table = ({ columns, data }:TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageCount,
    nextPage,
    previousPage,
    state,
  } = useTable({ columns, data, initialState: { pageSize: 5 } }, usePagination);

  if (data.length === 0) {
    return <div className="w-full flex items-center justify-center text-gray-900 dark:text-gray-50 text-lg">There is no data</div>;
  }
  return (
    <>
      <table
        {...getTableProps()}
        className="min-w-full divide-solid divide-y divide-gray-200"
      >
        <thead className="bg-gray-50 dark:bg-gray-800 text-lg">
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="divide-solid divide-x divide-gray-200"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    style: { maxWidth: column.maxWidth, width: column.width },
                  })}
                  className="group px-6 py-3 text-left text-gray-900 dark:text-gray-50 uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white dark:bg-gray-900 divide-solid divide-y divide-gray-200"
        >
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="divide-solid divide-x divide-gray-200"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps({
                      style: { maxWidth: cell.maxWidth, width: cell.width },
                    })}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between px-1 mt-2 text-sm text-gray-500 dark:text-gray-300">
        <div className="left">
          Page
          {' '}
          {state.pageIndex + 1}
          {' '}
          of
          {' '}
          {pageCount}
        </div>
        <div className="flex items-center text-lg">
          <FaAngleLeft
            onClick={previousPage}
            size={32}
            className="cursor-pointer mx-2 px-1 py-1 border-solid border rounded border-gray-500 dark:border-gray-300"
          />
          {state.pageIndex + 1}
          <FaAngleRight
            size={32}
            onClick={nextPage}
            className="cursor-pointer mx-2 px-1 py-1 border-solid border rounded border-gray-500 dark:border-gray-300"
          />
        </div>
      </div>
    </>
  );
};
