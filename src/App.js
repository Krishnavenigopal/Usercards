import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserList from './pages/Userlist/UserList'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;