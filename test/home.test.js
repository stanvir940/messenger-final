import React from 'react';
import { render } from '@testing-library/react-native';
import ChatsScreen from '../screens/ChatsScreen';
import { UserType } from '../UserContext';

// Mock the useEffect hook
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('ChatsScreen component', () => {
  it('renders correctly', () => {
    const userId = 'testUserId';
    const setUserId = jest.fn();

    render(
      <UserType.Provider value={{ userId, setUserId }}>
        <ChatsScreen />
      </UserType.Provider>
    );

    expect(React.useEffect).toHaveBeenCalledTimes(1);
    expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function), []);
  });

  // Add more test cases here if needed
});
