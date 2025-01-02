import React from "react"

declare global {
    interface FormAction {
        key: "submited" | "inputing",
        input?: Input
    }
    interface Form {
        field: Input[],
        formData: FormData
    }
    interface Input {
        id: string | number,
        name: string,
        type: string,
        placeholder: string,
        value: string,
        status: 'pristine' | 'dirty' | 'touched' | 'valid' | 'invalid',
        errorText: string,
        handleChange: (input: Input) => void
    }

    interface Button {
        text: string,
        type: "submit" | "button",
        onClick?: (e: React.ClickEvent<HTMLButtonElement>) => void
    }
}
export { };
