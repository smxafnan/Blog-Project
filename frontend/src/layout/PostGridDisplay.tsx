import { Grid, Pagination, Center } from '@mantine/core';
import PostCard from '../components/PostCard'; // Assuming your PostCard is imported correctly
import { useState } from 'react'; // Import useState for managing state
import { posts } from '../Data/postData'; // Import your posts dataq
import { Link } from 'react-router-dom';

const POSTS_PER_PAGE = 8;
function PostsGridDisplay() {
  const [activePage, setPage] = useState(1); // State to manage the current active page

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Determine which posts to display based on the active page
  const startIndex = (activePage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsToDisplay = posts.slice(startIndex, endIndex);

  return (
    <Grid> {/* This is your main Grid container for the page layout */}
      {/* This outer Grid.Col defines a section that spans the full width */}
      <Grid.Col span={12}>
        <h2>Our Awesome Posts</h2>

        {/* Inner Grid for laying out the individual PostCards horizontally */}
        <Grid>
          {postsToDisplay.map((post) => ( // Use postsToDisplay here
            <Grid.Col
              span={{ base: 12, md: 6 }} // 1 post per row on small, 2 per row on medium+
              key={post.id}
            >
              <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
              <PostCard
                id={post.id}
                title={post.title}
                tags={post.tags}
                imageUrl={post.imageUrl}
              />
              </Link>
            </Grid.Col>
          ))}
        </Grid>

        {/* Mantine Pagination Component */}
        <Center mt="xl" mb="md"> {/* Center the pagination component */}
          <Pagination
            value={activePage}
            onChange={setPage}
            total={totalPages}
            siblings={1} // Number of siblings on each side of active page
            boundaries={1} // Number of boundaries pages
            // You can add other props like size, radius, color, etc.
          />
        </Center>

      </Grid.Col>
    </Grid>
  );
}

export default PostsGridDisplay;