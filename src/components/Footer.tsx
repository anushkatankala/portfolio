const Footer = () => {
  return (
    <footer className="px-6 py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between text-[11px] text-muted-foreground">
        <a href="mailto:you@email.com" className="transition-opacity hover:opacity-70">
          you@email.com
        </a>
        <div className="flex gap-3">
          <a href="#" className="transition-opacity hover:opacity-70">GitHub</a>
          <a href="#" className="transition-opacity hover:opacity-70">LinkedIn</a>
          <a href="#" className="transition-opacity hover:opacity-70">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
