const FooterSection = () => (
  <footer className="relative border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-label text-muted-foreground mb-1">
            <a href="mailto:contact@opsdeck.co.za" className="hover:text-primary transition-colors">
              CONTACT@OPSDECK.CO.ZA
            </a>
          </p>
          <p className="text-label text-muted-foreground text-[10px]">
            © 2026 OPS DECK. BUILT IN SOUTH AFRICA.
          </p>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <svg viewBox="0 0 60 20" className="w-16 h-5" fill="none">
            <line x1="0" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="30" cy="10" r="3" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <span className="text-label text-[10px]">OPSDECK.CO.ZA</span>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
