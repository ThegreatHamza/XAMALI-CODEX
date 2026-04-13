import { AuthForm } from '@/components/sections/auth-form';
import { PageShell } from '@/components/sections/page-shell';

export default function ForgotPasswordPage() {
  return <PageShell title="Forgot password" subtitle="Enter your email to receive a reset link."><AuthForm type="forgot" /></PageShell>;
}
