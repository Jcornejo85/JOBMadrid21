import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import axios from 'axios';
import dataFake from '../data/predict.json';

function MyDropzone(props) {
  const [data, setData] = useState();
  const [data2, setData2] = useState(dataFake);

  const onDrop = useCallback((acceptedFiles) => {
    setData(acceptedFiles);
    const formData = new FormData();
    formData.append('jsondataRequest', JSON.stringify(acceptedFiles)); //JSON
    console.log('Esto es data2', data2);
    axios.post(`http://localhost:8000/emc/`, { data2 }).then((res) => {
      console.log(res);
      console.log(res.data);
      props.setdataTrue(res.data);
    });
  });

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
    <div {...getRootProps()} className='drop'>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className='drop__p'>Drop the files here ...</p>
      ) : (
        <p className='drop__p'>
          Drag 'n' drop some files here, or click to select files
        </p>
      )}
    </div>
  );
}
export default MyDropzone;
