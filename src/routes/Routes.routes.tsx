import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Event, Subscribe } from "../pages";
import { RoutesTypeEnum } from "./enum";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesTypeEnum.HOME} element={<Subscribe />} />
        <Route path={RoutesTypeEnum.EVENT} element={<Event />} />
        <Route
          path={`${RoutesTypeEnum.EVENT}/lesson/:slug`}
          element={<Event />}
        />
      </Routes>
    </BrowserRouter>
  );
}
