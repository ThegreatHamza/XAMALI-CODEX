import { AuthForm } from '@/components/sections/auth-form';
import { PageShell } from '@/components/sections/page-shell';

export default function SignUpPage() {
  return <PageShell title="Create your XAMALI account" subtitle="Choose your role and start hiring or getting hired."><AuthForm type="signup" /></PageShell>;
}
