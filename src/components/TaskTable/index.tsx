import React from "react";

export const TaskTable = () => {
  return (
    <div className="relative overflow-x-auto shadow ">
      <table className="table-auto border border-collapse w-full">
        <thead>
          <tr className="cursor-pointer">
            <th className="px-2 py-1 border text-left">SL</th>
            <th className="px-2 py-1 border text-left">Col 1</th>
            <th className="px-2 py-1 border text-left">Col 2</th>
            <th className="px-2 py-1 border text-left">Col 3</th>
          </tr>
        </thead>
        <tbody>
          <tr className="cursor-pointer hover:bg-gray-100">
            <td className="px-2 py-1 border">1</td>
            <td className="px-2 py-1 border">Lorem ipsum dolor sit amet.</td>
            <td className="px-2 py-1 border">Row 1</td>
            <td className="px-2 py-1 border">Row 1</td>
          </tr>
          <tr className="cursor-pointer hover:bg-gray-100">
            <td className="px-2 py-1 border">1</td>
            <td className="px-2 py-1 border">Row 1</td>
            <td className="px-2 py-1 border">Row 1</td>
            <td className="px-2 py-1 border">Row 1</td>
          </tr>
          <tr className="cursor-pointer hover:bg-gray-100">
            <td className="px-2 py-1 border">1</td>
            <td className="px-2 py-1 border">Row 1</td>
            <td className="px-2 py-1 border">Row 1</td>
            <td className="px-2 py-1 border">Row 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
