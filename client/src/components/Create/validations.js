

export default function validations(propiedad, errors, setErrors, form) {
    switch (propiedad) {
        case "name":
            if (!form.name) {
                setErrors({...errors, name: "Este campo es obligatorio"})
            } else if(/^[A-Za-z\s]{3,30}$/.test(form.name)) {
                setErrors({...errors, name:""})
            } else {
                setErrors({...errors, name: "El nombre solo puede estar conformado por letras. Y debe tener una longitud entre 3 a 30 caracteres"})
            }
            break;
        case "dificulty":
            if (!form.dificulty || form.dificulty === "seleccionar") {
                setErrors({...errors, dificulty: "Este campo es obligatorio"})
            } else {
                setErrors({...errors, dificulty:""})
            }
            break;
        case "season":
            if (!form.season) {
                setErrors({...errors, season: "Este campo es obligatorio"})
            } else {
                setErrors({...errors, season:""})
            }
            break;
        case "country":
            if (!form.country || form.country === "Selecciona un country--") {
                setErrors({...errors, country: "Este campo es obligatorio"})
            } else {
                setErrors({...errors, country:"", countries: ""})
            }
            break;
        case "countries":
            if (form[form.length-1].country === "") {
                setErrors({...errors, countries: "Este campo es obligatorio"})
                return
            } else {
                setErrors({...errors, countries:""})
            }
            break;
        default:
            break;
    }
}