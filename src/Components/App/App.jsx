import './App.scss';
import ModalGreetings from './ModalGreetings/ModalGreetings';
import ModalСharacterCreation from './ModalСharacterCreation/ModalСharacterCreation';
import Interface from './Interface/Interface';
import { Routes, Route } from 'react-router-dom'
import Header from './Header/Header';

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <div className="App">
        <div className='App-content content'>
          <Routes>
            <Route path='/' element={<ModalGreetings />} />
            <Route path='characterCreation' element={<ModalСharacterCreation />} />
            <Route path='/Interface/*' element={<Interface />} />
            <Route path='*' element={<ModalGreetings />} />
          </Routes>
        </div>
      </div>
    </div>
  )
};
export default App;
