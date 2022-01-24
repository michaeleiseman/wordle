const wordList = ["ABOUT", "ABOVE", "ADDED", "ADMIT", "AFTER", "AGAIN", "AGENT", "AGONY", "AHEAD", "ALARM", "ALIEN", "ALIKE", "ALIVE", "ALOFT", "ALONE", "ALONG", "ALTAR", "AMBER", "AMONG", "ANGEL", "ANGLE", "ANVIL", "APART", "ARMED", "ARROW", "ASIDE", "ASKED", "AVOID", "AWAKE", "AWARE", "AWFUL", "AZURE", "BADLY", "BARON", "BEACH", "BEARD", "BEGAN", "BEGET", "BEGIN", "BEGUN", "BEING", "BELLY", "BELOW", "BENCH", "BERTH", "BIBLE", "BIRTH", "BLACK", "BLADE", "BLANK", "BLAST", "BLEND", "BLESS", "BLIND", "BLOCK", "BLOOD", "BLOOM", "BLOWN", "BOARD", "BOSOM", "BOUND", "BOWED", "BRACE", "BRAIN", "BRAVE", "BREAD", "BREAK", "BRIEF", "BRINE", "BRING", "BRISK", "BROAD", "BROKE", "BROWN", "BRUTE", "BUDGE", "BUILT", "BUNCH", "BURNT", "BURST", "CABIN", "CABLE", "CANAL", "CANOE", "CARRY", "CATCH", "CAUSE", "CEDAR", "CHAIN", "CHAIR", "CHARM", "CHART", "CHASE", "CHEEK", "CHEER", "CHEST", "CHIEF", "CHILD", "CHINA", "CLAIM", "CLASS", "CLEAN", "CLEAR", "CLOSE", "CLOUD", "CLUNG", "COAST", "CORAL", "COULD", "COVER", "CRACK", "CRAFT", "CRAWL", "CRAZY", "CRIED", "CROSS", "CROWD", "CROWN",  "CRUEL", "CRUSH", "CURSE", "DAILY", "DANCE", "DARED", "DEATH", "DEITY", "DENSE", "DEPTH", "DEVIL", "DIMLY", "DINED", "DIVED", "DOING", "DOUBT", "DRAWN", "DREAD", "DREAM", "DRESS", "DRIED", "DRINK", "DRIVE", "DROWN", "DYING", "EAGER", "EAGLE", "EARLY", "EARTH", "EBONY", "EIGHT", "EMPTY", "ENDED", "ENJOY", "ENTER", "ENTRY", "EQUAL", "ERECT", "EVENT", "EVERY", "EXACT", "EXIST", "EXTRA", "FADED", "FAINT", "FAITH", "FALSE", "FANCY", "FATAL", "FEAST", "FETCH", "FEVER", "FIELD", "FIEND", "FIERY", "FIFTH", "FIFTY", "FIGHT", "FINAL", "FIRST", "FISHY", "FIXED", "FLAME", "FLANK", "FLASH", "FLASK", "FLEET", "FLESH", "FLING", "FLOAT", "FLOOD", "FLOOR", "FLUID", "FLUNG", "FOLIO", "FORCE", "FORGE", "FORTH", "FORTY", "FOUND", "FRESH", "FROCK", "FRONT", "FROST", "FULLY", "FUNNY", "GAUNT", "GAZED", "GHOST", "GIRTH", "GIVEN", "GLASS", "GLOBE", "GLOOM", "GLORY", "GOING", "GONEY", "GRACE", "GRAND", "GRANT", "GRASP", "GRASS", "GRAVE", "GREAT", "GREEK", "GREEN", "GRIEF", "GROSS", "GROWN", "GUARD", "GUESS", "HAPPY", "HARDY", "HAREM", "HATCH", "HATED", "HAVEN", "HAVNT", "HAVOC", "HEARD", "HEART", "HEAVE", "HEAVY", "HENCE", "HOIST", "HONOR", "HORSE", "HOUSE", "HUMAN", "HUMOR", "HURRY", "IDIOT", "IMAGE", "INDIA", "INERT", "INNER", "ISSUE", "IVORY", "JOLLY", "JUDGE", "KNIFE", "KNOWN", "LADEN", "LANCE", "LARGE", "LAUGH", "LAYER", "LEAKY", "LEARN", "LEAST", "LEAVE", "LEVEL", "LIGHT", "LIMIT", "LINEN", "LIVED", "LOFTY", "LOOSE", "LOWER", "LOWLY", "LUCKY", "LYING", "MADLY", "MAGIC", "MARCH", "MATCH", "MEANT", "MERCY", "MERRY", "MIDST", "MIGHT", "MILKY", "MIXED", "MODEL", "MONEY", "MONTH", "MOODY", "MOULD", "MOUNT", "MOUTH", "MOVED", "MUSIC", "NAKED", "NAMED", "NEVER", "NEWLY", "NIGHT", "NOBLE", "NOISE", "NORTH", "OCCUR", "OCEAN", "OFFER", "OFTEN", "ONSET", "ORDER", "ORGAN", "OTHER", "OUGHT", "OUNCE", "OUTER", "OWING", "OWNED", "OWNER", "PACED", "PAGAN", "PAINT", "PANIC", "PAPER", "PARTY", "PAUSE", "PEACE", "PENNY", "PERCH", "PERIL", "PIECE", "PILED", "PILOT", "PIOUS", "PITCH", "PLACE", "PLAIN", "PLANE", "PLANK", "PLATE", "PLUMP", "POINT", "POLAR", "POUND", "POWER", "PRICK", "PRIDE", "PRIME", "PRIOR", "PROUD", "PROVE", "PUNCH", "PURSE", "QUEEN", "QUEER", "QUEST", "QUICK", "QUIET", "QUILL", "QUITE", "RAISE", "RAPID", "RAZOR", "REACH", "READY", "REGAL", "REPLY", "RIGHT", "RIVER", "ROCKY", "ROUGH", "ROUND", "ROYAL", "SABLE", "SADLY", "SAVED", "SCENE", "SCORE", "SCORN", "SEIZE", "SENSE", "SERVE", "SEVEN", "SHADE", "SHAKE", "SHALL", "SHAME", "SHAPE", "SHARK", "SHARP", "SHEET", "SHELF", "SHIRR", "SHIRT", "SHOAL", "SHOCK", "SHOOK", "SHOOT", "SHORE", "SHORT", "SHOUT", "SHOWN", "SIGHT", "SILLY", "SINCE", "SIXTY", "SIZED", "SKILL", "SKULL", "SLACK", "SLAIN", "SLAVE", "SLEEP", "SLEET", "SLEPT", "SLIDE", "SMALL", "SMELL", "SMILE", "SMOKE", "SMOTE", "SNOWY", "SOBER", "SOLID", "SORRY", "SOUND", "SOUTH", "SPACE", "SPADE", "SPARE", "SPEAK", "SPEAR", "SPEED", "SPELL", "SPEND", "SPENT", "SPERM", "SPINE", "SPITE", "SPLIT", "SPOIL", "SPOKE", "SPOUT", "SPRAY", "SQUID", "STAFF", "STAGE", "STAND", "STARK", "START", "STATE", "STAVE", "STEAK", "STEAM", "STEED", "STEEL", "STEEP", "STEER", "STERN", "STICK", "STIFF", "STILL", "STOCK", "STOLE", "STONE", "STOOD", "STORE", "STORM", "STORY", "STOUT", "STOVE", "STRIP", "STUBB", "STUCK", "STUDY", "STUFF", "STUMP", "STYLE", "SULKY", "SUNNY", "SWEAR", "SWEEP", "SWEET", "SWELL", "SWEPT", "SWIFT", "SWING", "SWORD", "SWORE", "SWUNG", "TABLE", "TAKEN", "TASTE", "TAWNY", "TEACH", "TEETH", "THANK", "THEIR", "THERE", "THESE", "THICK", "THIGH", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW", "THUMP", "TIGER", "TIGHT", "TIMID", "TITLE", "TOKEN", "TOOTH", "TOUCH", "TOUGH", "TOWED", "TOWER", "TRACE", "TRACK", "TRAIN", "TRIBE", "TRICK", "TRIED", "TRULY", "TRUNK", "TRUTH", "TWICE", "TWINE", "UNDER", "UNITE", "UNTIL", "UPPER", "USAGE", "USING", "USUAL", "UTTER", "VAGUE", "VALUE", "VAPOR", "VISIT", "VITAL", "VIVID", "VOICE", "WAIST", "WATCH", "WATER", "WAVED", "WEARY", "WEIGH", "WHALE", "WHARF", "WHEEL", "WHERE", "WHICH", "WHILE", "WHITE", "WHOLE", "WHOSE", "WIDOW", "WOMAN", "WOMEN", "WORLD", "WORSE", "WORTH", "WOULD", "WOUND", "WOVEN", "WRATH", "WRECK", "WRIST", "WRITE", "WRONG", "YIELD", "YOUNG", "YOUTH"];
//define all of the rows
const rows = [];
let word = "";
let focusSquare = null;
//enable keyboard entry for desktop
document.addEventListener("keydown", letterEntry, false);
//define the enter button
const enter = document.createElement("button");
enter.id = "enter"
enter.textContent = "Enter";
enter.className = "disabled";
enter.enable = function() {
    enter.addEventListener("click", evaluateGuess, false);
    this.className = "enabled";
    this.disabled = false;
}
enter.disable = function() {
    enter.removeEventListener("click", evaluateGuess, false);
    this.className = "disabled";
    this.disabled = true;
}
enter.select = function() {
    if(focusSquare) {
        focusSquare.deselect();
    }
    focusSquare = enter;
    enter.classList.add("selected")
}
enter.deselect = function() {
    focusSquare = false;
    enter.classList.remove("selected");
}
//define the play again button;
const playAgain = document.createElement("button");
playAgain.id = "playAgain"
playAgain.textContent = "Play Again";
playAgain.className = "enabled selected";
playAgain.addEventListener("click", initialize, false);
const keys = [...document.getElementsByClassName("key")];
const answer = document.getElementById("answer");
for(const key of keys) {
    key.addEventListener("click", enterValue, false);
}
document.getElementById("delete").addEventListener("click", deleteEntry, false);
for(let i = 0; i < document.getElementsByClassName("row").length; i++) {
    const rowElement = document.getElementsByClassName("row")[i];
    const row = {
        element: rowElement,
        index: i,
        inputs: [],
        isValid: function() {
            for(const input of this.inputs) {
                if(!input.isValid()) {
                    return false;
                }
            }
            return true;
        },
        activate: function(correct) {
            for(let i = 0; i < 5; i++) {
                const element = this.element.children[i];
                const thisRow = this;
                const input = {
                    element: element,
                    index: i,
                    row: thisRow,
                    letter: false,
                    correct: false,
                    goodLetter: false,
                    select: function () {
                        if(focusSquare) {
                            focusSquare.deselect();
                        }
                        focusSquare = this;
                        this.element.classList.add("selected");
                    },
                    deselect: function() {
                        this.element.classList.remove("selected");
                        focusSquare = false;
                    },
                    activate: function() {
                        this.element.addEventListener("click", selectInput, false);
                    },
                    deactivate: function() {
                        this.element.removeEventListener("click", selectInput, false);
                        this.element.classList.replace("black", "white");
                    },
                    isValid: function() {
                        return this.element.textContent != "";
                    },
                    isActive: function() {
                        return !this.element.classList.contains("correct");
                    }
                }
                element.inputObject = input;
                this.inputs.push(input);
                //if the user has not guessed this square correctly
                if(!correct.some(item => item.index === i)) {
                    input.activate();
                } else {
                    input.element.classList.add("correct");
                    input.element.classList.replace("black", "white");
                    input.correct = true;
                    input.letter = word.charAt(i);
                    input.element.textContent = input.letter;
                }
            }
            this.element.appendChild(enter);
            enter.row = this;
            enter.className = "disabled";
            this.inputs.filter(item => !item.correct)[0].select();
        },
        deactivate: function() {
            for(const input of this.inputs) {
                input.element.removeEventListener("click", selectInput, false);
            }
        },
        evaluate: function() {
            focusSquare.deselect();
            //find which inputs are correct
            const correct = [];
            const wordArray = [{
                    letter: word.charAt(0), 
                    index: 0
                }, {
                    letter: word.charAt(1),
                    index: 1
                }, {
                    letter: word.charAt(2),
                    index: 2
                }, {
                    letter: word.charAt(3),
                    index: 3
                }, {
                    letter: word.charAt(4),
                    index: 4
                }];
            for(const input of this.inputs) {
                input.deactivate();
                if(input.letter === word.charAt(input.index)) {
                    input.correct = true;
                    input.element.classList.add("correct");
                    keys.find(key => key.textContent === input.letter).classList.add("correct");
                    //find the correct letter in the word array
                    const letterToDelete = wordArray.find(item => item.index === input.index);
                    //move the letter from the word array to the correct array
                    correct.push(wordArray.splice(wordArray.indexOf(letterToDelete), 1)[0]);
                }
            }
            for(const input of this.inputs) {
                if(!input.correct && wordArray.some(object => object.letter === input.letter)) {
                    input.goodLetter = true;
                    input.element.classList.add("goodLetter");
                    keys.find(key => key.textContent === input.letter).classList.add("correct");
                    const objectToDelete = wordArray.find(object => object.letter === input.letter);
                    wordArray.splice(wordArray.indexOf(objectToDelete), 1);
                }
            }    
            for(const input of this.inputs) {
                if(!input.correct && !input.goodLetter) {
                    input.element.classList.add("wrong");
                    const keyToMark = keys.find(key => key.textContent === input.letter);
                    //if this letter has not already been found in the word
                    if(!keyToMark.classList.contains("correct")) {
                        //mark it as wrong
                        keyToMark.classList.add("wrong");
                    }
                }
            }
            return correct;
        }
    }
    rows.push(row);
}
initialize(false);
function initialize(thisIsNotTheFirstGame) {
    if(thisIsNotTheFirstGame) {
        playAgain.row.element.removeChild(playAgain);
        focusSquare = false;
        answer.textContent = "";
    }
    for(const row of document.getElementsByClassName("row")) {
        for(let i = 0; i < 5; i++) {
            const square = row.children[i];
            square.className = "input black";
            square.textContent = "";
        }
    }
    //pick a random word
    word = wordList.splice(Math.floor(wordList.length * Math.random()), 1)[0];
    for(const row of rows) {
        row.inputs = [];
    }
    for(const key of keys) {
        key.className = "key";
    }
    //activate the first row
    rows[0].activate([]);
}
function enterValue(event) {
    focusSquare.element.textContent = this.textContent;
    focusSquare.letter = this.textContent
    const inputsNotMarkedCorrect = focusSquare.row.inputs.filter(input => input.isActive());
    if(focusSquare.row.isValid()) {
        enter.enable();
    }
    advance(false, inputsNotMarkedCorrect);
}
function selectInput(event) {
    event.target.inputObject.select();
}
function deleteEntry() {
    if(focusSquare !== enter && focusSquare !== playAgain) {
        const enterIsEnabled = focusSquare.row.isValid();
        focusSquare.element.textContent = "";
        focusSquare.letter = false;
        const inputsNotMarkedCorrect = focusSquare.row.inputs.filter(input => input.isActive());
        if(enterIsEnabled) {
            enter.disable();
        }
        if(focusSquare !== inputsNotMarkedCorrect[0]) {
            advance(true, inputsNotMarkedCorrect);
        }
        
    }
}
function letterEntry(event) {
    event.preventDefault();
    const code = event.code;
    if(code === "Enter") {
        if(focusSquare === enter) {
            evaluateGuess();
            return;
        }
        if(focusSquare === playAgain) {
            initialize(true);
            return;
        }
    }
    const inputsNotMarkedCorrect = focusSquare.row.inputs.filter(input => input.isActive());
    if(code === "Tab") {
        advance(event.shiftKey, inputsNotMarkedCorrect);
        return;
    }
    if(code === "ArrowRight") {
        advance(false, inputsNotMarkedCorrect);
        return;
    }
    if(code === "ArrowLeft") {
        if(focusSquare !== inputsNotMarkedCorrect[0]) {
            advance(true, inputsNotMarkedCorrect);
        }
        return;
    }
    if(focusSquare === enter || focusSquare === playAgain) {
        return;
    }
    if(code === "Backspace" || code === "Delete") {
        const enterIsEnabled = focusSquare.row.isValid();
        focusSquare.element.textContent = "";
        if(focusSquare !== inputsNotMarkedCorrect[0]) {
            advance(true, inputsNotMarkedCorrect);
        }
        if(enterIsEnabled) {
            enter.disable();
        }
        return;
    }
    //if the user didn't press a letter don't do anything. This code also prevents code.length from begin less than 4 so that the next condition works more reliably.
    if(code.length !== 4) {
        return;
    }
    //if the user didn't press a letter don't do anything
    if(code.slice(0, 3) !== "Key"){
        return;
    }
    focusSquare.element.textContent = code.slice(3).toUpperCase();
    focusSquare.letter = code.slice(3).toUpperCase();
    if(focusSquare.row.isValid()) {
        enter.enable();
    } else {
        enter.disable();
    }
    advance(false, inputsNotMarkedCorrect);
}
function advance(movingBackward, inputs) {
    if(movingBackward) {
        if(focusSquare === enter) {
            inputs[inputs.length - 1].select();
            return;
        }
        if(focusSquare !== inputs[0]) {
            inputs[inputs.indexOf(focusSquare) - 1].select();
        } else if (focusSquare.row.isValid()) {
            enter.select();
        } else {
            inputs[inputs.length - 1].select();
        }
    } else {
        //if we are currently at the right-most input in the row and all of the inputs are filled in
        if(focusSquare.row.isValid() && focusSquare === inputs[inputs.length - 1]) {
            //focus on the enter button
            enter.select();
            return;
        }
        //find the first input that has an index that is greater than the current index
        let nextInput = inputs[inputs.indexOf(focusSquare) + 1];
        if(nextInput) {
            nextInput.select();
        } else {
            inputs[0].select();
        }
    }
}
function evaluateGuess() {
    const correct = enter.row.evaluate();
    //if the player has not yet won or lost
    if(enter.row.index < 5 && correct.length < 5) {
        rows[enter.row.index + 1].activate(correct);
        return;
    }
    enter.row.element.replaceChild(playAgain, enter);
    playAgain.row = enter.row;
    focusSquare = playAgain;
    //if the player lost
    if(enter.row.index === 5 && correct.length < 5) {
        answer.textContent = "The word is " + word + ".";
    } else {
        answer.textContent = "You won!";
    }
}