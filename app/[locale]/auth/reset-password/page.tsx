import { AuthForm } from '@/components/sections/auth-form';
import { PageShell } from '@/components/sections/page-shell';

export default function ResetPasswordPage() {
  return <PageShell title="Reset password" subtitle="Set a secure new password."><AuthForm type="reset" /></PageShell>;
}
