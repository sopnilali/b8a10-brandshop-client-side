import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import AddProduct from '../components/Products/AddProduct';
import AddBrand from '../components/Brands/AddBrand';
import Brands from '../components/Brands/Brands';
import ProductsRoot from '../components/Products/ProductsRoot';
import SingleProduct from '../components/Products/SingleProduct';
import ProductDetails from '../components/Products/ProductDetails';
import UpdateProduct from '../components/Products/UpdateProduct';
import PrivateRoutes from './PrivateRoutes';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import MyCart from '../pages/MyCart/MyCart';
import Products from '../components/Products/Products';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Routes = createBrowserRouter( [
    {
      path:'/',
      element: <Root />,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element:<Home/>,
          loader: ()=> fetch(`https://b8a10-brandshop-server-side-two.vercel.app/products`)
        }
      ]
    },
    {
      element:<ProductsRoot />,
      errorElement:<ErrorPage />,
      children: [
            {
              path:'/products',
              element:<Products />,
              errorElement:<ErrorPage />,
            },
            {
              path:'/brands',
              element:<Brands />,
              errorElement:<ErrorPage />,
              loader: ()=> fetch(`https://b8a10-brandshop-server-side-two.vercel.app/brands`)
            },
            {
              path:'/products/:name',
              element:<SingleProduct />,
              errorElement:<ErrorPage />,
              loader:({params}) => fetch(`https://b8a10-brandshop-server-side-two.vercel.app/brand-products/${params.name}`)
            },
            {
              path:'/product-details/:id',
              element:<PrivateRoutes><ProductDetails/></PrivateRoutes>,
              errorElement:<ErrorPage />,
              loader:({params}) => fetch(`https://b8a10-brandshop-server-side-two.vercel.app/single-product/${params.id}`)
            }
            
      ]
    },
    {
      path:'/add-products',
      element:<PrivateRoutes><AddProduct/></PrivateRoutes>,
      errorElement:<ErrorPage />
    },
    {
      path:'/update-product/:id',
      element:<PrivateRoutes><UpdateProduct/></PrivateRoutes>,
      errorElement:<ErrorPage />,
      loader: ({params})=> fetch(`https://b8a10-brandshop-server-side-two.vercel.app/single-product/${params.id}`)
    },
    {
      path:'/add-brands',
      element:<PrivateRoutes><AddBrand/></PrivateRoutes>,
      errorElement:<ErrorPage />
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<ErrorPage />
    },
    {
      path:'/register',
      element:<Register/>,
      errorElement:<ErrorPage />
    },
    {
      path:'/mycarts/:userId',
      element:<PrivateRoutes><MyCart/></PrivateRoutes>,
      errorElement:<ErrorPage />,
      loader: ({params})=> fetch(`https://b8a10-brandshop-server-side-two.vercel.app/mycarts/${params.userId}`)
    },
])

export default Routes;