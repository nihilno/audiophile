function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="bg-primary mx-auto mb-16 py-8 text-center text-[28px] font-bold tracking-[2px] text-white uppercase shadow-2xl sm:py-12 md:py-16 lg:mb-24">
      {children}
    </h1>
  );
}

export default SectionTitle;
