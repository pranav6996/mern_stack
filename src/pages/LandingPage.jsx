import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { MessageSquare, Shield, Zap, Globe, Heart } from 'lucide-react';

const LandingPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30 overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <MessageSquare className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">ChatApp</h1>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#testimonials" className="hover:text-white transition-colors">Community</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/login">
                            <Button variant="ghost" size="sm">Log in</Button>
                        </Link>
                        <Link to="/signup">
                            <Button size="sm">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10 opacity-30" />

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="space-y-8"
                    >
                        <motion.h1
                            variants={fadeIn}
                            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                        >
                            Connect with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Anyone, Anywhere.</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeIn}
                            className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed"
                        >
                            Experience the future of communication. Fast, secure, and beautifully designed for the modern web.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                            <Link to="/signup">
                                <Button className="h-14 px-8 text-lg rounded-2xl shadow-xl shadow-primary/20">Start Chatting Now</Button>
                            </Link>
                            <Button variant="ghost" className="h-14 px-8 text-lg rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5">View Demo</Button>
                        </motion.div>

                        <motion.div variants={fadeIn} className="flex items-center gap-4 text-sm text-slate-500 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-800 flex items-center justify-center overflow-hidden">
                                        <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <p>Trusted by 10,000+ users</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative z-10 bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Mock Chat UI */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-slate-700" />
                                <div className="space-y-2">
                                    <div className="w-32 h-4 bg-slate-700 rounded" />
                                    <div className="w-20 h-3 bg-slate-800 rounded" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-surface/50 p-4 rounded-2xl rounded-tl-none max-w-[80%] border border-white/5">
                                    <div className="w-full h-2 bg-slate-700 rounded mb-2" />
                                    <div className="w-2/3 h-2 bg-slate-700 rounded" />
                                </div>
                                <div className="bg-primary p-4 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-white shadow-lg shadow-primary/20">
                                    <p className="text-sm">Hey! I just tried this new chat app. It's amazing! 🚀</p>
                                </div>
                                <div className="bg-surface/50 p-4 rounded-2xl rounded-tl-none max-w-[80%] border border-white/5">
                                    <p className="text-sm text-slate-300">The animations are so smooth. Love the dark mode too!</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-surface/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
                        >
                            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-5 -left-5 bg-surface/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
                        >
                            <Shield className="w-8 h-8 text-green-500" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-surface/20 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why choose us?</h2>
                        <p className="text-slate-400 text-lg">We didn't just build a chat app. We built a connection engine.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Lightning Fast", desc: "Real-time message delivery with sub-millisecond latency." },
                            { icon: Shield, title: "Secure by Design", desc: "Your messages are privately stored and protected." },
                            { icon: Globe, title: "Global Scale", desc: "Connect with friends across borders without lag." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-surface/30 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to start chatting?</h2>
                    <p className="text-xl text-slate-400 mb-10">Join thousands of users who are already enjoying the future of messaging.</p>
                    <Link to="/signup">
                        <Button className="h-16 px-12 text-xl rounded-2xl shadow-xl shadow-primary/20">Create Free Account</Button>
                    </Link>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[100px] -z-10" />
            </section>

            <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-sm">
                <p>&copy; {new Date().getFullYear()} ChatApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
