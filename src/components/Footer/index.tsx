import { APP_TEXT } from "../../util/appText";
import LogoRocketseat from "../LogoRocketseat";

export default function Footer() {
  return (
    <footer className="px-6 flex w-full items-center py-5 justify-between border-t border-gray-500">
      <div className="flex gap-6 items-center">
        <LogoRocketseat />
        <p className="text-sm text-gray-300">{APP_TEXT.FOOTER_CONTENT}</p>
      </div>
      <a href="#" className="text-sm text-gray-300">
        {APP_TEXT.LINK_TEXT_FOOTER}
      </a>
    </footer>
  );
}
