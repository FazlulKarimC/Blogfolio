

interface onClickInterface {
    label : string;
    onclick: () => void;
}
export const Button = ({label, onclick}: onClickInterface) => {
    return <button type="button" onClick={onclick} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">{label}</button>
}