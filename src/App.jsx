import './App.css'
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

function App() {
    return (
        <div className="main">
            <Navbar />
            <HomePage />
        </div>
    );
}

export default App
