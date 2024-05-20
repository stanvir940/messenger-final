import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    replace: jest.fn(),
    navigate: jest.fn(),
  }),
}));

describe('LoginScreen component', () => {
  it('renders email and password input fields', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    const emailInput = getByPlaceholderText('enter Your Email');
    const passwordInput = getByPlaceholderText('Passowrd');

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it('updates email and password when typing into input fields', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    const emailInput = getByPlaceholderText('enter Your Email');
    const passwordInput = getByPlaceholderText('Passowrd');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    expect(emailInput.props.value).toEqual('test@example.com');
    expect(passwordInput.props.value).toEqual('password123');
  });

  it('calls handleLogin function when login button is pressed', () => {
    const { getByText } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    const loginButton = getByText('Login');
    fireEvent.press(loginButton);

    // Here you can add assertions to check if the handleLogin function is called
  });
});
