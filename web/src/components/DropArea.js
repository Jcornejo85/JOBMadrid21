import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import axios from 'axios';
import dataFake from '../data/data.json';
function MyDropzone() {
  const [data, setData] = useState();
  const [data2, setData2] = useState([dataFake]);
  const [dataTrue, setdataTrue] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    setData(acceptedFiles);
    const formData = new FormData();
    formData.append('jsondataRequest', JSON.stringify(acceptedFiles)); //JSON
    console.log('Esto es data2', data2);
    data2.map((data) => setdataTrue(data));
    console.log(dataTrue);
    axios.post(`https://localhost:8000/emc/`, { dataTrue }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  });

  const handleFetch = () => {};
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <button onClick={handleFetch}>Boton</button>
    </div>
  );
}
export default MyDropzone;
