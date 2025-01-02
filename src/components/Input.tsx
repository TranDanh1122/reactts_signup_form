import React from "react"
import clsx from "clsx"

interface InputProps {
    input: Input
}
const Input: React.FC<InputProps> = ({ input }): React.JSX.Element => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newInput = { ...input }
        newInput.value = e.target.value
        newInput.status = "dirty"
        input.handleChange(newInput);
    }
    const focus = () => {
        const newInput = { ...input }
        if (!['valid', 'invalid'].includes(newInput.status)) {
            newInput.status = "touched"
            input.handleChange(newInput);
        }
    }
    return (
        <div className="w-full relative">
            <input
                onChange={(e) => handleChange(e)}
                onFocus={() => focus()}
                className={clsx("w-full font-semibold  tracking-[0.25px] leading-6 text-[0.875rem] py-4 px-8 rounded-md border-solid border-[1px] ", {
                    "border-[#DEDEDE] hover:border-darkBlue": input.status == "dirty" || input.status == "pristine",
                    "border-green": input.status == 'valid',
                    "border-red": input.status == "invalid"
                })}
                type="text" placeholder={input.placeholder} name={input.name} value={input.value} />
            <span className={clsx("text-red font-medium text-[0.75rem] top-full left-0 block", {})}>{input.errorText}</span>
            <span></span>
        </div>
    )
}
export default Input

