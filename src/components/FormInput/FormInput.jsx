import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProvinsiData } from "../../utils/redux/provinsiSlice";
import Toast from "../Toast/Toast";
import { images } from "../../constants";

const FormInput = () => {
  const provinsiData = useSelector((state) => state.provinsi);
  const dispatch = useDispatch();
  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!provinsi || !status || !jumlah) {
      setErrorMessage("Semua input harus diisi!");
      return;
    }

    const selectedProvinsiIndex = provinsiData.provinces.findIndex(
      (item) => item.kota.toLowerCase() === provinsi.toLowerCase()
    );

    if (selectedProvinsiIndex !== -1) {
      const selectedProvinsi = provinsiData.provinces[selectedProvinsiIndex];
      const updatedProvinsi = {
        ...selectedProvinsi,
        [status]: selectedProvinsi[status] + parseInt(jumlah),
      };

      dispatch(
        updateProvinsiData({
          provinsiIndex: selectedProvinsiIndex,
          newData: updatedProvinsi,
        })
      );
      setErrorMessage("");
      setShowToast(true);
    } else {
      setErrorMessage("Provinsi tidak terdaftar!");
    }

    setProvinsi("");
    setStatus("");
    setJumlah("");
  };

  return (
    <div className="bg-white padding-container max-container h-screen items-center my-10 flex flex-col lg:flex-row justify-center lg:justify-between">
      <div className="w-full mx-auto ">
        <img
          src={images.dr}
          alt="dr"
          className="w-[300px] object-contain mx-auto my-5 lg:my-0"
        />
      </div>
      <div className="w-full p-5">
        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4"
            role="alert"
          >
            <p>{errorMessage}</p>
          </div>
        )}

        {showToast && (
          <Toast
            message={errorMessage ? errorMessage : "Data berhasil terkirim!"}
            type={errorMessage ? "red" : "green"}
            onClose={() => setShowToast(false)}
          />
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Provinsi"
            value={provinsi}
            onChange={(e) => setProvinsi(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Pilih Status</option>
            <option value="kasus">Positif</option>
            <option value="sembuh">Sembuh</option>
            <option value="dirawat">Dirawat</option>
            <option value="meninggal">Meninggal</option>
          </select>
          <input
            type="number"
            placeholder="Jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white rounded-md px-4 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormInput;
