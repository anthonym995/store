'use client';

import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: string; // Allows you to pass 'max-w-md', 'max-w-2xl', etc.
}

export function Modal({ isOpen, onClose, title, description, children, maxWidth = 'max-w-2xl' }: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="bg-navy/80 animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm duration-300">
      <div
        className={`animate-in zoom-in-95 w-full ${maxWidth} flex max-h-[90vh] flex-col rounded-[2rem] bg-white shadow-2xl duration-300`}
      >
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 p-6 sm:px-8">
          <div>
            <h4 className="font-display text-navy text-xl font-bold">{title}</h4>
            {description && <p className="mt-1 text-xs text-gray-500">{description}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body (Scrollable if content is too long) */}
        <div className="custom-scrollbar overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
