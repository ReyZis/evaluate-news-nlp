function setResult(polarity, subjectivity) {
    const fragment = document.createDocumentFragment();

    const subjectivityParagraph = document.createElement('p')
    const subjectivityText = document.createTextNode(`you are a ${subjectivity} person`);
    subjectivityParagraph.appendChild(subjectivityText);

    const polarityParagraph = document.createElement('p');
    const polarityText = document.createTextNode(`you are talking with ${polarity} tone`);
    polarityParagraph.appendChild(polarityText);

    fragment.appendChild(subjectivityParagraph);
    fragment.appendChild(polarityParagraph);

    return fragment;
}

export { setResult }