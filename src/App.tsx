import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './context/toogle.provider';
import Project from './pages/Project';
import Index from './pages/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/project',
        element: <Project />,
      },
    ],
  },
]);

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeContext.Provider value={colorMode}>
          <RouterProvider router={router} />
        </ColorModeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
