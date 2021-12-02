// Fichero src/components/App.js
import { useState } from 'react';
import '../styles/App.scss';
import MyDropzone from './DropArea';
import logo2 from '../images/logo2.png';

const App = () => {
  const [dataTrue, setdataTrue] = useState();
  return (
    <div className='page'>
      <header className='header'>
        <img src={logo2} title='logo' alt='logo' className='header__img' />
        <h1 className='header__title'>Grupo Adidas</h1>
      </header>
      <main className='main'>
        <div className='main__center'>
          <MyDropzone setdataTrue={setdataTrue} />
          <button className='main__center--button'>Calcular</button>
        </div>
        <div className='main__result'>{dataTrue}</div>
      </main>
    </div>
  );
};

export default App;
