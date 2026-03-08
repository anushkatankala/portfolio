const Footer = () => {
  return (
    <footer className="px-6 py-4">
      <div className="mx-auto max-w-2xl">
        <div className="mb-2 h-px w-full bg-primary/10" />
        <div className="flex items-center justify-between">
          <a
            href="mailto:you@email.com"
            className="font-mono text-[9px] text-muted-foreground transition-colors hover:text-primary"
          >
            you@email.com
          </a>
          <div className="flex gap-3">
            <a href="#" className="font-mono text-[9px] text-muted-foreground transition-colors hover:text-primary">
              github
            </a>
            <a href="#" className="font-mono text-[9px] text-muted-foreground transition-colors hover:text-primary">
              linkedin
            </a>
            <a href="#" className="font-mono text-[9px] text-muted-foreground transition-colors hover:text-primary">
              twitter
            </a>
          </div>
        </div>
        <p className="mt-2 text-center font-mono text-[7px] text-primary/20">
          ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
        </p>
      </div>
    </footer>
  );
};

export default Footer;
