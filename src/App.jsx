import Home from "./pages/Home"
import Create from "./pages/Create"
import Read from "./pages/Read"
import { Route, Routes } from "react-router"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  )
}

export default App