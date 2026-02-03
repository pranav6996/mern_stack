import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import Input from './Input';
import { X, RefreshCw, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfileModal = ({ isOpen, onClose }) => {
    const { user, updateUser } = useAuth();
    const [name, setName] = useState(user?.name || '');
    const [gender, setGender] = useState(user?.gender || '');
    const [dob, setDob] = useState(user?.dob || '');
    const [loading, setLoading] = useState(false);

    // Reset local state when modal opens
    React.useEffect(() => {
        if (isOpen && user) {
            setName(user.name);
            setGender(user.gender || '');
            setDob(user.dob || '');
        }
    }, [isOpen, user]);

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        setLoading(true);
        await updateUser({ name, gender, dob });
        setLoading(false);
        onClose();
    };

    const regenerateAvatar = async () => {
        setLoading(true);
        const randomSeed = Math.random().toString(36).substring(7);
        const newAvatar = `https://ui-avatars.com/api/?name=${name || 'User'}&background=random&length=1&bold=true&seed=${randomSeed}`;
        await updateUser({ avatar: newAvatar });
        setLoading(false);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="w-full max-w-md bg-surface border border-white/10 rounded-3xl p-6 shadow-2xl"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-white">Edit Profile</h3>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex flex-col items-center mb-8">
                        <div className="relative group">
                            <img
                                src={user?.avatar}
                                alt="Profile"
                                className="w-24 h-24 rounded-full border-4 border-surface shadow-xl"
                            />
                            <button
                                onClick={regenerateAvatar}
                                disabled={loading}
                                className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                                title="Regenerate Avatar"
                            >
                                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                            </button>
                        </div>
                        <p className="mt-4 text-sm text-slate-400">{user?.email}</p>
                    </div>

                    <form onSubmit={handleSave} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Display Name</label>
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Gender</label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="flex h-11 w-full rounded-xl border border-slate-700 bg-surface/50 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Date of Birth</label>
                                <Input
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    className="bg-surface/50 text-white [&::-webkit-calendar-picker-indicator]:invert"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                            <Button type="submit" disabled={loading} className="gap-2">
                                {loading ? 'Saving...' : (
                                    <>
                                        <Save className="w-4 h-4" /> Save Changes
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProfileModal;
