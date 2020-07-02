async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")

    await fetch('/test', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formText }) // body data type must match "Content-Type" header

        })
        .then(async res => {
            const data = await res.json();
            console.log(data)
            document.getElementById('results').innerHTML = ''
            document.getElementById('results').appendChild(Client.setResult(data.polarity, data.subjectivity));
        })
}

export { handleSubmit }