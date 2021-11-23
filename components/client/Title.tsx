import { Logo } from "../";

export default function Title({ title }) {
  return (
    <div>
      <header className="px-6 py-5 w-10/12 m-8 bg-white rounded-full flex flex-row items-center">
        <Logo />
        <span className="text-3xl font-medium font-poppins text-gray-800">
          {title}
        </span>
      </header>
    </div>
  );
}
