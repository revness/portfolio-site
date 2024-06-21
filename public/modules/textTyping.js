
export const textTyping = async () => {
    const wordsList = ['connect.', 'collaborate.', 'have a chat.']
    const bgColors = ['lightgreen', 'pink', 'lightblue', 'yellow']
    let spanEl = document.getElementById('clickHere')

    while (true) {
        for (let i = 0; i < wordsList.length; i++) {
            let randomNum = Math.floor(Math.random() * bgColors.length)
            spanEl.style.background = bgColors[randomNum]
            await new Promise(resolve => setTimeout(resolve, 2500));

            const splitWord = wordsList[i].split('')
            for (let j = 0; j < splitWord.length; j++) {
                spanEl.innerText += splitWord[j]
                await new Promise(resolve => setTimeout(resolve, 200));
            }
            await new Promise(resolve => setTimeout(resolve, 3000));
            // spanEl.innerText = ''
            for (let j = 0; j < splitWord.length; j++) {
                spanEl.innerText = spanEl.innerText.slice(0, -1)
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    }
}

