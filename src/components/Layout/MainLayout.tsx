type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-slate-100">
      <div className="font-main container px-4 py-6 pt-12">{children}</div>;
    </div>
  );
};

export default MainLayout;
