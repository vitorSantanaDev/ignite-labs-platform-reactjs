import { Fragment } from "react";
import Logo from "../Logo";

export default function Header() {
  return (
    <Fragment>
      <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-500">
        <Logo />
      </header>
    </Fragment>
  );
}
