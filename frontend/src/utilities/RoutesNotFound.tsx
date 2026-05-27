import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

interface Props {
  children: ReactNode;
}

function RoutesNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>NOT FOUND </div>}></Route>
    </Routes>
  );
}

export default RoutesNotFound;
