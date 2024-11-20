import React from "react";
import { Layout } from "../components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import TableProvinsi from "../components/Provinsi/TableProvinsi";
import FormInput from "../components/FormInput/FormInput";

const Provinsi = () => {
  return (
    <Layout>
      <div className="">
        <SectionTitle
          title={"Provinsi"}
          description={"Data covid berdasarkan Provinsi"}
        />
      </div>
      <div>
        <TableProvinsi />
        <FormInput />
      </div>
    </Layout>
  );
};

export default Provinsi;
