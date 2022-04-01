import React, { useEffect, useState } from "react";
const Test = () => {
    const [message, setMessage] = useState({});
    const [name, setName] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://127.0.0.1:8000/api/hello')
                .then(response => {
                    return response.json();
                })
                .catch(err => {
                    console.log(err);
                })
        }
        const res = fetchData();
        
    }, [])
    const submit = async (e) => {
        e.preventDefault()
        const data = {
            "name": name
        }
        const request = await fetch('http://127.0.0.1:8000/api/post', {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
            }),
            body: JSON.stringify(data)
        }).then(response => {
            return response.json()
        }).catch(err => {
            console.log(err);
        })
        console.log(request);
    }
    return (
        <>
            {/* <input type="text" onChange={(e) => { setName(e.target.value) }} />
            <button onClick={submit}>Submit</button> */}
        </>
    );
}
export default Test;