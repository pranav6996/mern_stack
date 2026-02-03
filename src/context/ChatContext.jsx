import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
    const { user } = useAuth();
    const [chats, setChats] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);

    // Load chats from local storage when user changes
    useEffect(() => {
        if (user) {
            const savedChats = localStorage.getItem(`chat_app_chats_${user.id}`);
            if (savedChats) {
                setChats(JSON.parse(savedChats));
            } else {
                setChats([]);
            }
        } else {
            setChats([]);
            setActiveChatId(null);
        }
    }, [user]);

    // Save chats whenever they change
    useEffect(() => {
        if (user && chats.length > 0) {
            localStorage.setItem(`chat_app_chats_${user.id}`, JSON.stringify(chats));
        }
    }, [chats, user]);

    const createChat = (contactEmail, contactName) => {
        return new Promise((resolve, reject) => {
            if (contactEmail === user.email) {
                reject("You cannot chat with yourself.");
                return;
            }

            const existingChat = chats.find(c => c.contactEmail === contactEmail);
            if (existingChat) {
                setActiveChatId(existingChat.id);
                resolve(existingChat);
                return;
            }

            const newChat = {
                id: Date.now().toString(),
                contactEmail,
                contactName: contactName || contactEmail.split('@')[0], // Use provided name or fallback
                contactAvatar: `https://ui-avatars.com/api/?name=${contactName || contactEmail.split('@')[0]}&background=random`,
                messages: [],
                lastMessage: null,
                lastMessageTime: null,
            };

            setChats(prev => [newChat, ...prev]);
            setActiveChatId(newChat.id);
            resolve(newChat);
        });
    };

    const sendMessage = (text) => {
        if (!activeChatId) return;

        setChats(prev => prev.map(chat => {
            if (chat.id === activeChatId) {
                const newMessage = {
                    id: Date.now(),
                    text,
                    senderId: user.id,
                    timestamp: new Date().toISOString(),
                };
                return {
                    ...chat,
                    messages: [...chat.messages, newMessage],
                    lastMessage: text,
                    lastMessageTime: newMessage.timestamp
                };
            }
            return chat;
        }));
    };

    const activeChat = chats.find(c => c.id === activeChatId) || null;

    const value = {
        chats,
        activeChat,
        activeChatId, // expose ID for selection logic
        setActiveChatId, // expose setter
        createChat,
        sendMessage
    };

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
};
