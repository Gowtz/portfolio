export default function Header() {
  return (
    <header className="container mx-auto animation-header">
      <nav className=" hidden md:flex justify-between items-center h-24 w-full px-10">
        <div className="Gowtcol ham">Gowtham</div>

        <ul className="flex gap-5">
          <li>
            <a href="#" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#expreince">Expreince</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
