import { 
  AppShell, Burger, Group, NavLink as MantineNavLink
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PictureLayout from './PictureLayout';
import { DemoPage } from './Demo';

const routes = [
  { path: "/", label: "Home", element: <div>Home Page</div> },
  { path: "/contact", label: "Contact", element: <DemoPage/> },
  { path: "/about", label: "About", element: <PictureLayout/> },
];

export default function App() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <BrowserRouter>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <MantineLogo size={30} />
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          {routes.map(({ path, label }) => (
            <MantineNavLink
              key={path}
              component={"div"}
              label={label}
              renderRoot={(props) => <NavLink {...props} to={path} onClick={close}/>}
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
