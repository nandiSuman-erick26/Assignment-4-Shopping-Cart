import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { Route } from "./routes/Route";
// import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./hooks/context/Cart.provider";

function App() {
  return (
    <>
      <CartProvider>
        <Toaster position="top-center" richColors />
        <RouterProvider router={Route} />
      </CartProvider>
    </>
  );
}

export default App;
