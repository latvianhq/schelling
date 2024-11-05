'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { EnterForm } from './_components/enter-form';
import { InviteForm } from './_components/invite-form';

enum Step {
  Invite,
  Enter,
}

export default function Signup() {
  const [step, setStep] = useState<Step>(Step.Invite);

  return (
    <main
      className={twMerge(
        'container flex flex-1 items-center justify-center transition-all duration-500',
        step === Step.Enter && 'backdrop-blur-md',
      )}
    >
      {step === Step.Invite ? <InviteForm onProceed={() => setStep(Step.Enter)} /> : <EnterForm />}
    </main>
  );
}
