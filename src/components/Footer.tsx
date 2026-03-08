const Footer = () => {
  return (
    <footer className="px-6 py-4">
      <div className="mx-auto max-w-2xl">
        <div className="mb-2 h-px w-full bg-primary/10" />
        <div className="flex items-center justify-between">
          <a
            href="mailto:anushkatankala@gmail.com"
            className="font-mono text-[9px] text-muted-foreground transition-colors hover:text-primary"
          >
            email
          </a>
          <div className="flex gap-3">
            <a href="https://github.com/anushkatankala" className="font-mono text-[9px] text-muted-foreground transition-colors hover:text-primary">
              github
            </a>
            <a href="https://www.linkedin.com/in/anushka-tankala-0725a52b4" className="font-mono text-[9px] text-muted-foreground transition-colors hover:text-primary">
              linkedin
            </a>
            <a href="https://x.com/anushkatankala" className="font-mono text-[9px] text-muted-foreground transition-colors hover:text-primary">
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
