// This file will randomly return motivational messages from a library of potential options. The goal of this project is to 
// improve mental health by providing users with random suggestions. 

// General message structure. First sentence: suggestion for the user in the form of a command. Ie, "Breathe slowly for X seconds", where x is
// a random number
function getRandomValue() {
    return Math.floor(1 + Math.random() * 9);
}

function getRandomSentence(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getFirstSentence () {
    let value = getRandomValue();
    const firstSentences = [
        `Breathe deeply and slowly for ${value} seconds.`,
        `Breathe deeply and slowly for ${value} breaths.`,
        `Think of ${value} people you have loved dearly in your life.`,
        `Remind yourself how far you have come in the last ${value} years, and how far you will go in the next ${value}.`,
        `Focus your attention to your third eye for ${value} minutes.`
    ];
    return getRandomSentence(firstSentences);
}

// The second sentence will return an inspirational quote. We will store the inspirational quotes as object literals where the author is the key
function getSecondSentence() {
    const inspoQuotes = [
        {author: "Lori Deschene", quote: "\"You don’t have to be positive all the time. It\’s perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn\’t make you a negative person. It makes you human.\""},
        {author: "Leonard Cohen", quote: "\“There is a crack in everything, that\’s how the light gets in.\”" }
    ]
    let secondSentence = getRandomSentence(inspoQuotes);
    return `Meditate on the words of ${secondSentence.author}: ${secondSentence.quote}`;
}

// The third sentence will be a recommendation for what to do next. These will typically include recommendations for physical and emotional
// wellbeing, like going outside, exercising, or meeting with a friend.
function getThirdSentence() {
    const nextSteps = [
        "Meet up with a friend for dinner tonight.",
        "Call someone you love and tell them how they make you feel.",
        "Get outside and enjoy the sunshine.",
        "Play a sport today, preferably Frisbee."
    ]
    return getRandomSentence(nextSteps);

}

console.log(getFirstSentence());
console.log(getSecondSentence());
console.log(getThirdSentence());

