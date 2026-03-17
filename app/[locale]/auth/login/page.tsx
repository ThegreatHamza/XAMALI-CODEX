import { AuthForm } from '@/components/sections/auth-form';
import { PageShell } from '@/components/sections/page-shell';

export default function LoginPage() {
  return <PageShell title="Welcome back" subtitle="Log in to your XAMALI account."><AuthForm type="login" /></PageShell>;
}
