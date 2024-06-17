import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <div className="bottom-0 right-0 left-0 z-50 bg-black text-stone text-sm p-4">
        <footer>
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold">Contacts</p>
              <ul>
                <li>
                  <Link to={"https://github.com/sam-abraha"} className="hover:underline">Github</Link>
                </li>
                <li>
                  <Link to={"mailto:samuelabrh@gmail.com"} className="hover:underline">Email</Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <p className="font-bold">Samuel Abraha</p>
              <p className="text-xs">Built with ReactJS.</p>
            </div>
          </div>
        </footer>
      </div>
    )
}