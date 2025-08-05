window.addEventListener('DOMContentLoaded', () => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
        const x = pointerX.toFixed(2);
        const y = pointerY.toFixed(2);
        const xp = (pointerX / window.innerWidth).toFixed(2);
        const yp = (pointerY / window.innerHeight).toFixed(2);
        document.documentElement.style.setProperty('--x', x);
        document.documentElement.style.setProperty('--xp', xp);
        document.documentElement.style.setProperty('--y', y);
        document.documentElement.style.setProperty('--yp', yp);
    };

    document.body.addEventListener('pointermove', syncPointer);

    const soloButton = document.getElementById('solo-button');
    if (soloButton) {
        soloButton.addEventListener('click', () => {
            window.location.href = '../../form.html';
        });
    } else {
        console.error('solo-button not found');
    }
});