const dom ={
    remained: document.getElementById('remained'),
    result: document.getElementById('result'),
    winner: {
        name: document.getElementById('winner-name'),
        nickname: document.getElementById('winner-nickname'),
    },
    btn: document.getElementById('btn')
}

let filteredUsers = users
renderRemainedUser(filteredUsers.length)

function renderRemainedUser(count){
    dom.remained.innerHTML = count
}

//Клик по кнопке
dom.btn.onclick = () =>{
    const winner = getRandomUser(filteredUsers);

    if(winner){
        filteredUsers = getFilteredUser(filteredUsers, winner)
        renderWinner(winner)
    }
    else{
        dom.btn.style.display = 'none'
        alert('Участники закончились')

    }
    renderRemainedUser(filteredUsers.length)
    filteredUsers = getFilteredUser(filteredUsers, winner);
    renderWinner(winner);
    
}
//Функция выбора случайного пользователя
function getRandomUser(users) {
    const maxIdx = users.length - 1
    const winnerIdx = Math.floor(Math.random() * maxIdx)
    return users[winnerIdx]
}


//Отрисовка блока победителя
function renderWinner(winner){

    dom.btn.style.display = 'none'
    dom.result.style.display = 'block'
    dom.winner.name.innerHTML = winner.name
    dom.winner.nickname.innerHTML = winner.nickname
}
//Фильтрация массива
function getFilteredUser(users, winner){
    const filterUsers = users.filter(user => user.id !== winner.id)
    return filterUsers
}
