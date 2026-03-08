const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="font-body text-sm text-muted-foreground">
          Let's connect —{" "}
          <a href="mailto:you@email.com" className="underline underline-offset-4 transition-colors hover:text-foreground">
            you@email.com
          </a>
        </p>
        <div className="flex gap-6 font-body text-xs text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">GitHub</a>
          <a href="#" className="transition-colors hover:text-foreground">LinkedIn</a>
          <a href="#" className="transition-colors hover:text-foreground">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
