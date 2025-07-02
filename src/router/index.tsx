import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { BookPage } from "../pages/BookPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route Component={MainPage} path="/" />
      <Route Component={BookPage} path="/book/:bookId" />
      <Route Component={FavoritesPage} path="/favorites" />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
