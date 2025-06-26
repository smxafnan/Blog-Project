import { AppShell, Group, Skeleton, Grid, ScrollArea, Container, Button, NavLink} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus ,IconHome2 , IconLogout, IconEdit  } from '@tabler/icons-react';// Example icons#
import {  Outlet, useMatch, } from "react-router-dom";
import { NavLink as RouterNavLink } from 'react-router-dom';
import { CreatePost } from '../Form/CreatePost'; // Adjust the import path as necessary
import { EditPost } from '../Form/UpdatePost';

function MyPageLayout() {
  const [opened] = useDisclosure();
  const isSmall = useMediaQuery('(max-width: 802px)'); // Adjust the breakpoint as needed
  const postMatch = useMatch('/post/:id');
  const isDetailView = !!postMatch;
  const postId = postMatch?.params.id;





  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);

  const fetchPostData = (id: string) => {
    return {
      title: `Post ${id}`,
      content: `This is the content for post ${id}`,
      tags: ['example', 'post', 'tags'], 
    };
  };

    // Logic to handle creating a new post
   const handleCreateSubmit = (values: { title: string; content: string }) => {
    console.log('Creating post:', values);
    closeModal();
    // Add your create post API call here
  };

  const handleEditSubmit = (values: { title: string; content: string; tags: string[]}) => {
    console.log('Updating post:', postId, values);
    closeModal();
    // Add your update post API call here
  };


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
              isDetailView
                ?<IconEdit size={17}/>
                :<IconPlus size={17} />}
                onClick={() => {
                if (isDetailView && postId) {
                  // For edit, we would typically fetch the existing post data here
                  openModal();
                } else {
                  // For create, just open the modal
                  openModal();
                }
              }}>
              {!isSmall && <span>{isDetailView? "Update Post": "Create Post"}</span>}
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
      {isDetailView ? (
        <EditPost
          opened={modalOpened}
          onClose={closeModal}
          initialValues={postId ? fetchPostData(postId) : { title: '', content: '', tags: [] }}
          onSubmit={handleEditSubmit}
        />
      ) : (
        <CreatePost
          opened={modalOpened}
          onClose={closeModal}
          onSubmit={handleCreateSubmit}
        />
      )}
    </AppShell>
  );
}

export default MyPageLayout;