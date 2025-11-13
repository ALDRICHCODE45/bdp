export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Este layout raíz solo pasa children
  // El layout con locale está en [locale]/layout.tsx
  return children;
}
