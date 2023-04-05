import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterList from "../components/characterList/CharacterList";

export default function MainRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
