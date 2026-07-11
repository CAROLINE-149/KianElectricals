import logo from "../assets/logo/kianlogo.png";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Kian Electrical Services Logo"
        className="h-14 w-auto"
      />

      <div className="hidden lg:block leading-tight">
        <h1 className="text-xl font-bold tracking-wide">
          KIAN ELECTRICAL
        </h1>

        <p className="text-xs text-gray-500 uppercase">
          Electrical Services
        </p>
      </div>
    </div>
  );
}

export default Logo;