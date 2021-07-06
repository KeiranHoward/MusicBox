window.addEventListener('load', () => {
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colours = [
        '#258ea6',
        '#549f93',
        '#2b4162',
        '#f7aef8',
        '#B388EB',
        '#9684A1'
    ];
    
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
                sound[index].currentTime = 0;
            sound[index].play();
            
            bubbleMaker(index);
        });
    });
    
    const bubbleMaker = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colours[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);

        });
    };
});
