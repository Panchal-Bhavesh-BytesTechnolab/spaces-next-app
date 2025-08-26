"use client";
import React, { useState } from "react";

type CheckboxProps = {
  id: string;
  label: React.ReactNode;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  className = "",
  defaultChecked = false,
  onChange,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setChecked(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex items-center me-4">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={id}
        className={`ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${className}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
