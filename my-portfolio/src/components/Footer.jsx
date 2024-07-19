import { Link } from "react-router-dom"
import {FaGithub} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
    return(
        <div className="bottom-0 right-0 left-0 z-50 text-dimgrey text-sm p-16 font-sans bg-secondary">
        <footer>
          <div>
            <div className="mb-4 md:mb-0 flex justify-center space-x-10 text-4xl">
              <Link to={"mailto:samuelabrh@gmail.com"}>
                    <MdEmail />
              </Link>
              <Link to={"http://github.com/sam-abraha"}>
                    <FaGithub />
              </Link>
            </div>
            <div className="mb-4 md:mb-0 flex flex-col items-center mt-8">
              <p className="font-bold">Samuel Abraha</p>
              <p className="text-xs">Built with ReactJS.</p>
            </div>
          </div>
        </footer>
      </div>
    )
}