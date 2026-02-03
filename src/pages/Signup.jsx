import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await signup(name, email, password);
            navigate('/chat');
        } catch (err) {
            setError('Failed to create account. ' + err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md space-y-8 bg-surface/30 p-8 rounded-3xl border border-white/5 backdrop-blur-xl shadow-2xl"
            >
                <div className="text-center">
                    <motion.div
                        initial={{ rotate: 10 }}
                        animate={{ rotate: 0 }}
                        className="mx-auto h-12 w-12 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/30"
                    >
                        <MessageSquare className="h-6 w-6 text-white" />
                    </motion.div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">Create Account</h2>
                    <p className="mt-2 text-sm text-slate-400">Get started with your free account</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <Input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </Button>

                    <p className="text-center text-sm text-slate-400">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-primary hover:text-secondary transition-colors">
                            Sign in
                        </Link>
                    </p>
                </form>
            </motion.div>
        </div>
    );
};

export default Signup;
