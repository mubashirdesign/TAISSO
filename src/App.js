import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Events from './components/Events';
import Event from './components/Event';
import HomePage from './components/HomePage';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
  <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="events" element={<Events />}>
      </Route>
      <Route path="events/:eventId" element={<Event />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
