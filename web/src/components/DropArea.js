import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import axios from 'axios';

function MyDropzone() {
  const [data, setData] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    setData(acceptedFiles);
  });

  const handleFetch = () => {
    const formData = new FormData();
    formData.append('jsondataRequest', JSON.stringify(data)); //JSON

    axios.post(`https://localhost:8000/emc/`, { formData }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  });
  console.log('Esto es prueba', data);
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
