
export default function validations(propiedad, errors, setErrors, form) {
    switch (propiedad) {
        case "name":
            if (!form.name) {
                setErrors(prevErrors => ({...prevErrors, name: "Este campo es obligatorio"}));
            } else if(/^[A-Za-z\s]{3,30}$/.test(form.name)) {
                setErrors(prevErrors => ({...prevErrors, name: ""}));
            } else {
                setErrors(prevErrors => ({...prevErrors, name: "El nombre solo puede estar conformado por letras y debe tener una longitud entre 3 a 30 caracteres"}));
            }
            //regex para verificar mayusculas, minursculas y que tenga entre 3 y 30ch
            break;
        case "dificulty":
            if (!form.dificulty || form.dificulty === "seleccionar") {
                setErrors(prevErrors => ({...prevErrors, dificulty: "Este campo es obligatorio"}));
            } else {
                setErrors(prevErrors => ({...prevErrors, dificulty: ""}));
            }
            break;
        case "season":
            if (!form.season) {
                setErrors(prevErrors => ({...prevErrors, season: "Este campo es obligatorio"}));
            } else {
                setErrors(prevErrors => ({...prevErrors, season: ""}));
            }
            break;
        case "country":
            if (!form.country || form.country === "Selecciona un country--") {
                setErrors(prevErrors => ({...prevErrors, country: "Este campo es obligatorio"}));
            } else {
                setErrors(prevErrors => ({...prevErrors, country: "", countries: ""}));
            }
            break;
        case "countries":
            if (form.length > 0 && form[form.length - 1].country === "") {
                setErrors(prevErrors => ({...prevErrors, countries: "Este campo es obligatorio"}));
            } else {
                setErrors(prevErrors => ({...prevErrors, countries: ""}));
            }
            break;
        default:
            break;
    }
}

export function validateForm(form, selectCountries, setErrors) {
    const errors = {};

    if (!form.name) {
        errors.name = "Este campo es obligatorio";
    }

    if (!form.dificulty || form.dificulty === "seleccionar") {
        errors.dificulty = "Este campo es obligatorio";
    }

    if (!form.season) {
        errors.season = "Este campo es obligatorio";
    }

    if (!form.country || form.country === "Selecciona un país--") {
        errors.country = "Este campo es obligatorio";
    }

    if (selectCountries.length > 0 && selectCountries[selectCountries.length - 1].country === "") {
        errors.countries = "Este campo es obligatorio";
    }

    setErrors(errors);
    return errors;
}