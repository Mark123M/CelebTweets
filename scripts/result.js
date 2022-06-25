const names = 
[
  {handle:'BarackObama', 
  realname: 'Barack Obama'},
  {handle:'AOC', 
  realname: 'Alexandria Ocasio-Cortez'},
  {handle:'elonmusk', 
  realname: 'Elon Musk'},
  {handle:'Money23Green', 
  realname: 'Draymond Green'},
  {handle:'POTUS', 
  realname: 'Joe Biden'},
  {handle:'neiltyson', 
  realname: 'Neil Degrasse Tyson'},
  {handle:'ConanOBrien', 
  realname: 'Conan OBrien'},
  {handle:'BillGates', 
  realname: 'Bill Gates'},
  {handle:'JohnCena', 
  realname: 'John Cena'},
  {handle:'MichelleObama', 
  realname: 'Michelle Obama'},
  {handle:'VP', 
  realname: 'Kamala Harris'},
  {handle:'jimmyfallon', 
  realname: 'Jimmy Fallon'},
  {handle:'MLHacks', 
  realname: 'MLHacks'},
  {handle:'pokimanelol', 
  realname: 'Queen Poki'},

  ]
  //var accounts = ["BarackObama", "AOC", "elonmusk", "Money23Green", "POTUS", "neiltyson", "ConanOBrien", 
  //"BillGates", "JohnCena", "MichelleObama", "VP", "jimmyfallon"]
let randomProfile = names[Math.floor(Math.random() * 11)]
const randUser = randomProfile.handle
const ans = randomProfile.realname

let randTweet = {};
console.log(randUser,ans)


fetch(`https://safe-sierra-25241.herokuapp.com/${randUser}`)
	.then(response => response.json())
	.then(data => game(data))
	.catch(err => console.log(err))

function game(data) {

	randTweet = data
	console.log(randTweet)
	const twBox = document.createElement('div')
	twBox.classList.add('tweetbox')
	twBox.innerHTML =
		`
    <div class="pfp"></div>
  
      <div class="name-and-handle">
        <div class="name"></div>
        <div class="handle"></div>
      </div>
  
      <p style="font-size: 19px" class="tweettext">
        ${randTweet.tweet} 
      </p>
  
      <p style="font-size: 16px" class="datetime">
        10:57 am · 24 Jun 2022
      </p>
    `
	document.body.appendChild(twBox)

	const shuffled = names.slice(0).sort(() => 0.5 - Math.random());
	shuffled.splice(shuffled.indexOf(randUser), 1)
	console.log(shuffled)
	let options = shuffled.splice(0, 3)
	options.push(randomProfile)
	options = options.sort(() => 0.5 - Math.random())
	console.log(options)

	const answerBox = document.createElement('div')
	answerBox.classList.add('answerBox')
	answerBox.innerHTML =
		`
    <div class="answer-container">
    <button style="font-size: 20px" class="answer-container-item correct">
      <div class="answer-container-word">
        ${options[0].realname}
      </div>
    </button>
    <button style="font-size: 20px" class="answer-container-item correct">
      <div class="answer-container-word">
        ${options[1].realname}
      </div>
    </button>
  </div>
  <div class="answer-container">
    <button style="font-size: 20px" class="answer-container-item correct">
      <div class="answer-container-word">
        ${options[2].realname}
      </div>
    </button>
    <button style="font-size: 20px" class="answer-container-item correct">
      <div class="answer-container-word">
        ${options[3].realname}
      </div>
    </button>
  </div>
    
    `
	document.body.appendChild(answerBox)
	const fullButtons = document.querySelectorAll('.answer-container')
	for (let fullButton of fullButtons) {
		fullButton.classList.toggle('fade')
	}
  
  const btns = document.querySelectorAll('.answer-container-item')

  for (let btn of btns) {

		console.log(btn)
		btn.addEventListener('click', function(e) {
      
      //replace the current element with the tweet
      const realTweet = document.createElement("div")
      realTweet.classList.add('realTweet')
      realTweet.innerHTML =
        `
        <blockquote class="twitter-tweet"><a href="https://twitter.com/x/status/${randTweet.id}"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        `
      executeScriptElements(realTweet)
      twBox.parentNode.replaceChild(realTweet, twBox)

      
			console.log(btn.innerText)
			if (btn.innerText === ans) {
				console.log('correct answer')
        btn.style.background = "#7cb77a"
        btn.style.color = "white"
				const counter = document.querySelector('#scoreCount')
				counter.innerText = Number(counter.innerText) + 1
        
        const newButton = document.createElement("button")
        newButton.classList.add('nextButton')
        newButton.innerText = "NEXT"
        document.body.appendChild(newButton)
        newButton.addEventListener('click', function(e){
          
          newGame(names)
        })
        
			}
      else {
        btn.style.background = "#d0312d"
        btn.style.color = "white"
      }
		})
	}

}


/// ***************************************************NEW GAME************************************************
function newGame(names){
  console.log('NEW GAME')

  const curTweet = document.querySelector('.realTweet')
  const curAnswerBox = document.querySelector('.answerBox')
  
  const curNextButton = document.querySelector('.nextButton')
  console.log(curNextButton)
  curNextButton.parentNode.removeChild(curNextButton)
 

  let randomProfile = names[Math.floor(Math.random() * 11)]
const randUser = randomProfile.handle
const ans = randomProfile.realname
console.log(randUser,ans)

let randTweet = {};

fetch(`https://safe-sierra-25241.herokuapp.com/${randUser}`)
	.then(response => response.json())
	.then(data => game(data))
	.catch(err => console.log(err))

function game(data) {

	randTweet = data
	console.log(randTweet)
	const twBox = document.createElement('div')
	twBox.classList.add('tweetbox')
	twBox.innerHTML =
		`
    <div class="pfp"></div>
  
      <div class="name-and-handle">
        <div class="name"></div>
        <div class="handle"></div>
      </div>
  
      <p style="font-size: 19px" class="tweettext">
        ${randTweet.tweet} 
      </p>
  
      <p style="font-size: 16px" class="datetime">
        10:57 am · 24 Jun 2022
      </p>
    `
	document.body.replaceChild(twBox, curTweet)

	const shuffled = names.slice(0).sort(() => 0.5 - Math.random());
	shuffled.splice(shuffled.indexOf(randUser), 1)
	console.log(shuffled)
	let options = shuffled.splice(0, 3)
	options.push(randomProfile)
	options = options.sort(() => 0.5 - Math.random())
	console.log(options)

	const answerBox = document.createElement('div')
	answerBox.classList.add('answerBox')
	answerBox.innerHTML =
		`
    <div class="answer-container">
    <button style="font-size: 20px" class="answer-container-item correct">
      <div class="answer-container-word">
        ${options[0].realname}
      </div>
    </button>
    <button style="font-size: 20px" class="answer-container-item correct">
      <div class="answer-container-word">
        ${options[1].realname}
      </div>
    </button>
  </div>
  <div class="answer-container">
    <button style="font-size: 20px" class="answer-container-item correct">
      <div class="answer-container-word">
        ${options[2].realname}
      </div>
    </button>
    <button style="font-size: 20px" class="answer-container-item correct">
      <div class="answer-container-word">
        ${options[3].realname}
      </div>
    </button>
  </div>
    
    `
	document.body.replaceChild(answerBox, curAnswerBox)
	const fullButtons = document.querySelectorAll('.answer-container')
	for (let fullButton of fullButtons) {
		fullButton.classList.toggle('fade')
	}

  const btns = document.querySelectorAll('.answer-container-item')

  for (let btn of btns) {

		console.log(btn)
		btn.addEventListener('click', function(e) {
      
      //replace the current element with the tweet
      const realTweet = document.createElement("div")
      realTweet.classList.add('realTweet')
      realTweet.innerHTML =
        `
        <blockquote class="twitter-tweet"><a href="https://twitter.com/x/status/${randTweet.id}"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        `
      executeScriptElements(realTweet)
      twBox.parentNode.replaceChild(realTweet, twBox)

			console.log(btn.innerText);
			if (btn.innerText === ans) {
				console.log('correct answer')
        btn.style.background = "#7cb77a"
        btn.style.color = "white"
				const counter = document.querySelector('#scoreCount')
				counter.innerText = Number(counter.innerText) + 1
        
        const newButton = document.createElement("button")
        newButton.innerText = "NEXT"
        newButton.classList.add('nextButton')
        document.body.appendChild(newButton)
        newButton.addEventListener('click', function(e){
          newGame(names)
        })
        
			}
      else {
        btn.style.background = "#d0312d"
        btn.style.color = "white"
      }
		})
	}

}




}





function executeScriptElements(containerElement) {
	const scriptElements = containerElement.querySelectorAll("script");

	Array.from(scriptElements).forEach((scriptElement) => {
		const clonedElement = document.createElement("script");

		Array.from(scriptElement.attributes).forEach((attribute) => {
			clonedElement.setAttribute(attribute.name, attribute.value);
		});

		clonedElement.text = scriptElement.text;

		scriptElement.parentNode.replaceChild(clonedElement, scriptElement);
	});
}