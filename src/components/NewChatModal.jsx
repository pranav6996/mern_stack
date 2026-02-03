import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import Button from './Button';
import Input from './Input';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NewChatModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const { createChat } = useChat();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            await createChat(email, name);
            onClose();
            setEmail('');
            setName('');
        } catch (err) {
            setError('Error: ' + err);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-md bg-surface border border-white/5 rounded-2xl p-6 shadow-2xl"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">New Chat</h3>
                        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Contact Name (Optional)</label>
                            <Input
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">User Email</label>
                            <Input
                                type="email"
                                placeholder="Enter email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <div className="flex justify-end gap-3 mt-6">
                            <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                            <Button type="submit">Start Chat</Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default NewChatModal;
