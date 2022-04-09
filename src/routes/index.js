import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}