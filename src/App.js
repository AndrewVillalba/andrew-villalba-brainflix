import Main from './pages/Main/Main'
import Upload from './pages/Upload/Upload';
import Header from './component/Header/Header';
import './App.scss'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/video/:idFromParams' element={<Main />}></Route>
      <Route path='upload' element={<Upload />}></Route>
    </Routes>
    </>
  );
}

export default App;
