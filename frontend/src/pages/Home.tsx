import { AppShell, Group, Skeleton, Grid, ScrollArea, Container, Button, NavLink} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus ,IconHome2 , IconLogout, IconEdit  } from '@tabler/icons-react';// Example icons#
import {  Outlet, useMatch} from "react-router-dom";
import { NavLink as RouterNavLink } from 'react-router-dom';

function MyPageLayout() {
  const [opened] = useDisclosure();
  const isSmall = useMediaQuery('(max-width: 802px)'); // Adjust the breakpoint as needed
  const IsDetailView = useMatch("/post/:id"); // Get the detail view context

  return (
    <AppShell
      header={{ height: 170,}}
      navbar={{
        width: 300,
        breakpoint: 'lg', // Navbar will collapse below 'sm' breakpoint (e.g., 640px)
        collapsed: { mobile: !opened, desktop: false }, // Control collapse behavior
      }}
      aside={{ width: 150, breakpoint: 'xl' ,collapsed: { mobile: !opened, desktop: false },}} // Optional aside section
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="xl" justify="space-between">
          <h1 style={{ margin: 0 }}>SystemMetrixs Personal Blog</h1>
          <Group>
            <Button variant="outline" color="blue" leftSection={
              IsDetailView
                ?<IconEdit size={17}/>
                :<IconPlus size={17} />}>
              {!isSmall && <span>{IsDetailView? "Update Post": "Create Post"}</span>}
            </Button>

            <Button variant="filled" color="red" leftSection={<IconLogout size={17} />}>
              {!isSmall && <span>Sign-Out</span>}
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      {/* --- AppShell.Navbar for responsive navigation --- */}
      <AppShell.Navbar p="md">
        
        {/* You can put your actual navigation links here */}

          

          <NavLink
            component={RouterNavLink}  // Use React Router NavLink as the underlying component
            to="/"
            label="Home"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            // `active` will be handled automatically by React Router NavLink
          />

        
        <h3>Tags</h3>
        <AppShell.Section grow component={ScrollArea}>  
          {/* this section is for tags */}
          
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />

          <Skeleton height={50} radius="md" mb="xs" />
        </AppShell.Section>
        <h3>Years</h3>
        <AppShell.Section grow component={ScrollArea}>  
          {/* this section is for years */}
          
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />

          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
          <Skeleton height={50} radius="md" mb="xs" />
        </AppShell.Section>

      </AppShell.Navbar>

      <AppShell.Main>
        <Container size = "1000">
        {/* --- Main Content Area (remains primary) --- */}
        <Grid>
          {/* The main content now takes up the full width, as the Navbar handles the sidebar */}
          <Grid.Col span={12}>
              <Outlet />
          </Grid.Col>
        </Grid>
        </Container>
      </AppShell.Main>
      <AppShell.Aside p="xs" >
        
      </AppShell.Aside>
    </AppShell>
  );
}

export default MyPageLayout;