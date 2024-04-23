type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-slate-100">
      <div className="container px-4 py-6 font-main pt-12">{children}</div>;
    </div>
  );
};

export default MainLayout;
