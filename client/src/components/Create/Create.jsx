import { useState } from "react"
import { useSelector } from "react-redux"
import validations from "./validations"
import axios from "axios"
import styles from "./form.module.css"

export default function Form() {

    const formDefault = {
        name: "",
        dificulty: "",
        duration: 1,
        season: "",
        country: ""
    }

    const [form, setForm] = useState(formDefault)

    const selectCountriesDefault = []

    const [selectCountries, setSelectCountries] = useState(selectCountriesDefault)

    const allCountries = useSelector((state) => state.allCountries)

    const [errors, setErrors] = useState({})

    const countriesOrdenados = [...allCountries].sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})

        validations(event.target.name, errors, setErrors, {...form, [event.target.name]: event.target.value})
    }

    const handleCountries = (event, index) => {
        const newSelect = [...selectCountries]
        newSelect[index].country = event.target.value
        setSelectCountries(newSelect)

        validations("countries", errors, setErrors, newSelect)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const errores = Object.values(errors).filter(error => error.length)// es un metodo que devuelve las propiedades de un objeto, se hace filtrado para ver si hay error

        if (errores.length) {
            window.alert("Revisa que todos los campos hayan sido completados correctamente.")
            return
        }

        const addedCountries = selectCountries.map(country => country.country)

        const body = {...form, id: addedCountries.concat(form.country), difficulty: parseInt(form.dificulty), duration: parseInt(form.duration)}


        console.log(body);
        axios.post("http://localhost:3001/activities/", body)
        .then(response => window.alert("info enviada"))
        setForm(formDefault)
        setSelectCountries(selectCountriesDefault)
    }

    const addCountry = () => {
        if (form.country === "" || form.country === "Selecciona un country--") {
            setErrors({...errors, countries: "Debes completar el campo anterior antes de agregar un nuevo país"})
            return
        }
        
        if (selectCountries.length && selectCountries[selectCountries.length-1].country === "") {
            setErrors({...errors, countries: "Debes completar el campo anterior antes de agregar un nuevo país"})
            return
        } else {
            setErrors({...errors, countries:""})
        }
        if (errors.countries) return
        
        const newSelectCountries = [...selectCountries, {country: ""}]
        setSelectCountries(newSelectCountries)
    }

    const quitarCountry = () => {
        const oneLess = selectCountries.slice(0, -1)
        setSelectCountries(oneLess)        
    }

    return (
        <div className={styles.Form}>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Actividad: </label>
                    <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <br />
                    <span>{errors.name}</span>
                </div>

                <div>
                    <label htmlFor="dificulty">Dificultad: </label>
                    <select name="dificulty" id="dificulty" value={form.dificulty} onChange={handleChange}>
                        <option value="seleccionar">Selecciona nivel de dificultad</option>
                        <option value={1}>{"1 (uno)"}</option>
                        <option value={2}>{"2 (dos)"}</option>
                        <option value={3}>{"3 (tres)"}</option>
                        <option value={4}>{"4 (cuatro)"}</option>
                        <option value={5}>{"5 (cinco)"}</option>
                    </select>
                    <br />
                    <span>{errors.dificulty}</span>
                </div>

                <div className={styles.duration}>
                    <label htmlFor="duration">Duracion: </label>
                    <input 
                        type="range"
                        name="duration"
                        min={1}
                        max={24}
                        value={form.duration}
                        onChange={handleChange}
                    />
                    {form.duration}min.
                    <br />
                    <span>{errors.duration}</span>
                </div>

                <div>
                    <label htmlFor="season">Temporada: </label>
                    <div className={styles.radios}>
                        <input
                            type="radio"
                            name="season"
                            id="summer"
                            value="summer"
                            checked={form.season === "summer"}
                            onChange={handleChange}
                            />
                        <label htmlFor="summer">
                        Summer
                        </label>
                        <br />
                        <span>{errors.season}</span>
                    </div>

                    <div className={styles.radios}>
                        <input 
                            type="radio" 
                            name="season"
                            id="autumn"
                            value="autumn"
                            checked={form.season === "autumn"}
                            onChange={handleChange}
                            />
                        <label htmlFor="autumn">
                            Autumn
                        </label>
                    </div>

                    <div className={styles.radios}>
                        <input 
                            type="radio" 
                            name="season" 
                            id="winter" 
                            value="winter" 
                            checked={form.season === "winter"} 
                            onChange={handleChange}
                        />
                        <label htmlFor="winter">
                            Winter
                        </label>
                    </div>

                    <div className={styles.radios}>
                        <input 
                            type="radio" 
                            name="season" 
                            id="spring" 
                            value="spring" 
                            checked={form.season === "spring"} 
                            onChange={handleChange}
                        />
                        <label htmlFor="spring">
                            Spring
                        </label>
                    </div>

                    <br />
                    <span>{errors.season}</span>
                </div>

                <div>
                    <label htmlFor="country">Selecciona un country: </label>
                    <select name="country" id="country" value={form.country} onChange={handleChange}>
                        <option value="Selecciona un country--">Selecciona un country--</option>
                        {countriesOrdenados?.map((country, index) => {
                            return (
                                <option value={`${country.id}`}>{`${country.name}`}</option>
                            )
                        })
                        }
                    </select>
                    <br />
                    <span>{errors.country}</span>
                </div>

                <div>
                    {selectCountries?.map((select, index) => {
                        return (
                            <div key={index}>
                                <label htmlFor={index}>Selecciona un country: </label>
                                <select name={index} id={index} value={selectCountries[index].country} onChange={(event) => handleCountries(event, index)}>
                                    <option value="">Selecciona un country--</option>
                                    {countriesOrdenados.map((country, index) => {
                                        return (
                                            <option value={`${country.id}`}>{`${country.name}`}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                        )
                    })}
                    <span>{errors.countries}</span>

                </div>

                <div className={styles.addRemove}>
                    <button type="button" onClick={addCountry}>Add Country</button>
                    <button type="button" onClick={quitarCountry}>Remove Country</button>
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}