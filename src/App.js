import './App.css';
import Navbar from './components/nav/Navbar';
import Header from './components/Header/Header';
import Profile from './components/profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPages}/>} />
            <Route path="/profile/*" element={<Profile state={props.state.profilePage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
