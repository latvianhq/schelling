'use client';

import { ElementType, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import AcademiaIcon from '@/assets/icons/academia.svg';
import EcologyIcon from '@/assets/icons/ecology.svg';
import { Checkbox } from '@/components/form-elements/checkbox';
import { Slider } from '@/components/slider';

interface Cause {
  icon: ElementType;
  label: string;
  value: number;
  checked: boolean;
}

interface CausesProps {
  className?: string;
}

export const Causes = ({ className }: CausesProps) => {
  const [causes, setCauses] = useState<Cause[]>([
    { icon: AcademiaIcon, label: 'Academia', value: 30, checked: true },
    { icon: EcologyIcon, label: 'Ecology', value: 0, checked: false },
    { icon: EcologyIcon, label: 'Ecology', value: 0, checked: false },
    { icon: AcademiaIcon, label: 'Academia', value: 30, checked: true },
  ]);

  const totalPercentage = causes.reduce((total, cause) => total + cause.value, 0);

  const handleSliderChange = (index: number, newValue: number) => {
    const updatedCauses = [...causes];
    updatedCauses[index].value = newValue;
    setCauses(updatedCauses);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedCauses = [...causes];
    if (updatedCauses[index].checked) {
      updatedCauses[index].value = 0;
    }
    updatedCauses[index].checked = !updatedCauses[index].checked;
    setCauses(updatedCauses);
  };

  return (
    <ul className={twMerge('flex flex-col gap-6', className)}>
      {causes.map((cause, index) => (
        <li key={index} className='flex items-center justify-between'>
          <p
            className={twMerge(
              'flex items-center gap-2 transition-all duration-300',
              cause.checked ? 'text-primary' : 'text-white',
            )}
          >
            <cause.icon className={twMerge('transition-opacity duration-300', !cause.checked && 'opacity-50')} />{' '}
            {cause.label}
          </p>

          <div className='flex flex-1 items-center justify-end gap-3'>
            {cause.checked && (
              <>
                <Slider
                  className='w-full max-w-[138px]'
                  value={cause.value}
                  edges={[0, 100 - (totalPercentage - cause.value)]}
                  onChange={(value) => handleSliderChange(index, value)}
                />

                <div
                  className={twMerge(
                    'flex h-6 w-[50px] items-center justify-center rounded-[6px] border border-white/10 bg-secondary-darker',
                  )}
                >
                  {cause.value}%
                </div>
              </>
            )}

            <Checkbox checked={cause.checked} onChange={() => handleCheckboxChange(index)} />
          </div>
        </li>
      ))}
    </ul>
  );
};
