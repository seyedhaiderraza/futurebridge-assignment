import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateContact from "./components/CreateContact";
import ContactsList from "./components/ContactsList";
import { ContactsCRUDContextProvider } from "./context/ContactsCRUDContext";
import ContactRoutes from "./components/ContactRoutes";
function App() {
  return (
    <div className="App">
      <h1>Contact CRUD App</h1>

      <ContactsCRUDContextProvider>
        <Router>
          <Routes>
            <Route path="/createcontact" element={<CreateContact />} />
            <Route path="/contactslist" element={<ContactsList />} />

            <Route path="/" element={<ContactRoutes />} />
          </Routes>
        </Router>
      </ContactsCRUDContextProvider>
    </div>
  );
}

export default App;
