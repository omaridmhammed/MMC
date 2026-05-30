'use client';

import { useEffect, useState } from 'react';
import { toZonedTime } from 'date-fns-tz';

const TIMEZONE = 'America/Toronto';

export function getHoursStatus(dateParam: Date = new Date()): { isOpen: boolean; text: string } {
  // Use date-fns-tz to convert the given absolute time to Toronto time
  const zonedDate = toZonedTime(dateParam, TIMEZONE);
  const day = zonedDate.getDay();
  const hour = zonedDate.getHours();

  if (day === 0) { // Sunday
    return { isOpen: false, text: 'Closed — opens Monday 9 AM' };
  }

  if (day >= 1 && day <= 5) { // Mon - Fri
    if (hour < 9) return { isOpen: false, text: 'Closed — opens today 9 AM' };
    if (hour >= 17) {
      if (day === 5) return { isOpen: false, text: 'Closed — opens Saturday 9 AM' };
      return { isOpen: false, text: 'Closed — opens tomorrow 9 AM' };
    }
    return { isOpen: true, text: 'Open now until 5 PM' };
  }

  if (day === 6) { // Saturday
    if (hour < 9) return { isOpen: false, text: 'Closed — opens today 9 AM' };
    if (hour >= 13) return { isOpen: false, text: 'Closed — opens Monday 9 AM' };
    return { isOpen: true, text: 'Open now until 1 PM' };
  }
  
  return { isOpen: false, text: 'Closed' };
}

export function HoursStatus({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState({ isOpen: false, text: 'Loading...' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setStatus(getHoursStatus());
    setMounted(true);
    const interval = setInterval(() => {
      setStatus(getHoursStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <span className={`inline-block w-40 h-5 bg-surface-2 animate-pulse rounded ${className}`} />;

  return (
    <span className={`inline-flex items-center gap-2 text-sm font-medium ${className}`}>
      <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-success animate-pulse' : 'bg-ink-muted'}`} aria-hidden="true" />
      <span className={status.isOpen ? 'text-ink' : 'text-ink-muted'}>{status.text}</span>
    </span>
  );
}
