function createStars() {
    const container= document.querySelector('.container');
    for(let i=0;i<3000;i++){
        //increase the number of stars to 1000
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = '1px';
        star.style.height= '1px';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random()* 100 + '%';
        container.appendChild(star)
    }
}
createStars();