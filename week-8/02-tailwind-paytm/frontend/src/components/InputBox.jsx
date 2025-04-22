export function InputBox({label, placeholder, onChange}){
    return <div>
        <div className="font-medium text-sm text-left py-2">
            {label}
        </div>

        <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border-2 rounded-lg" />
    </div>
}