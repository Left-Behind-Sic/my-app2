import './App.css';
import Navbar from './components/nav/Navbar';
import Header from './components/Header/Header';
import Profile from './components/profile/Profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
