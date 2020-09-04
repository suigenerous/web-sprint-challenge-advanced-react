// write your custom hook here to control your checkout form
import {useState} from 'react';

const usePlantForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        function (event){
            setValues({
                ...values,
                [event.target.name]: event.target.value
            })
        }
    ]
}

export default usePlantForm;