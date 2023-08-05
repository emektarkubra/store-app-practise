import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import PageNotFound from "./components/PageNotFound";
import ProductList from "./components/ProductList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsLayout from "./pages/ProductsLayout";

export default function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index={true} element={<ProductList />} />
          <Route path = "category/:categoryName" element = {<Category />}  />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element = {<PageNotFound />}  />
      </Routes>
    </>
  );
}
