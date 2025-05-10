interface AuthLayoutType {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Readonly<AuthLayoutType>) {
  return (
    <div>
      <div className="border-b-2 p-4">Top bar</div>

      {children}
      <div className="border-t-2 p-4"> footer</div>
    </div>
  );
}
