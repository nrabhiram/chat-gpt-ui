import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { ChatPage } from './pages/Chat';
import { ErrorPage } from './pages/Error/Error';
import { AboutPage } from './pages/About/About';
import { Layout } from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'chat/:chatId', element: <ChatPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
