//let EXAMPLE = document.getElementById('EXAMPLE');


let position_display = document.getElementById('position_display');
let border = document.getElementById('border');
let outside_border = document.getElementById('outside_border');
let display_border = document.getElementById('display_border');
let left_wall = document.getElementById('left_wall');
let right_wall = document.getElementById('right_wall');
let title = document.getElementById('title');

window.addEventListener('scroll', function() {

        let position = window.scrollY;

        position_display.innerHTML = position;

        border.style.top = position + 'px';
        left_wall.style.left = 0 - (position * 0.7) + 'px';
        left_wall.style.top = 0 + position + 'px';
        right_wall.style.right = 0 - (position * 0.7) + 'px';
        right_wall.style.top = 0 + position + 'px';

        if (position >= 1600) {
                left_wall.style.display = 'none';
                right_wall.style.display = 'none';
        } else {
                left_wall.style.display = 'flex';
                right_wall.style.display = 'flex';
                title.style.top = 0 + position + 'px';
        }

});