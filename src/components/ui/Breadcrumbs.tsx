"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  const { locale } = useTranslations();

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("w-full max-w-[1110px] mx-auto px-4 md:px-8 lg:px-0 py-4 md:py-6", className)}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm md:text-base">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-[#333] hover:text-[#666] transition-colors font-montserrat font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#666] font-montserrat font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

