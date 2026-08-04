import { Form, Head, setLayoutProps } from '@inertiajs/react';
import { ArrowLeft, Camera, Check, Search } from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

type Props = {
    passwordRules: string;
};

type Role = 'creator' | 'client';

const roles = [
    {
        value: 'creator' as Role,
        icon: Camera,
        title: "I'm a Creator",
        description:
            "I'm a photographer or videographer looking to showcase my work and manage bookings.",
    },
    {
        value: 'client' as Role,
        icon: Search,
        title: "I'm a Client",
        description:
            "I'm looking for talented visual media professionals for my project.",
    },
];

export default function Register({ passwordRules }: Props) {
    const [step, setStep] = useState<1 | 2>(1);
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);

    setLayoutProps(
        step === 1
            ? {
                  title: 'Join Vantage',
                  description: 'How do you want to use Vantage?',
              }
            : {
                  title: 'Create your account',
                  description: 'Enter your details below to get started',
              },
    );

    if (step === 1) {
        return (
            <>
                <Head title="Register" />
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {roles.map((role) => {
                            const isSelected = selectedRole === role.value;
                            return (
                                <button
                                    key={role.value}
                                    type="button"
                                    onClick={() =>
                                        setSelectedRole(role.value)
                                    }
                                    className={`relative cursor-pointer rounded-xl border-2 bg-white/[0.03] p-5 text-left transition-all duration-300 ${
                                        isSelected
                                            ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                                            : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                                    }`}
                                >
                                    {isSelected && (
                                        <div className="absolute right-3 top-3 text-amber-500">
                                            <Check className="size-4" />
                                        </div>
                                    )}
                                    <div
                                        className={`mb-3 flex size-10 items-center justify-center rounded-full ${
                                            isSelected
                                                ? 'bg-amber-500/20 text-amber-500'
                                                : 'bg-white/10 text-gray-400'
                                        }`}
                                    >
                                        <role.icon className="size-5" />
                                    </div>
                                    <h3 className="mb-1 text-sm font-semibold text-white">
                                        {role.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed text-gray-400">
                                        {role.description}
                                    </p>
                                </button>
                            );
                        })}
                    </div>

                    <Button
                        type="button"
                        className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:from-amber-500 hover:to-amber-400"
                        size="lg"
                        disabled={!selectedRole}
                        onClick={() => setStep(2)}
                    >
                        Continue
                    </Button>

                    <div className="text-center text-sm text-gray-400">
                        Already have an account?{' '}
                        <TextLink href={login()} tabIndex={6}>
                            Log in
                        </TextLink>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Head title="Register" />

            {/* Back button and role indicator */}
            <div className="mb-4 flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="size-3.5" />
                    Change role
                </button>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500">
                    {selectedRole === 'creator' ? 'Creator' : 'Client'}
                </span>
            </div>

            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <input
                                type="hidden"
                                name="role"
                                value={selectedRole ?? ''}
                            />

                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Full name"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="email@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <PasswordInput
                                    id="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Password"
                                    passwordrules={passwordRules}
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation">
                                    Confirm password
                                </Label>
                                <PasswordInput
                                    id="password_confirmation"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Confirm password"
                                    passwordrules={passwordRules}
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 w-full"
                                tabIndex={5}
                                data-test="register-user-button"
                            >
                                {processing && <Spinner />}
                                Create account
                            </Button>
                        </div>

                        <div className="text-center text-sm text-gray-400">
                            Already have an account?{' '}
                            <TextLink href={login()} tabIndex={6}>
                                Log in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
}

Register.layout = {
    title: 'Join Vantage',
    description: 'How do you want to use Vantage?',
};
