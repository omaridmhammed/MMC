'use client';

import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export function Disclosure({ items }: { items: { title: React.ReactNode, content: React.ReactNode }[] }) {
  return (
    <Accordion className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-serif text-xl sm:text-2xl text-primary">{item.title}</AccordionTrigger>
          <AccordionContent className="text-ink-muted text-base sm:text-lg">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
