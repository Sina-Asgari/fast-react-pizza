import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

// an array of objects which each object is a route containing path and element
const router = createBrowserRouter([
  {
    // we don't specify the path so in react-router we call it a layout route
    element: <AppLayout />,
    // error happens in nested routes will bubble up to parent route, so we declare error in parent route
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // the route will fetch the data as soon as the application goes to that route and in the end as the data has arrived it will be provided in the page itself using a custom hook
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        // whenever there will be a new form submission on this route then this action will be called
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
        // form the we want to connect to this action in not really on this page but the child component of this order page (it is on UpdateOrder that accually is the child of Order)
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
