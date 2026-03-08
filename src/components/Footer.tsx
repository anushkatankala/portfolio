const Footer = () => {
  return (
    <footer className="px-6 py-6">
      <div className="mx-auto flex max-w-2xl items-center justify-between text-xs text-muted-foreground">
        <p>
          <a href="mailto:you@email.com" className="underline underline-offset-4 transition-colors hover:text-foreground">
            you@email.com
          </a>
        </p>
        <div className="flex gap-4">
          <a href="#" className="transition-colors hover:text-foreground">GitHub</a>
          <a href="#" className="transition-colors hover:text-foreground">LinkedIn</a>
          <a href="#" className="transition-colors hover:text-foreground">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
