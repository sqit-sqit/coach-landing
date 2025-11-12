"use client";

import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@/components/ui';
import { useTranslations } from '@/hooks/useTranslations';

interface BreadcrumbsSectionProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbsSection: React.FC<BreadcrumbsSectionProps> = ({ items, className }) => {
  return (
    <div className="bg-white">
      <Breadcrumbs items={items} className={className} />
    </div>
  );
};

