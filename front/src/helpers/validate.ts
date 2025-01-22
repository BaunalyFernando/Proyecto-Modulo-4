import { ILoginProps, ILoginPropsErrors, IRegisterProps, IRegisterPropsErrors } from "@/types";

export function validateLoginForm(values: ILoginProps) {
    const errors: ILoginPropsErrors = {
        email: "",
        password: "",
    };

    if (!values.email) {
        errors.email = "Por favor, ingrese su email";
    }

    if (!values.password) {
        errors.password = "Por favor, ingrese su password";
    }
    if(values.email && !/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email inválido";
    }

    return errors;
}

export function validateRegisterForm(values: IRegisterProps) {
    const errors: IRegisterPropsErrors = {
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
    };

    if (!values.name) {
        errors.name = "Por favor, ingrese su nombre";
    }

    if (!values.password) {
        errors.password = "Por favor, ingrese su password";
    }
    

    if (!values.phone) {
        errors.phone = "Por favor, ingrese su número de teléfono";
    }

    if (!values.address) {
        errors.address = "Por favor, ingrese su dirección";
    }

    if (!values.email) {
        errors.email = "Por favor, ingrese su email";
    }

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email inválido";
    }

    return errors;
}