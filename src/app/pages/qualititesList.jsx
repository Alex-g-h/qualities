import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import httpService from "../services/http.service";

const QualitiesListPage = () => {
  const [qualities, setQualities] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await httpService.get(
          "http://localhost:4000/api/v1/quality"
        );
        setQualities(data.content);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleEdit = (param) => {
    history.push(`/edit/${param}`);
  };
  const handleDelete = (param) => {
    console.log(param);
  };
  return (
    <>
      <h1>Qualitites List Page</h1>
      <QualitiesTable
        onDelete={handleDelete}
        onEdit={handleEdit}
        data={qualities}
      />
    </>
  );
};

export default QualitiesListPage;
