import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

// parent route of every single our route that we have in our application
function AppLayout() {
  // useNavigation hook: we will able to see wheter the application is currently idle or it is loading or submitting and this information is for entire application and not just for one page but entire router
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

// write or mutate data using router actions
// actions allow us to manage remote server state using action functions and forms
