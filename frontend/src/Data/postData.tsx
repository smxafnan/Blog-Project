interface PostData {
  id: string;
  title: string;
  tags: string[]; // Array of strings for tags
  imageUrl?: string; // Optional image URL
  imageUrls?: string[]; // Optional array for multiple images (if you want to expand later)
  content?: string; // Optional content (which we won't display)
}

// Example data array
export const posts: PostData[] = [
  {
    id: '1',
    title: 'Norway Fjord Adventures',
    tags: ['On Sale', 'Nature'],
    imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    content: 'Explore the breathtaking fjords of Norway with our guided adventure tours. Experience nature like never before!',
  },
  {
    id: '2',
    title: 'Autumn Mountain Hike',
    tags: ['New', 'Adventure'],
    imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
    content: 'Join us for a scenic hike through colorful autumn mountains. Perfect for adventure seekers and nature lovers.',
  },
  {
    id: '3',
    title: 'City Break Escape',
    tags: ['Urban', 'Relax'],
    content: 'Take a break from your routine and enjoy a relaxing escape in the heart of the city. Discover hidden gems and unwind.',
  },
  {
    id: '4',
    title: 'Coastal Cycling Tour',
    tags: ['Active'],
    imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png',
    content: 'Cycle along beautiful coastlines and enjoy the fresh sea breeze. Suitable for all fitness levels.',
  },
  { id: '5', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '6', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '7', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '8', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '9', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '10', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '11', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '12', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '13', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '14', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '15', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '16', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '17', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '18', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '19', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '20', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '21', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '22', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '23', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '24', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '25', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '26', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '27', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '28', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '29', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '30', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '31', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '32', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '33', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '34', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '35', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '36', title: 'Post 5', tags: ['Tag E'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', content: 'Discover new adventures and make unforgettable memories with Post 5.' },
  { id: '37', title: 'Post 6', tags: ['Tag F'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', content: 'Post 6 brings you the latest updates and exciting stories from around the world.' },
  { id: '38', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
  { id: '39', title: 'Post 7', tags: ['Tag G'], imageUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', content: 'Experience the thrill and excitement with Post 7. Adventure awaits!' },
];