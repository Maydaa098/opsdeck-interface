const FooterSection = () => (
  <footer className="border-t border-border">
    <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <a href="mailto:contact@opsdeck.co.za" className="text-label text-[10px] text-muted-foreground hover:text-primary transition-colors">
          CONTACT@OPSDECK.CO.ZA
        </a>
      </div>
      <p className="text-label text-muted-foreground text-[10px]">
        © 2026 OPS DECK. BUILT IN SOUTH AFRICA.
      </p>
      <span className="text-label text-muted-foreground text-[10px]">OPSDECK.CO.ZA</span>
    </div>
  </footer>
);

export default FooterSection;
