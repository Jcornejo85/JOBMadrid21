// Fichero src/components/App.js

import '../styles/App.scss';
import MyDropzone from './DropArea';

const App = () => {
  const [dataTrue, setdataTrue] = useState();
  return (
    <div className='main'>
      <h1 className='main__title'>Grupo Adidas</h1>
      <div className='main__center'>
        <MyDropzone setdataTrue={setdataTrue} />
        <button className='main__center--button'>Calcular</button>
      </div>
      <div>{props.dataTrue}</div>
    </div>
  );
};

export default App;
