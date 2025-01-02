import React from "react"
import Input from "./Input"
import Button from "./Button"
const validateField: { [key: string]: (value: string) => boolean } = {
    email: (value: string) => /\S+@\S+\.\S+/.test(value),
    password: (value: string) => value.length > 8,
    text: (value: string) => value.trim() != ""
}
const validInput: (input: Input | null) => { isValid: boolean, errorText: string } = (input) => {
    if (!input) return { isValid: false, errorText: "" }
    const isValid: boolean = validateField[input.type](input.value)
    let errorText = `${input.placeholder} is required`
    if (input.type == "email") errorText = `${input.placeholder} is not valid`
    if (input.type == "password") errorText = `${input.placeholder} atleast 8 characters`
    return { isValid: isValid, errorText: errorText }
}
const formReducer = (form: Form, action: FormAction): Form => {
    switch (action.key) {
        case 'inputing': {
            const fields = [...form.field] as Input[]
            const index = form.field?.findIndex(item => item.id === (action.input?.id ?? 0));
            if (index > -1) {
                const valid = validInput(action.input ?? null)
                fields[index] = {
                    ...fields[index],
                    value: action.input?.value ?? '',
                    status: valid.isValid ? "valid" : "invalid",
                    errorText: valid.errorText
                }
            }
            return {
                ...form,
                field: fields
            }
        }
        case 'submited': {
            console.log(1233);

            const fields = [...form.field] as Input[]
            const submitedFields = fields.map((field: Input) => {
                const valid = validInput(field ?? null)
                return {
                    ...field,
                    status: valid.isValid ? "valid" : "invalid",
                    errorText: valid.errorText
                } as Input
            })
            return {
                ...form,
                field: [...submitedFields]
            }
        }
    }
    return form
}

const initForm: Form = {
    field: [
        { name: "first_name", type: "text", placeholder: "First Name", value: "", status: "pristine", errorText: "" } as Input,
        { name: "last_name", type: "text", placeholder: "Last Name", value: "", status: "pristine", errorText: "" } as Input,
        { name: "email", type: "email", placeholder: "Email", value: "", status: "pristine", errorText: "" } as Input,
        { name: "password", type: "password", placeholder: "Password", value: "", status: "pristine", errorText: "" } as Input,
    ],
    formData: new FormData()
};

const Form: React.FC = (): React.JSX.Element => {

    const [form, changeForm] = React.useReducer(formReducer, initForm)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        changeForm({ key: "submited" })
    }


    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            action="#" className="p-10 bg-white rounded-xl shadow-md flex flex-nowrap gap-5 items-center justify-start flex-col" noValidate >
            {
                form.field.map((input: Input, index: number) => {
                    input.id = index
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