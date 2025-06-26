import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App';
import Home from '../page/Home';
import Login from '../page/Login';
import Order from '../page/Order';
import Catalog from '../page/Catalog';
import About from '../page/pageComponents/About';
import Blog from '../page/pageComponents/Blog';
import Contacts from '../page/pageComponents/Contact';
import ProductDetails from '../page/pageComponents/ProductDetslis';
import ErrorPage from '../page/ErrorPage';
import Profil from '../page/Profil';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'about', element: <About /> },
            { path: 'blog', element: <Blog /> },
            { path: 'contacts', element: <Contacts /> },
            { path: 'products/:id', element: <ProductDetails /> },
            {
                path: 'profile',
                element: (
                    <ProtectedRoute>
                        <Profil />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'order',
                element: (
                    <ProtectedRoute>
                        <Order />
                    </ProtectedRoute>
                ),
            },
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}