let list = document.getElementById('demo-list');
function add() {
    let newChild = document.createElement('li');
    newChild.innerHTML = 'test123test3test123test123test123test123test123test123';
    newChild.className = 'demo-card';
    list.prepend(newChild);
}