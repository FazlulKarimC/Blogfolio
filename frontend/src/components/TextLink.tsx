import { Link } from "react-router-dom"
interface TextLinkInterface {
    label: string;
    to: string;
}

export const TextLink = ({label, to} : TextLinkInterface) => {
    return <div>
        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={"/" + to}>{label}</Link>
    </div>
}