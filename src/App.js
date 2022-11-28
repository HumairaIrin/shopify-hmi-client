import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import router from './Pages/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
