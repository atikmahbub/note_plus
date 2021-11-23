import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NoMatch from "../containers/NoMatch";
import PrivateRoutes from "../hoc/PrivateRouter";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import NoteDetails from "../views/NoteDetails";
import SignUp from "../views/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/note" element={<NoteDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Fragment>
  );
}

export default App;
