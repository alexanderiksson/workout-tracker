import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WorkoutProvider } from "./context/WorkoutContext";
import Layout from "./Layout";

import Home from "./pages/Home";
import AddExercise from "./pages/AddExercise";
import History from "./pages/History";
import Workout from "./pages/Workout";
import WorkoutStats from "./pages/WorkoutStats";

export default function App() {
    return (
        <Router>
            <WorkoutProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/add-exercise" element={<AddExercise />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/history/:id" element={<Workout />} />
                        <Route path="/history/:id/stats" element={<WorkoutStats />} />
                    </Route>
                </Routes>
            </WorkoutProvider>
        </Router>
    );
}
