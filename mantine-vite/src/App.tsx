import {
  createStyles,
  Navbar,
  Group,
  Code,
  Text,
  getStylesRef,
  rem,
  AppShell,
} from '@mantine/core'
import { MantineLogo } from '@mantine/ds';
import { useState } from 'react'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import { routes } from './Menus'

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
      },
    },
  },
}))


export default function App() {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Home')

  const links = routes.map((route) => (
    <Text
      key={route.path}
      className={cx(classes.link, {
        [classes.linkActive]: route.name === active,
      })}
      component={Link}
      variant="link"
      to={route.path}
      onClick={() => {
        setActive(route.name)
      }}
    >
      {route.name}
    </Text>
  ))

  return (
    <BrowserRouter>
      <AppShell
        navbar={
          <Navbar width={{ sm: 300 }} p="md">
            <Navbar.Section grow>
              <Group className={classes.header} position="apart">
                <MantineLogo size={28} />
                <Code sx={{ fontWeight: 700 }}>v0.0.7</Code>
              </Group>
              {links}
            </Navbar.Section>
          </Navbar>
        }
      >
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
