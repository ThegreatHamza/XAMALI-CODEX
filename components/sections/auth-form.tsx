export function AuthForm({ type }: { type: 'login' | 'signup' | 'forgot' | 'reset' }) {
  return (
    <form className="card mx-auto max-w-xl space-y-4">
      {type === 'signup' && (
        <>
          <select className="input"><option>Worker</option><option>Employer</option></select>
          <input className="input" placeholder="Full name / Company name" />
        </>
      )}
      <input className="input" type="email" placeholder="Email" />
      {type !== 'forgot' && <input className="input" type="password" placeholder="Password" />}
      {type === 'signup' && <input className="input" placeholder="Phone number" />}
      <button className="btn-primary w-full" type="submit">Submit</button>
    </form>
  );
}
