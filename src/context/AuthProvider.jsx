import React, { createContext, useState, useEffect } from "react";

// Create an AuthContext
export const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Initial state for user

  // Load user from localStorage if it exists (for session persistence)
  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  // Login Function (Mock API call)
  const login = async ({ email, password }) => {
    // Mocked authentication check (replace with actual API call)
    if (email === "test@example.com" && password === "password123") {
      const userData = { email };  // Store the user data
      localStorage.setItem("user", JSON.stringify(userData));  // Save user data to localStorage
      setUser(userData);  // Set user data in state
    } else {
      throw new Error("Invalid email or password.");
    }
  };

  // Signup Function (Mock API call)
  const signup = async ({ email, password }) => {
    // Mocked signup process (replace with actual API call)
    if (email && password) {
      const newUser = { email };  // Create user
      localStorage.setItem("user", JSON.stringify(newUser));  // Save user to localStorage
      setUser(newUser);  // Set user in state
    } else {
      throw new Error("Signup failed. Please try again.");
    }
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("user");  // Clear user data from localStorage
    setUser(null);  // Set user state to null
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
