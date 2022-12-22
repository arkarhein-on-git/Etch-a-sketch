// function createGrid( row, column) {

//     const container = document.querySelector('.container');

//     for ( let i = 0; i < row ;i++) {
//         for ( let j = 0 ; j < column; j++) {

//             const divs = document.createElement('div');
//             divs.style.background = 'red';
//             divs.style.border = ' 2px solid black';
//             container.appendChild(divs);

//             divs.addEventListener('mouseover', function changeColor(){
//                  divs.style.background = 'blue';
//             })

//         }
//     }
// } 


const btn = document.querySelector('button');

btn.addEventListener('click', function userInput(){
        const row = prompt('Set the row') *1 ;
        const column = prompt('Set the column') *1; 
        document.documentElement.style.setProperty('--row', row); 


        function createGrid( row, column) {

            const container = document.querySelector('.container');
        
            for ( let i = 0; i < row ;i++) {
                for ( let j = 0 ; j < column; j++) {
        
                    const divs = document.createElement('div');
                    divs.style.background = 'black';
                    divs.style.border = '1px solid black';
                    container.appendChild(divs); 
                      
                    divs.addEventListener('mouseover', function changeColor(){
                         divs.style.background = randomRGB();
                    })
        
                }
            }
        }
  
    createGrid(row , column);

})

function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 256) },${Math.floor(Math.random() * 256) },${Math.floor(Math.random() * 256) })`;
}
