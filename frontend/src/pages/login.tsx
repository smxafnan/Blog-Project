import {
  AppShell,
  Group,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Anchor,
  Paper,
  Title,
  Center,
  Grid, // Import Grid
  // No Tabs needed
} from '@mantine/core';
import { useForm } from '@mantine/form';

// Define interfaces for your form values
interface LoginFormValues {
  email: string;
  password: string;
}

interface SignupFormValues {
  username: string;
  email: string;
  password: string;
  // No confirmPassword needed
}

function LoginPage() {
  // No activeTab state needed for switching

  // Form for Login
  const loginForm = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters'),
    },
  });

  // Form for Signup
  const signupForm = useForm<SignupFormValues>({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate: {
      username: (value) => (value.length >= 3 ? null : 'Username must be at least 3 characters'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters'),
      // No confirmPassword validation needed
    },
  });

  const handleLoginSubmit = (values: LoginFormValues) => {
    console.log('Login form submitted:', values);
    // Backend API call for authentication
  };

  const handleSignupSubmit = (values: SignupFormValues) => {
    console.log('Signup form submitted:', values);
    // Backend API call for user registration
  };

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="center">
          <Text size="xl" fw={700}>
            Systemmetrix Blog
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Center style={{ minHeight: 'calc(100vh - 60px - 2rem)' }}>
          {/* Use Grid to place forms side-by-side */}
          <Grid
            justify="center" // Center the grid columns
            align="stretch" // Align items to the top if forms have different heights
            gutter="xl" // Space between forms
            style={{ maxWidth: 850, width: '100%' }} // Max width for the entire pair of forms
          >
            {/* Login Form Column */}
            <Grid.Col span={{ base: 12, sm: 6 }}> {/* 1 column on small screens, 2 columns on medium+ */}
              <Paper withBorder shadow="md" p={30} radius="md" style={{ height: '100%' }}> {/* Ensure same height */}
                <Title order={2} size="h3" ta="center" mb="xl">
                  Welcome back!
                </Title>
                <form onSubmit={loginForm.onSubmit(handleLoginSubmit)}>
                  <TextInput
                    label="Email"
                    placeholder="you@mantine.dev"
                    required
                    {...loginForm.getInputProps('email')}
                  />
                  <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                    {...loginForm.getInputProps('password')}
                  />
                  <Group justify="space-between" mt="lg">
                    <Anchor component="button" type="button" c="dimmed" size="xs">
                      Forgot password?
                    </Anchor>
                  </Group>
                  <Button type="submit" fullWidth mt="xl">
                    Sign in
                  </Button>
                </form>
              </Paper>
            </Grid.Col>

            {/* Signup Form Column */}
            <Grid.Col span={{ base: 12, sm: 6 }}> {/* 1 column on small screens, 2 columns on medium+ */}
              <Paper withBorder shadow="md" p={30} radius="md" style={{ height: '100%' }}> {/* Ensure same height */}
                <Title order={2} size="h3" ta="center" mb="xl">
                  Create your account
                </Title>
                <form onSubmit={signupForm.onSubmit(handleSignupSubmit)}>
                  <TextInput
                    label="Username"
                    placeholder="Your username"
                    required
                    {...signupForm.getInputProps('username')}
                  />
                  <TextInput
                    label="Email"
                    placeholder="you@mantine.dev"
                    required
                    mt="md"
                    {...signupForm.getInputProps('email')}
                  />
                  <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                    {...signupForm.getInputProps('password')}
                  />
                  {/* Confirm Password field removed */}
                  <Button type="submit" fullWidth mt="xl">
                    Sign up
                  </Button>
                </form>
              </Paper>
            </Grid.Col>
          </Grid>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}

export default LoginPage;