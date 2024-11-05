'use client';

import React, { MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange: (value: number) => void;
  className?: string;
  edges?: [number, number];
  disabled?: boolean;
}

export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  edges = [0, 100],
  onChange,
  className,
  disabled,
}: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const percentage = useMemo(() => ((value - min) / (max - min)) * 100, [value]);

  const calculateNewValue = (event: MouseEvent | React.MouseEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newPercentage = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      const newValue = Math.round(((newPercentage / 100) * (max - min)) / step) * step + min;

      return Math.min(Math.max(newValue, edges[0]), edges[1]);
    }

    return value;
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging && sliderRef.current) {
        const newValue = calculateNewValue(event);

        onChange(newValue);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, min, max, step, onChange]);

  const handleMouseDown: MouseEventHandler = (event) => {
    if (disabled) return;

    const newValue = calculateNewValue(event);

    onChange(newValue);

    setIsDragging(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    let newValue = value;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        newValue = Math.min(value + step, max);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        newValue = Math.max(value - step, min);
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
      default:
        return;
    }

    onChange(newValue);
  };

  return (
    <div
      ref={sliderRef}
      className={twMerge(
        'relative h-[7px] w-64 cursor-pointer rounded-full border border-white/10 bg-secondary-darker transition-all duration-300',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      role='slider'
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
    >
      <div
        className='absolute -left-[1px] -top-[1px] h-[calc(100%+2px)] rounded-full bg-primary'
        style={{ width: `${percentage}%` }}
      />

      <div
        className='absolute top-1/2 aspect-square h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[rgb(161,253,253)] bg-secondary-darker shadow-[0_0_12px_0_rgba(131,216,214,0.6)]'
        style={{ left: `${percentage}%` }}
      />
    </div>
  );
};
