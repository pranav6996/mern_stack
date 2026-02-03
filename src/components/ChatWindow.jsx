import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../context/ChatContext';
import { useAuth } from '../context/AuthContext';
import { Send, MoreVertical, Phone, Video } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWindow = () => {
    const { activeChat, sendMessage } = useChat();
    const { user } = useAuth();
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [activeChat?.messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        sendMessage(message);
        setMessage('');
    };

    if (!activeChat) {
        return (
            <div className="flex-1 flex items-center justify-center flex-col text-slate-500 bg-background/50 h-full">
                <div className="h-20 w-20 bg-surface rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 opacity-20" />
                </div>
                <p>Select a chat to start messaging</p>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col h-full bg-background/50 relative overflow-hidden">
            {/* Chat Header */}
            <div className="h-16 border-b border-white/5 bg-surface/30 backdrop-blur-md flex items-center justify-between px-6 z-10">
                <div className="flex items-center gap-4">
                    <img src={activeChat.contactAvatar} alt="Avatar" className="w-10 h-10 rounded-full bg-slate-700" />
                    <div>
                        <h3 className="font-semibold text-white">{activeChat.contactName}</h3>
                        <p className="text-xs text-slate-400">{activeChat.contactEmail}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                    <button className="hover:text-white transition-colors"><Phone className="w-5 h-5" /></button>
                    <button className="hover:text-white transition-colors"><Video className="w-5 h-5" /></button>
                    <button className="hover:text-white transition-colors"><MoreVertical className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {activeChat.messages.map((msg, index) => {
                    const isMe = msg.senderId === user.id;
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={msg.id}
                            className={cn("flex", isMe ? "justify-end" : "justify-start")}
                        >
                            <div className={cn(
                                "max-w-[70%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                                isMe
                                    ? "bg-primary text-white rounded-br-none"
                                    : "bg-surface border border-white/5 text-slate-200 rounded-bl-none"
                            )}>
                                <p>{msg.text}</p>
                                <span className={cn("text-[10px] block mt-1 text-right opacity-60", isMe ? "text-primary-foreground" : "text-slate-500")}>
                                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-surface/30 border-t border-white/5 backdrop-blur-md">
                <form onSubmit={handleSend} className="max-w-4xl mx-auto relative flex gap-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={!message.trim()}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-lg shadow-primary/20 aspect-square flex items-center justify-center"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatWindow;
