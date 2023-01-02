import { useState } from "react";

function Form({func}){

    const [form, setForm] = useState({
        title: '',
        body: ''
    })

    const handleNameChange = ({target}) => {
        let {name, value} = target;
        setForm(form => ({...form, [name]: value}));
    }

    const handleSubmit = evt =>{
        func(form);
        setForm(
            {
                title: '',
                body: ''
            }
        )
    }
    return (
        <form id="formUpdCollapses">
            <label htmlFor="inputText">Заголовок</label><br/>
            <input name="title" id="inputText" type="text" value={form.title} onChange={handleNameChange}/>
            <hr/>
            <label>Тело(можно HTML код)</label><br/>
            <textarea name="body" value={form.body} onChange={handleNameChange}/>
            <hr/>
            <button type="button" onClick={handleSubmit}>Добавить</button>
            <button type="reset">Очистить</button>
        </form>
    )
}

export default Form;