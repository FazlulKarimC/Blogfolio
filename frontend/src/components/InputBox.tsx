import { ChangeEvent } from 'react';

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export const InputBox = ({label, placeholder, onChange, type} : LabelledInputType) => {
    return <div className="mb-6 w-full">
    <label className="block mb-2 pl-1 text-base font-large text-gray-900 w-full">{label}</label>
    <input type={type || "text"}  placeholder={placeholder} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
</div>
}