import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Box>
        <Navbar />
      </Box> */}
    </>
  );
}

export default App;
