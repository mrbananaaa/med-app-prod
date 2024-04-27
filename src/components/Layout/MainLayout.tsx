type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="font-main min-h-screen bg-slate-100 antialiased">
      <div className="container px-4 py-6 pt-12">{children}</div>;
    </div>
  );
};

export default MainLayout;
