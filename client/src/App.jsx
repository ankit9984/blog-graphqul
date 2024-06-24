import { useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { routes } from './Routes';

function App() {
  const element = useRoutes(routes);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">
        {element}
      </main>
    </div>
  );
}

export default App;
