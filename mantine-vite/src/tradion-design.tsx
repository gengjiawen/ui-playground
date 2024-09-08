import { 
    AppShell, Burger, Group, NavLink as MantineNavLink
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import { MantineLogo } from '@mantinex/mantine-logo';
  import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
  import PictureLayout from './PictureLayout';
  import { UploadPage } from './UploadPage';
  
  const routes = [
    { path: "/", label: "Home", element: <div>Home Page</div> },
    { path: "/contact", label: "Contact", element: <UploadPage/> },
    { path: "/about", label: "About", element: <PictureLayout/> },
  ];
  
  export default function App() {
    const [opened, { toggle }] = useDisclosure();
  
    return (
      <BrowserRouter>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { desktop: true, mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" px="md" >
              <Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <MantineLogo size={30} />
              </Group>
              <Group gap="sm" visibleFrom="sm">
                {routes.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? 'bold' : 'normal',
                      textDecoration: 'none',
                      color: 'inherit',
                    })}
                  >
                    {label}
                  </NavLink>
                ))}
              </Group>
            </Group>
          </AppShell.Header>
  
          <AppShell.Navbar p="md">
            {routes.map(({ path, label }) => (
              <MantineNavLink
                key={path}
                component={NavLink}
                to={path}
                label={label}
                onClick={() => toggle()}
              />
            ))}
          </AppShell.Navbar>
  
          <AppShell.Main>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    );
  }
  