'use client';

import React from 'react';

interface DatePickerProps {
  id?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export function DatePicker({
  id = 'date',
  label = 'Data',
  value,
  onChange,
  required = false,
  className = '',
  disabled = false,
}: DatePickerProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="date"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                   focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        required={required}
        disabled={disabled}
      />
    </div>
  );
}
