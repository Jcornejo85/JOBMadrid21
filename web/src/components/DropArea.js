import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';

function MyDropzone() {
  const [data, setData] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    setData(acceptedFiles);
    fetch('/localhost:8000/emc/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    console.log(acceptedFiles);
  }, []);
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
    </div>
  );
}
export default MyDropzone;
