import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';

function MyDropzone() {
  const [prueba, setPrueba] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
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
  console.log('Esto es prueba', prueba);
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
