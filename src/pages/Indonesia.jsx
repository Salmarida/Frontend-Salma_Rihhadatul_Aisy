import React from "react";
import { Card, Layout } from "../components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import useFetch from "../utils/hook/useFetch";
import { INDONESIA_API } from "../constants";
import CardRegion from "../components/Card/CardRegion";

const Indonesia = () => {
  const { data, loading, error } = useFetch(INDONESIA_API);
  // console.log(data);
  return (
    <Layout>
      <div className="padding-container pb-20">
        <SectionTitle
          title={"Indonesia Situation"}
          description={"Data covid berdasarkan Indonesia"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data && data.indonesia ? (
            data.indonesia.map((d, index) => (
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
          title={"Situation by Province"}
          description={"Data covid berdasarkan Province"}
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

export default Indonesia;
