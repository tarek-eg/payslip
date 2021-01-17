import { jsPDF } from "jspdf";
import { useState } from "react";

const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
export const Table = () => {
  const [pdf, setPDF] = useState(null);

  const handleSavePdf = () => {
    doc.save("a4.pdf");
    console.log(pdf);
  };

  return (
    <div>
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-300">Date</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Invitation</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr className="bg-white border-4 border-gray-200">
            <td className="px-16 py-2 text-center">
              <span>05/06/2020</span>
            </td>
            <td className="px-16 py-2 text-center">
              <button
                onClick={handleSavePdf}
                className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black"
              >
                Download
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
