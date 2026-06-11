'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const SUGGESTIONS = [
  'Are you accepting new patients?',
  'What services do you offer?',
  'Where are the clinics located?',
  'How do I book an appointment?',
];

export function ChatAssistant() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi there! I'm the My Medical Centers Virtual Assistant. 🏥\n\nHow can I help you today? Ask me about our locations, opening hours, booking appointments, or registering as a new patient.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll to bottom of chat log
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  if (!mounted) return null;

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(36).substring(7),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      // Send chat history to backend API route
      const history = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response from assistant.');
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          role: 'assistant',
          content: data.reply,
          timestamp: new Date(),
        },
      ]);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  // Safe formatting helper to render basic markdown-like structures (bold, links, newlines)
  const renderMessageContent = (text: string) => {
    return text.split('\n').map((paragraph, pIdx) => {
      // Split by bold markdown **text**
      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);

      return (
        <p key={pIdx} className={cn('text-sm leading-relaxed', pIdx > 0 && 'mt-2')}>
          {parts.map((part, partIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={partIdx} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
            }

            // Simple text link parser for /book or web URLs
            if (part.includes('http://') || part.includes('https://') || part.includes('/book')) {
              const words = part.split(' ');
              return words.map((word, wIdx) => {
                if (word.startsWith('http://') || word.startsWith('https://')) {
                  return (
                    <a
                      key={wIdx}
                      href={word.replace(/[.,:;]$/, '')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary-deep font-medium hover:text-primary transition-colors break-all"
                    >
                      {word}{' '}
                    </a>
                  );
                }
                if (word === '/book') {
                  return (
                    <a
                      key={wIdx}
                      href="/book"
                      className="underline text-primary-deep font-medium hover:text-primary transition-colors"
                    >
                      booking page{' '}
                    </a>
                  );
                }
                return word + ' ';
              });
            }

            return part;
          })}
        </p>
      );
    });
  };

  const isBookPage = pathname === '/book';

  return (
    <div
      className={cn(
        "fixed right-6 z-50 flex flex-col items-end transition-all duration-300",
        isBookPage ? "bottom-6" : "bottom-24 md:bottom-6"
      )}
    >
      {/* ── Chat Window Panel ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="w-[380px] max-w-[calc(100vw-32px)] h-[560px] max-h-[calc(100vh-120px)] bg-surface border border-border shadow-premium-xl rounded-2xl flex flex-col overflow-hidden mb-4 glass-card"
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{
                background: 'linear-gradient(135deg, var(--primary-deep) 0%, var(--primary) 100%)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/12 backdrop-blur-md flex items-center justify-center text-white relative">
                  <Bot className="w-5 h-5" />
                  {/* Pulse active indicator */}
                  <span className="absolute bottom-0 right-0 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-base leading-tight">
                    MMC Assistant
                  </h3>
                  <p className="text-[10px] text-white/70 font-light tracking-wide uppercase">
                    Clinic Help Desk
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-colors outline-none"
                aria-label="Close chat"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-surface-2/30">
              {messages.map((msg) => {
                const isBot = msg.role === 'assistant';
                return (
                  <div
                    key={msg.id}
                    className={cn(
                      'flex items-start gap-2.5 max-w-[85%] reveal',
                      isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        'w-7.5 h-7.5 rounded-full flex items-center justify-center shrink-0 shadow-premium-sm text-xs font-semibold',
                        isBot
                          ? 'bg-primary/10 text-primary border border-primary/15'
                          : 'bg-primary-deep text-white'
                      )}
                    >
                      {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    </div>

                    {/* Chat Bubble */}
                    <div
                      className={cn(
                        'px-4 py-3 rounded-2xl',
                        isBot
                          ? 'bg-surface border border-border/80 text-ink-muted rounded-tl-sm'
                          : 'bg-primary-deep text-white rounded-tr-sm'
                      )}
                    >
                      {isBot ? (
                        renderMessageContent(msg.content)
                      ) : (
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Bot Loading Indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5 max-w-[80%] mr-auto">
                  <div className="w-7.5 h-7.5 rounded-full bg-primary/10 text-primary border border-primary/15 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-surface border border-border/80 px-4 py-3 rounded-2xl rounded-tl-sm">
                    <div className="flex items-center gap-1.5 py-1">
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-3 text-sm text-destructive border border-destructive/20 bg-destructive/5 rounded-xl">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions (Rendered only when not loading) */}
            {messages.length === 1 && !isLoading && (
              <div className="px-5 py-2.5 bg-surface border-t border-border/40">
                <p className="text-[11px] font-bold text-ink-muted/60 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-primary" /> Suggestions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((sug) => (
                    <button
                      key={sug}
                      onClick={() => handleSendMessage(sug)}
                      className="text-xs bg-surface-2 border border-border/80 hover:border-primary/40 hover:bg-surface-3 text-ink-muted hover:text-primary px-3 py-1.5 rounded-full transition-all text-left duration-200 outline-none"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-border bg-surface flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about hours, booking, location..."
                disabled={isLoading}
                className="flex-1 bg-surface-2 text-ink text-sm border border-border/60 hover:border-border focus:border-primary px-4 py-2.5 rounded-xl transition-colors outline-none disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                size="icon"
                className="h-10 w-10 shrink-0 bg-primary hover:bg-primary-hover text-white rounded-xl shadow-premium-sm flex items-center justify-center transition-colors"
              >
                <Send className="w-4.5 h-4.5" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Persistent Floating Toggle Button ─────────────────────────────── */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-premium-lg bg-gradient-to-tr from-primary-deep to-primary hover:shadow-glow cursor-pointer transition-shadow select-none duration-300 relative border border-white/10"
        aria-label="Toggle chat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent border border-white text-[9px] font-bold text-white shadow-premium-sm">
                1
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
