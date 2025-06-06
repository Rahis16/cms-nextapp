// utils/auth.ts
import axios from 'axios';

export interface UserAuthStatus {
  authenticated: boolean;
  username: string;
  is_staff: boolean;
  is_superuser: boolean;
  email: string;
}

// Check if user is authenticated and return status object
export const getAuthStatus = async (): Promise<UserAuthStatus | null> => {
  try {
    const res = await axios.get('http://localhost:8000/auth/status/', {
      withCredentials: true,
    });
    return res.data as UserAuthStatus;
  } catch (error) {
    return null;
  }
};

// Logout user
export const logout = async () => {
  try {
    await axios.post('http://localhost:8000/auth/logout/', {}, {
      withCredentials: true,
    });
    window.location.href = '/login';
  } catch (err) {
    console.error("Logout failed", err);
  }
};
