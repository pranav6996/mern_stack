import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import { LogOut, Plus, MessageSquare, Search } from 'lucide-react';
import NewChatModal from './NewChatModal';
import ProfileModal from './ProfileModal';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const { chats, activeChatId, setActiveChatId } = useChat();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredChats = chats.filter(chat =>
        chat.contactName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.contactEmail?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-80 border-r border-white/5 bg-surface/30 flex flex-col h-full backdrop-blur-md">
            {/* Header */}
            <div className="p-4 border-b border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => setIsProfileOpen(true)} className="flex items-center gap-3 hover:bg-white/5 p-2 -ml-2 rounded-xl transition-colors text-left">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                            <img src={user?.avatar} alt="Profile" className="h-full w-full rounded-full bg-surface" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">{user?.name}</h3>
                            <p className="text-xs text-slate-400">Online</p>
                        </div>
                    </button>
                    <button title="Logout" onClick={logout} className="text-slate-400 hover:text-white transition-colors">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        placeholder="Search chats..."
                        className="w-full bg-background/50 border border-transparent focus:border-primary/50 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredChats.length === 0 ? (
                    <div className="text-center p-4 mt-10">
                        <p className="text-slate-500 text-sm">No chats found.</p>
                    </div>
                ) : (
                    filteredChats.map(chat => (
                        <motion.button
                            layout
                            key={chat.id}
                            onClick={() => setActiveChatId(chat.id)}
                            className={cn(
                                "w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left group",
                                activeChatId === chat.id ? "bg-primary/20 hover:bg-primary/30" : "hover:bg-white/5"
                            )}
                        >
                            <div className="relative">
                                <img src={chat.contactAvatar} alt={chat.contactName} className="w-10 h-10 rounded-full bg-slate-700" />
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full"></span>
                            </div>

                            <div className="flex-1 overflow-hidden">
                                <div className="flex justify-between items-baseline">
                                    <h4 className={cn("font-medium truncate", activeChatId === chat.id ? "text-white" : "text-slate-200")}>
                                        {chat.contactName}
                                    </h4>
                                    {chat.lastMessageTime && (
                                        <span className="text-[10px] text-slate-500">
                                            {new Date(chat.lastMessageTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-slate-400 truncate mt-0.5">
                                    {chat.lastMessage || <span className="italic opacity-50">No messages yet</span>}
                                </p>
                            </div>
                        </motion.button>
                    ))
                )}
            </div>

            {/* New Chat Button */}
            <div className="p-4 border-t border-white/5">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-medium transition-all shadow-lg shadow-primary/20"
                >
                    <Plus className="w-5 h-5" />
                    <span>New Chat</span>
                </button>
            </div>

            <NewChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </div>
    );
};

export default Sidebar;
