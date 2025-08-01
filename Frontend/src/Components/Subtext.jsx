import { Link } from "react-router-dom"
export const Subtext = ({link , line, to }) => {
    return (
        <div className="flex justify-center mt-1">
            <p className="text-sm text-gray-700">{link}</p>
            <Link className="text-sm text-blue-500 underline pl-1" to={to}>
            {line}
            </Link>
        </div>
    )
}