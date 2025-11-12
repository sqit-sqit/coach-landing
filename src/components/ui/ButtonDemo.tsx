"use client";

import React from 'react';
import { Button } from './Button';

const ButtonDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Button States Demo</h1>
      
      {/* Primary Button States */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Primary Button - Big Size</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-medium">Default State</h3>
            <Button variant="primary" size="big" state="default">
              Get started
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Hover State</h3>
            <Button variant="primary" size="big" state="hover">
              Get started
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Focused State</h3>
            <Button variant="primary" size="big" state="focused">
              Get started
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Clicked State</h3>
            <Button variant="primary" size="big" state="clicked">
              Get started
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Disabled State</h3>
            <Button variant="primary" size="big" state="disabled" disabled>
              Get started
            </Button>
          </div>
        </div>
      </div>

      {/* Other Sizes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Other Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm">
            Small Button
          </Button>
          <Button variant="primary" size="md">
            Medium Button
          </Button>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
          <Button variant="primary" size="small">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Secondary Button States */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Secondary Button - Big Size (White Button)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-medium">Default State</h3>
            <Button variant="secondary" size="big" state="default">
              Get started
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Hover State</h3>
            <Button variant="secondary" size="big" state="hover">
              Get started
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Focused State</h3>
            <Button variant="secondary" size="big" state="focused">
              Get started
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Clicked State</h3>
            <Button variant="secondary" size="big" state="clicked">
              Get started
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Disabled State</h3>
            <Button variant="secondary" size="big" state="disabled" disabled>
              Get started
            </Button>
          </div>
        </div>
      </div>

      {/* Other Variants */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Other Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="big">
            Outline Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ButtonDemo };
