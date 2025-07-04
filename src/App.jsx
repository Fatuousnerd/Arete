import Main from "./components/Main";
import ThemeProvider from "./utils/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Form from "./components/Form";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
