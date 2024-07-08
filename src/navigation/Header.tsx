import { LogoText } from "../display/LogoText";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 flex justify-between items-center shadow-md px-4 lg:px-8 py-4 z-50 backdrop-blur-lg">
      <a href="/">
        <LogoText />
      </a>

      <a href="https://app.igendoc.com" target="_blank" rel="noreferrer">
        Login
      </a>
    </header>
  );
};
