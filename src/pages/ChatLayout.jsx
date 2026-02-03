import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const ChatLayout = () => {
    return (
        <div className="flex h-screen bg-background overflow-hidden text-slate-100 font-sans selection:bg-primary/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex w-full max-w-[1600px] mx-auto shadow-2xl overflow-hidden sm:my-4 sm:rounded-2xl sm:border sm:border-white/5 sm:bg-surface/20 backdrop-blur-2xl">
                <Sidebar />
                <ChatWindow />
            </div>
        </div>
    );
};

export default ChatLayout;
