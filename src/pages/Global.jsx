import React from "react";
import { Card, Layout } from "../components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import useFetch from "../utils/hook/useFetch";
import { GLOBAL_API } from "../constants";
import CardRegion from "../components/Card/CardRegion";

const Global = () => {
  const { data, loading, error } = useFetch(GLOBAL_API);
  // console.log(data.regions);

  return (
    <Layout>
      <div className="bg-gray-100 padding-container py-10">
        <SectionTitle
          title={"Global Situation"}
          description={"Data covid berdasarkan Global"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data && data.global ? (
            data.global.map((d, index) => (
              <Card
                key={index}
                title={d.status}
                nominal={d.total}
                loading={loading}
                error={error}
              />
            ))
          ) : (
            <Card title="Status" nominal={0} loading={loading} error={error} />
          )}
        </div>
      </div>
      <div className="padding-container pb-10">
        <SectionTitle
          title={"Situation by Region"}
          description={"Data covid berdasarkan Region"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data && data.regions ? (
            data.regions.map((d, index) => (
              <CardRegion key={index} name={d.name} numbers={d.numbers} />
            ))
          ) : (
            <p>Data tidak ditemukan</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Global;
