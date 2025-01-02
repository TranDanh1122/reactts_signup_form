import React from "react"
interface ButtonProps {
    button: Button
}
const Button: React.FC<ButtonProps> = ({ button }): React.JSX.Element => {
    return (
        <button className="font-semibold rounded-md leading-8 text-white bg-green hover:bg-green/50 uppercase py-4 w-full"  type={button.type} >{button.text}</button>

    )
}
export default Button