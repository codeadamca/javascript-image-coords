

const programmer = document.getElementById('programmer');

programmer.addEventListener('click', (event) => {

    const rect = programmer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`X: ${x}, Y: ${y}`);

    if(y > 25 && y <= 175) {
        console.log('Clicked within the head area!');
    }
    else if(y > 175 && y <= 475) {
        console.log('Clicked within the body area!');
    }
    else if(y > 475 && y <= 540) {
        console.log('Clicked within the feet area!');
    }

});