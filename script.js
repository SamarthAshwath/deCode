            let firstDivContent = document.getElementById('CardCheck');
            let secondDivContent = document.getElementById('editor');
let thirdDivContent = document.getElementById('editorButton');


const component = document.querySelectorAll('input[name="comp"]');
component.forEach((radio) => {
    radio.addEventListener('change', function () {
        if (this.value === "card") {
            console.log(this.value);
            showCard();
            removeButton();
            removeDrop();
            
            secondDivContent.innerHTML = firstDivContent.innerHTML;
            console.log(secondDivContent);
        } else if (this.value === "button") {
            showButton();
            removeCard();
            removeDrop();
            console.log(this.value);
            secondDivContent.innerHTML = thirdDivContent.innerHTML;
            console.log(secondDivContent);
        } else if (this.value === "dropdown") {
            showDrop();
            removeButton();
            removeCard();
            console.log(this.value);
        }
    })
})


const system = document.querySelectorAll('input[name="sys"]');
system.forEach((radio) => {
    radio.addEventListener('change', function () {
        if (this.value === "mdesign") {
            console.log(this.value);
            NOappleSys();
            NObootSys();
            materialSys();
        } else if (this.value === "bootstrap") {
            console.log(this.value);
            NOmaterialSys();
            NOappleSys();
            bootSys();
        } else if (this.value === "apple") {
            NOmaterialSys();
            NObootSys();
            appleSys();
            console.log(this.value);
        }
    })
})

//add and remove Card HTML
function showCard() {
    const element = document.querySelector('#CardCheck')
    element.classList.replace("noshowCard", "showCard");
}
function removeCard() {
    const element = document.querySelector('#CardCheck')
    element.classList.replace("showCard", "noshowCard");
}

//add and remove Button HTML
function showButton() {
    const element = document.querySelector('#ButtonCheck')
    element.classList.replace("noshowButton", "showButton");
}
function removeButton() {
    const element = document.querySelector('#ButtonCheck')
    element.classList.replace("showButton", "noshowButton");
}

//add and remove Dropdown HTML
function showDrop() {
    const element = document.querySelector('#DropCheck')
    element.classList.replace("noshowDrop", "showDrop");
}
function removeDrop() {
    const element = document.querySelector('#DropCheck')
    element.classList.replace("showDrop", "noshowDrop");
}



function materialSys() {
    const cardElement = document.querySelector('#CardCheck');
    cardElement.classList.add("Material");
    const buttonElement = document.querySelector('#ButtonCheck');
    buttonElement.classList.add("Material");
    const dropElement = document.querySelector('#DropCheck');
    dropElement.classList.add("Material");
}
function NOmaterialSys() {
    const cardElement = document.querySelector('#CardCheck');
    cardElement.classList.remove("Material");
    const buttonElement = document.querySelector('#ButtonCheck');
    buttonElement.classList.remove("Material");
    const dropElement = document.querySelector('#DropCheck');
    dropElement.classList.remove("Material");
}

function bootSys() {
    const cardElement = document.querySelector('#CardCheck');
    cardElement.classList.add("Bootstrap");
    const buttonElement = document.querySelector('#ButtonCheck');
    buttonElement.classList.add("Bootstrap");
    const dropElement = document.querySelector('#DropCheck');
    dropElement.classList.add("Bootstrap");
}
function NObootSys() {
    const cardElement = document.querySelector('#CardCheck');
    cardElement.classList.remove("Bootstrap");
    const buttonElement = document.querySelector('#ButtonCheck');
    buttonElement.classList.remove("Bootstrap");
    const dropElement = document.querySelector('#DropCheck');
    dropElement.classList.remove("Bootstrap");
}

function appleSys() {
    const cardElement = document.querySelector('#CardCheck');
    cardElement.classList.add("Apple");
    const buttonElement = document.querySelector('#ButtonCheck');
    buttonElement.classList.add("Apple");
    const dropElement = document.querySelector('#DropCheck');
    dropElement.classList.add("Apple");
}
function NOappleSys() {
    const cardElement = document.querySelector('#CardCheck');
    cardElement.classList.remove("Apple");
    const buttonElement = document.querySelector('#ButtonCheck');
    buttonElement.classList.remove("Apple");
    const dropElement = document.querySelector('#DropCheck');
    dropElement.classList.remove("Apple");
}





const colorPicker = document.getElementById('color-picker');
const selectedColor = document.getElementById('selected-color');


async function fetchColorData() {
  try {
    const response = await fetch('https://www.thecolorapi.com/id?rgb=random');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching color data:', error);
  }
}

async function updateColorPicker() {
  const colorData = await fetchColorData();
  if (colorData) {
    const { hex } = colorData;
    colorPicker.value = `#${hex.value}`;
    selectedColor.style.backgroundColor = `#${hex.value}`;
  }
}

colorPicker.addEventListener('change', async () => {
  const colorValue = colorPicker.value;
  selectedColor.style.backgroundColor = colorValue;
  console.log('Selected color:', colorValue);
});

updateColorPicker();


const btn = document.querySelector('#newPallete');
const colour = document.querySelectorAll('.colour');
const hex = document.querySelectorAll('.hex');

btn.addEventListener('click', generateColours);

function generateColours() {
    for (let i=0; i<colour.length; i++){
        const randomColor = Math.floor(Math.random()*123214).toString(16);
        colour[i].style.background = "#" + randomColor;
        colour[i].classList.add('fade-in');
        setTimeout(() => colour[i].classList.remove('fade-in'), 400);
        hex[i].innerHTML = randomColor;
    }
}

generateColours();