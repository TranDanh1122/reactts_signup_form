import React from "react"
import Input from "./Input"
import Button from "./Button"

const formReducer = (form: Form, action: FormAction): Form => {
    switch (action.key) {
        case 'inputing': {
            const newForm = { ...form }
            return newForm
        }
        case 'submited': {
            const newForm = { ...form }
            return newForm
        }
    }
    return form
}

const initForm: Form = {
    field: [
        { name: "first_name", placeholder: "First Name", value: "", status: "pristine", errorText: "" } as Input,
        { name: "last_name", placeholder: "Last Name", value: "", status: "pristine", errorText: "" } as Input,
        { name: "email", placeholder: "Email", value: "", status: "pristine", errorText: "" } as Input,
        { name: "password", placeholder: "Password", value: "", status: "pristine", errorText: "" } as Input,
    ],
    formData: new FormData()
};

const Form: React.FC = (): React.JSX.Element => {

    const [form, changeForm] = React.useReducer(formReducer, initForm)

    return (
        <form
            // onSubmit={(e) => handleSubmit(e)}
            action="#" className="p-10 bg-white rounded-xl shadow-md flex flex-nowrap gap-5 items-center justify-start flex-col" >
            {
                form.field.map((input: Input, index: number) => {
                    input.handleChange = (input: Input) => changeForm({ key: "inputing", input: input })
                    return <Input key={index} input={input} />
                })
            }
            < Button button={{ text: "Claim your free trial", type: "submit" } as Button} />
            <p className=" text-grayishBlue text-[0.75rem]">By clicking the button, you are agreeing to our <a href="#" className="text-red">Terms and Services</a></p>

        </form >
    )
}
export default Form