import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { Home, Singin, Error, UserProfile, Archive, Info, AddCard, TransferToIBAN, TransferToPhone } from './pages/import';
import TransferToCard from './pages/TransferToCard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='singin' element={<Singin/>}/>
        <Route path='profile' element={<UserProfile/>}/>
        <Route path='archive' element={<Archive/>}></Route>
        <Route path='info' element={<Info/>}></Route>
        <Route path='transferToCard' element={<TransferToCard/>}></Route>
        <Route path='transferToIBAN' element={<TransferToIBAN/>}></Route>
        <Route path='TransferToPhone' element={<TransferToPhone/>}></Route>
        <Route path='addCard' element={<AddCard/>}></Route>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  );
}

export default App;