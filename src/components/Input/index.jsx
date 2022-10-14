export const Input = ({name, label, error, ...props}) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
        <input {...props} id={name} name={name} 
        className={`p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-grau-700 ${error &&'border-red-300'}`}/>
        <span className="p-2 text-sm text-red-300">{error}</span>
    </div>
)
