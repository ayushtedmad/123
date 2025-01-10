import { useState } from 'react';

interface User {
  id: string;
  role: 'Admin' | 'Editor';
}

let currentUser: User | null = null;

export const login = async (email: string, password: string): Promise<User | null> => {
  // Simulate an API call for user authentication
  if (email === 'admin@example.com' && password === 'admin') {
    currentUser = { id: '1', role: 'Admin' };
    return currentUser;
  } else if (email === 'editor@example.com' && password === 'editor') {
    currentUser = { id: '2', role: 'Editor' };
    return currentUser;
  }
  return null;
};

export const logout = (): void => {
  currentUser = null;
};

export const getCurrentUser = (): User | null => {
  return currentUser;
};

export const isAuthenticated = (): boolean => {
  return currentUser !== null;
};

export const isAdmin = (): boolean => {
  return currentUser?.role === 'Admin';
};