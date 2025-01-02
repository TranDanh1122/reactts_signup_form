import React from "react"
import clsx from "clsx"

interface InputProps {
    input: Input
}
const Input: React.FC<InputProps> = React.memo(({ input }): React.JSX.Element => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newInput = { ...input }
        if (e.target.value == "" && newInput.status == "pristine") {
            newInput.status = "touched"
            return false
        }
        newInput.value = e.target.value
        newInput.status = "dirty"
        input.handleChange(newInput);
    }

    return (
        <div className="w-full relative">
            <img className={clsx("block bg-red w-6 h-6 absolute top-[calc(25%-6px)] right-6 object-cover rounded-full", {
                "block": input.status == "invalid",
                "hidden": input.status != "invalid"
            })} src="./images/icon-error.svg"></img>
            <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleChange(e)}
                className={clsx("w-full font-semibold  tracking-[0.25px] leading-6 text-[0.875rem] py-4 px-8 rounded-md border-solid border-[1px] ", {
                    "border-[#DEDEDE] hover:border-darkBlue": input.status == "dirty" || input.status == "pristine",
                    "border-green": input.status == 'valid',
                    "border-red": input.status == "invalid"
                })}
                type={input.type} placeholder={input.placeholder} name={input.name} value={input.value} />
            <span className={clsx("text-red font-medium text-[0.75rem] top-full left-0 ", {
                "block": input.status == "invalid",
                "hidden": input.status != "invalid"
            })}>{input.errorText}</span>
        </div>
    )
})
export default Input

