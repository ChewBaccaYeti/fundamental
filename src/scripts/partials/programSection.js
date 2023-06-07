const section = document.createElement('section')
section.className = 'program_section'

const textDiv = document.createElement('div')
textDiv.className = 'program_text'

const heading = document.createElement('h3')
heading.className = 'program_article'
heading.textContent = 'Нашата програма'

const paragraph = document.createElement('p')
paragraph.className = 'program_paragraph'
paragraph.textContent =
	'We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies.'

textDiv.appendChild(heading)
textDiv.appendChild(paragraph)

section.appendChild(textDiv)

const aboveContainerDiv = document.createElement('div')
aboveContainerDiv.className = 'program_container_above'

const aboveList = document.createElement('ul')
aboveList.className = 'program_list_above'

const listItem1 = document.createElement('li')
listItem1.className = 'program_list_item'

const handDiv = document.createElement('div')
handDiv.className = 'hand'

const handContainerDiv = document.createElement('div')
handContainerDiv.className = 'hand_container'

const handIconSvg = document.createElementNS(
	'http://www.w3.org/2000/svg',
	'svg'
)
handIconSvg.className = 'program_list_icon'
handIconSvg.setAttribute('width', '45.9px')
handIconSvg.setAttribute('height', '43.52px')

const handIconUse = document.createElementNS(
	'http://www.w3.org/2000/svg',
	'use'
)
handIconUse.setAttribute('href', './src/images/svg/sprite-devs.svg#icon-hand')

handIconSvg.appendChild(handIconUse)
handContainerDiv.appendChild(handIconSvg)

const listItem1Heading = document.createElement('h4')
listItem1Heading.className = 'program_list_article'
listItem1Heading.textContent = 'Посрещане на гости, инструктаж преди играта'

const listItem1Paragraph = document.createElement('p')
listItem1Paragraph.className = 'program_list_paragraph'
listItem1Paragraph.textContent =
	'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

handDiv.appendChild(handContainerDiv)
handDiv.appendChild(listItem1Heading)
handDiv.appendChild(listItem1Paragraph)

listItem1.appendChild(handDiv)

aboveList.appendChild(listItem1)

const listItem2 = document.createElement('li')

const arrowContainerDiv1 = document.createElement('div')
arrowContainerDiv1.className = 'arrow-container'

const arrowSvg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
arrowSvg1.className = 'arrow_above-1'
arrowSvg1.setAttribute('width', '266.95px')
arrowSvg1.setAttribute('height', '27.67px')

const arrowUse1 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
arrowUse1.setAttribute(
	'href',
	'./src/images/svg/sprite-devs.svg#icon-Ellipse-79'
)

arrowSvg1.appendChild(arrowUse1)
arrowContainerDiv1.appendChild(arrowSvg1)

listItem2.appendChild(arrowContainerDiv1)

aboveList.appendChild(listItem2)

const listItem3 = document.createElement('li')
listItem3.className = 'program_list_item'

const hatDiv = document.createElement('div')
hatDiv.className = 'hat'

const hatContainerDiv = document.createElement('div')
hatContainerDiv.className = 'hat_container'

const hatIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
hatIconSvg.className = 'program_list_icon'
hatIconSvg.setAttribute('width', '34.18px')
hatIconSvg.setAttribute('height', '43px')

const hatIconUse = document.createElementNS('http://www.w3.org/2000/svg', 'use')
hatIconUse.setAttribute('href', './src/images/svg/sprite-devs.svg#icon-hat')

hatIconSvg.appendChild(hatIconUse)
hatContainerDiv.appendChild(hatIconSvg)

const listItem3Heading = document.createElement('h4')
listItem3Heading.className = 'program_list_article'
listItem3Heading.textContent = 'Игри и забавления в ESCAPE ROOMS'

const listItem3Paragraph = document.createElement('p')
listItem3Paragraph.className = 'program_list_paragraph'
listItem3Paragraph.textContent =
	'It is a long established fact that a reader will be distracted by the readable content of a page when looking.'

hatDiv.appendChild(hatContainerDiv)
hatDiv.appendChild(listItem3Heading)
hatDiv.appendChild(listItem3Paragraph)

listItem3.appendChild(hatDiv)

aboveList.appendChild(listItem3)

const listItem4 = document.createElement('li')

const arrowContainerDiv2 = document.createElement('div')
arrowContainerDiv2.className = 'arrow-container'

const arrowSvg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
arrowSvg2.className = 'arrow_above-2'
arrowSvg2.setAttribute('width', '266.95px')
arrowSvg2.setAttribute('height', '27.67px')

const arrowUse2 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
arrowUse2.setAttribute(
	'href',
	'./src/images/svg/sprite-devs.svg#icon-Ellipse-81'
)

arrowSvg2.appendChild(arrowUse2)
arrowContainerDiv2.appendChild(arrowSvg2)

listItem4.appendChild(arrowContainerDiv2)

aboveList.appendChild(listItem4)

const listItem5 = document.createElement('li')
listItem5.className = 'program_list_item'

const forkspoonDiv = document.createElement('div')
forkspoonDiv.className = 'forkspoon'

const forkspoonContainerDiv = document.createElement('div')
forkspoonContainerDiv.className = 'forkspoon_container'

const forkspoonIconSvg = document.createElementNS(
	'http://www.w3.org/2000/svg',
	'svg'
)
forkspoonIconSvg.className = 'program_list_icon'
forkspoonIconSvg.setAttribute('width', '50.59px')
forkspoonIconSvg.setAttribute('height', '45px')

const forkspoonIconUse = document.createElementNS(
	'http://www.w3.org/2000/svg',
	'use'
)
forkspoonIconUse.setAttribute(
	'href',
	'./src/images/svg/sprite-devs.svg#icon-forkspoon'
)

forkspoonIconSvg.appendChild(forkspoonIconUse)
forkspoonContainerDiv.appendChild(forkspoonIconSvg)

const listItem5Heading = document.createElement('h4')
listItem5Heading.className = 'program_list_article'
listItem5Heading.textContent =
	'Почерпка, игри и дискотека в залата за парти Here'

const listItem5Paragraph = document.createElement('p')
listItem5Paragraph.className = 'program_list_paragraph'
listItem5Paragraph.textContent =
	'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

forkspoonDiv.appendChild(forkspoonContainerDiv)
forkspoonDiv.appendChild(listItem5Heading)
forkspoonDiv.appendChild(listItem5Paragraph)

listItem5.appendChild(forkspoonDiv)

aboveList.appendChild(listItem5)

aboveContainerDiv.appendChild(aboveList)

section.appendChild(aboveContainerDiv)

const belowContainerDiv = document.createElement('div')
belowContainerDiv.className = 'program_container_below'

const belowList = document.createElement('ul')
belowList.className = 'program_list_below'

const listItem6 = document.createElement('li')
listItem6.className = 'program_list_item'

const gamepadDiv = document.createElement('div')
gamepadDiv.className = 'gamepad'

const gamepadContainerDiv = document.createElement('div')
gamepadContainerDiv.className = 'gamepad_container'

const gamepadIconSvg = document.createElementNS(
	'http://www.w3.org/2000/svg',
	'svg'
)
gamepadIconSvg.className = 'program_list_icon'
gamepadIconSvg.setAttribute('width', '51.25px')
gamepadIconSvg.setAttribute('height', '36.9px')

const gamepadIconUse = document.createElementNS(
	'http://www.w3.org/2000/svg',
	'use'
)
gamepadIconUse.setAttribute(
	'href',
	'./src/images/svg/sprite-devs.svg#icon-gamepad'
)

gamepadIconSvg.appendChild(gamepadIconUse)
gamepadContainerDiv.appendChild(gamepadIconSvg)

const listItem6Heading = document.createElement('h4')
listItem6Heading.className = 'program_list_article'
listItem6Heading.textContent = 'Анимация с професионални аниматори'

const listItem6Paragraph = document.createElement('p')
listItem6Paragraph.className = 'program_list_paragraph'
listItem6Paragraph.textContent =
	'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

gamepadDiv.appendChild(gamepadContainerDiv)
gamepadDiv.appendChild(listItem6Heading)
gamepadDiv.appendChild(listItem6Paragraph)

listItem6.appendChild(gamepadDiv)

belowList.appendChild(listItem6)

const listItem7 = document.createElement('li')

const arrowContainerDiv3 = document.createElement('div')
arrowContainerDiv3.className = 'arrow-container'

const arrowSvg3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
arrowSvg3.className = 'arrow_below-1'
arrowSvg3.setAttribute('width', '266.95px')
arrowSvg3.setAttribute('height', '27.67px')

const arrowUse3 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
arrowUse3.setAttribute(
	'href',
	'./src/images/svg/sprite-devs.svg#icon-Ellipse-83'
)

arrowSvg3.appendChild(arrowUse3)
arrowContainerDiv3.appendChild(arrowSvg3)

listItem7.appendChild(arrowContainerDiv3)

belowList.appendChild(listItem7)

const listItem8 = document.createElement('li')
listItem8.className = 'program_list_item'

const presentDiv = document.createElement('div')
presentDiv.className = 'present'

const presentContainerDiv = document.createElement('div')
presentContainerDiv.className = 'present_container'

const presentIconSvg = document.createElementNS(
	'http://www.w3.org/2000/svg',
	'svg'
)
presentIconSvg.className = 'program_list_icon'
presentIconSvg.setAttribute('width', '48.48px')
presentIconSvg.setAttribute('height', '46.17px')

const presentIconUse = document.createElementNS(
	'http://www.w3.org/2000/svg',
	'use'
)
presentIconUse.setAttribute(
	'href',
	'./src/images/svg/sprite-devs.svg#icon-present'
)

presentIconSvg.appendChild(presentIconUse)
presentContainerDiv.appendChild(presentIconSvg)

const listItem8Heading = document.createElement('h4')
listItem8Heading.className = 'program_list_article'
listItem8Heading.textContent = 'Подаръци и специални изненади'

const listItem8Paragraph = document.createElement('p')
listItem8Paragraph.className = 'program_list_paragraph'
listItem8Paragraph.textContent =
	'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

presentDiv.appendChild(presentContainerDiv)
presentDiv.appendChild(listItem8Heading)
presentDiv.appendChild(listItem8Paragraph)

listItem8.appendChild(presentDiv)

belowList.appendChild(listItem8)

const listItem9 = document.createElement('li')

const arrowContainerDiv4 = document.createElement('div')
arrowContainerDiv4.className = 'arrow-container'

const arrowSvg4 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
arrowSvg4.className = 'arrow_below-2'
arrowSvg4.setAttribute('width', '266.95px')
arrowSvg4.setAttribute('height', '27.67px')

const arrowUse4 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
arrowUse4.setAttribute(
	'href',
	'./src/images/svg/sprite-devs.svg#icon-Ellipse-85'
)

arrowSvg4.appendChild(arrowUse4)
arrowContainerDiv4.appendChild(arrowSvg4)

listItem9.appendChild(arrowContainerDiv4)

belowList.appendChild(listItem9)

belowContainerDiv.appendChild(belowList)

section.appendChild(belowContainerDiv)
containerDiv.appendChild(section)

document.getElementById('main_container').appendChild(containerDiv)
