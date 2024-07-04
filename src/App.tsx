import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Header } from "./navigation/Header";

function App() {
  const Wrapper = () => {
    return (
      <div>
        <Header />
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Wrapper />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
