// Reference needed elements
const adjective = document.getElementById('adjective-1');
const adjectiv2e = document.getElementById('adjective-2');
const number = document.getElementById('number');
const verb = document.getElementById('verb-1');
const noun = document.getElementById('noun');
const adjectiveResult = document.getElementById('adjective-result-1');
const adjectiv2eResult = document.getElementById('adjective-result-2');
const numberResult = document.getElementById('number-result');
const verbResult = document.getElementById('verb-result-1');
const nounResult = document.getElementById('noun-result');
const story = document.getElementById('story');

// Actions to get elements
// eslint-disable-next-line no-unused-vars
function doThing() {
    story.classList.remove('hidden');
    adjectiveResult.textContent = adjective.value;
    adjectiv2eResult.textContent = adjectiv2e.value;
    numberResult.textContent = number.value;
    verbResult.textContent = verb.value;
    nounResult.textContent = noun.value;
} 
