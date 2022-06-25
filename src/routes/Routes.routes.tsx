import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Event } from "../pages";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}
