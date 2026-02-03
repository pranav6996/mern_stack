import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for persisted user
        const savedUser = localStorage.getItem('chat_app_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login logic
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!email || !password) {
                    reject("Please enter all fields");
                    return;
                }
                // For demo, just log them in if email format is valid
                const mockUser = {
                    id: btoa(email), // Simple ID generation
                    name: email.split('@')[0],
                    email,
                    avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`
                };
                setUser(mockUser);
                localStorage.setItem('chat_app_user', JSON.stringify(mockUser));
                resolve(mockUser);
            }, 800);
        });
    };

    const signup = (name, email, password) => {
        // Mock signup logic
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!name || !email || !password) {
                    reject("Please enter all fields");
                    return;
                }
                const mockUser = {
                    id: btoa(email),
                    name,
                    email,
                    avatar: `https://ui-avatars.com/api/?name=${name}&background=random`
                };
                setUser(mockUser);
                localStorage.setItem('chat_app_user', JSON.stringify(mockUser));
                resolve(mockUser);
            }, 800);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('chat_app_user');
    };

    const updateUser = (updates) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const updatedUser = { ...user, ...updates };
                setUser(updatedUser);
                localStorage.setItem('chat_app_user', JSON.stringify(updatedUser));
                resolve(updatedUser);
            }, 500);
        });
    };

    const value = {
        user,
        login,
        signup,
        logout,
        updateUser,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
