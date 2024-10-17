import { Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import HomePage from "./container/HomePage/HomePage";

function App() {
  return (
    <>
    <CssBaseline />
    <header>
      <AppToolbar />
    </header>
    <main>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </main>
  </>
  )
};

export default App;