const Footer = () => {
  return (
    <footer className="px-6 py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        <a
          href="mailto:you@email.com"
          className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-primary"
        >
          you@email.com
        </a>
        <div className="flex gap-3">
          <a href="#" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-primary">
            GitHub
          </a>
          <a href="#" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-primary">
            LinkedIn
          </a>
          <a href="#" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-primary">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
