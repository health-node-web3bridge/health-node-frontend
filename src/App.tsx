import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PredictionPage from './pages/PredictionPage';
import HealthTrendsPage from './pages/HealthTrendsPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-blue-50 p-8">
                <h1 className="text-3xl font-bold text-teal-800 mb-8 text-center">Liver Health Dashboard</h1>
                <nav className="mb-8">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <Link to="/" className="text-teal-600 hover:text-teal-800 font-semibold">Prediction</Link>
                        </li>
                        <li>
                            <Link to="/trends" className="text-teal-600 hover:text-teal-800 font-semibold">Health Trends</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<PredictionPage />} />
                    <Route path="/trends" element={<HealthTrendsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
