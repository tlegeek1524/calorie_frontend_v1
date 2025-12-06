// App.js
import { Routes, Route } from 'react-router-dom';
import Login from './page/develop/LOGIN/Dev_Login';
import Index from './page/index';

function App() {
  return (

      <Routes>
]]
        <Route path="/dev/login" element=  {<Login />} />
        <Route path="/*" element={<Index />} />
      </Routes>

  );
}

export default App;
