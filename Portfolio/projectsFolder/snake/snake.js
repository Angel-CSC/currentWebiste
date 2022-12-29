window.addEventListener('DOMContentLoaded', () => {
    function createFloor()
    {
        for(i = 0; i < 12; i++){
            for(j = 0; j < 12; j++){
                let currentTile = document.createElement('span');
                currentTile.classList.add('floor'); //gives it the class floor
                currentTile.id = `tile[${i}][${j}]`; //will give it its id to possibly yield the apple at that current index
                currentTile.appendChild();
                document..appendChild(currentTile);
            }
        }
    };

    createFloor();

    
});