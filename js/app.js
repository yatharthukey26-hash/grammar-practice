
// ======================================
// GRAMMAR HUB - MAIN JAVASCRIPT
// ======================================

// All 23 Grammar Topics

const topics = [
    "Parts of Speech",
    "Nouns",
    "Pronouns",
    "Adjectives",
    "Determiners",
    "Clauses",
    "Simple Tenses",
    "Continuous Tenses",
    "Perfect and Perfect Continuous Tenses",
    "Sequence of Tenses",
    "Modals",
    "Non-finite Verbs",
    "Phrasal Verbs",
    "Active and Passive Voice",
    "Adverbs",
    "Prepositions",
    "Conjunctions",
    "Structure of Sentences",
    "Types of Sentences",
    "Combining of Sentences",
    "Direct and Indirect Speech",
    "Question Tags",
    "Punctuation"
];


// Get HTML elements

const topicGrid = document.getElementById("topicGrid");
const topicSearch = document.getElementById("topicSearch");
const topicCount = document.getElementById("topicCount");
const noResults = document.getElementById("noResults");
const teacherBtn = document.getElementById("teacherBtn");


// Display Topics

function displayTopics(topicList) {

    topicGrid.innerHTML = "";

    topicList.forEach((topic) => {

        const originalNumber = topics.indexOf(topic) + 1;

        const card = document.createElement("div");
        card.className = "topic-card";

        const number = document.createElement("span");
        number.className = "topic-number";
        number.textContent = `TOPIC ${String(originalNumber).padStart(2, "0")}`;

        const heading = document.createElement("h3");
        heading.textContent = topic;

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "Start Practising →";

        link.addEventListener("click", (event) => {
            event.preventDefault();
            openTopic(topic);
        });

        card.appendChild(number);
        card.appendChild(heading);
        card.appendChild(link);

        topicGrid.appendChild(card);

    });

    // Update topic count

    topicCount.textContent =
        `${topicList.length} of ${topics.length} Topics Available`;

    // Show or hide no-results message

    noResults.hidden = topicList.length !== 0;
}


// Search Topics

topicSearch.addEventListener("input", function () {

    const searchText = this.value.toLowerCase().trim();

    const filteredTopics = topics.filter((topic) =>
        topic.toLowerCase().includes(searchText)
    );

    displayTopics(filteredTopics);

});


// Open Selected Topic

function openTopic(topic) {

    alert(
        `${topic}\n\nTopic practice will be available in the next development phase!`
    );

}


// Teacher's Corner

teacherBtn.addEventListener("click", function () {

    alert(
        "Teacher's Corner\n\nWord document upload and classroom quiz creation will be added in a later phase."
    );

});


// Initialize Website

displayTopics(topics);

console.log("Grammar Hub loaded successfully!");
console.log(`${topics.length} grammar topics available.`);
