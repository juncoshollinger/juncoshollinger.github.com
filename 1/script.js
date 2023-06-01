
// define the variables

let position_display = document.getElementById('position_display');
let border = document.getElementById('border');
let outside_border = document.getElementById('outside_border');
let display_border = document.getElementById('display_border');
let left_wall = document.getElementById('left_wall');
let left_wall_text = document.getElementById('left_wall_text');
let right_wall = document.getElementById('right_wall');
let title = document.getElementById('title');
let window_border = document.getElementById('window');

// calculate and input dimensions of parent divs

/*let window_border_computed_width = window.getComputedStyle(window_border);
let window_border_width = window_border_computed_width.getPropertyValue('width');
let parsed_window_border_width = parseInt(window_border_width, 10);

let window_border_computed_height = window.getComputedStyle(window_border);
let window_border_height = window_border_computed_height.getPropertyValue('height');
let parsed_window_border_height = parseInt(window_border_height, 10);

left_wall_text.style.width = (parsed_window_border_width * 0.5) + 'px';
left_wall_text.style.height = parsed_window_border_height + 'px';*/

// scroll listener

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

        /*let window_border_computed_width = window.getComputedStyle(window_border);
        let window_border_width = window_border_computed_width.getPropertyValue('width');
        let parsed_window_border_width = parseInt(window_border_width, 10);

        let window_border_computed_height = window.getComputedStyle(window_border);
        let window_border_height = window_border_computed_height.getPropertyValue('height');
        let parsed_window_border_height = parseInt(window_border_height, 10);

        left_wall_text.style.width = (parsed_window_border_width * 0.5) + 'px';
        left_wall_text.style.height = parsed_window_border_height + 'px';*/

});

/*window.addEventListener('resize', function () {

        let window_border_computed_width = window.getComputedStyle(window_border);
        let window_border_width = window_border_computed_width.getPropertyValue('width');
        let parsed_window_border_width = parseInt(window_border_width, 10);

        let window_border_computed_height = window.getComputedStyle(window_border);
        let window_border_height = window_border_computed_height.getPropertyValue('height');
        let parsed_window_border_height = parseInt(window_border_height, 10);

        left_wall_text.style.width = (parsed_window_border_width * 0.5) + 'px';
        left_wall_text.style.height = parsed_window_border_height + 'px';

})*/