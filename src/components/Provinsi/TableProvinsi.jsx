import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetProvinsiData } from "../../utils/redux/provinsiSlice";

const TableProvinsi = () => {
  const provinsiData = useSelector((state) => state.provinsi);
  const dispatch = useDispatch();

  const handleResetState = () => {
    dispatch(resetProvinsiData());
  };

  return (
    <div className="w-full my-10 padding-container">
      <div className="overflow-x-auto mx-auto">
        <table className="table-auto border-collapse border border-gray-400 mx-auto my-10">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 text-teal-500">
                No
              </th>
              <th className="border border-gray-400 px-4 py-2 text-teal-500">
                Provinsi
              </th>
              <th className="border border-gray-400 px-4 py-2 text-teal-500">
                Positif
              </th>
              <th className="border border-gray-400 px-4 py-2 text-teal-500">
                Sembuh
              </th>
              <th className="border border-gray-400 px-4 py-2 text-teal-500">
                Dirawat
              </th>
              <th className="border border-gray-400 px-4 py-2 text-teal-500">
                Meninggal
              </th>
            </tr>
          </thead>
          <tbody>
            {provinsiData.provinces.map((provinsi, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {provinsi.kota}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {provinsi.kasus}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {provinsi.sembuh}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {provinsi.dirawat}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {provinsi.meninggal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-auto w-full flex justify-center">
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2"
          onClick={handleResetState}
        >
          Reset State
        </button>
      </div>
    </div>
  );
};

export default TableProvinsi;
