const PI = Math.PI

export const FRONT = {
    type: 'front',
    opposite: 'back',
    rotation:[0,0,0],
    location: [0.7, -0.4, 0]
}
export const FRONT_RIGHT = {
    type: 'front_right',
    opposite: 'back_left',
    rotation:[0,-PI/4,0],
    location: [0.5, -0.4, 0.5]
}
export const FRONT_LEFT = {
    type: 'front_left',
    opposite: 'back_right',
    rotation:[0,PI/4,0],
    location: [0.5, -0.4, -0.5]
}
export const BACK = {
    type: 'back',
    opposite: 'front',
    rotation:[0,-PI,0],
    location: [-0.7, -0.4, 0]
}
export const BACK_RIGTH = {
    type: 'back_right',
    opposite: 'front_left',
    rotation:[0,-PI*3/4,0],
    location: [-0.5, -0.4, 0.5]
}
export const BACK_LEFT = {
    type: 'back_left',
    opposite: 'front_right',
    rotation:[0,PI*3/4,0],
    location: [-0.5, -0.4, -0.5]
}
export const RIGHT = {
    type: 'right',
    opposite: 'left',
    rotation:[0,-PI/2,0],
    location: [0, -0.4, 0.7]
}
export const LEFT = {
    type: 'left',
    opposite: 'right',
    rotation:[0,PI/2,0],
    location: [0, -0.4, -0.7]
}

export const TOP = {
    type: 'top',
    opposite: 'bottom',
    rotation:[0,0,PI/3],
    location: [0, 0.7, 0]
}

export const TOP_FRONT = {
    type: 'top_front',
    opposite: 'bottom_back',
    rotation:[0,0,PI/9],
    location: [0.5, 0.7, 0]
}
export const TOP_FRONT_RIGTH = {
    type: 'top_front_right',
    opposite: 'bottom_back_left',
    rotation:[0,-PI/4,PI/9],
    location: [0.4,0.7,0.4]
}
export const TOP_FRONT_LEFT = {
    type: 'top_front_left',
    opposite: 'bottom_back_right',
    rotation:[0,PI/4,PI/9],
    location: [0.4,0.7,-0.4]
}
export const TOP_BACK = {
    type: 'top_back',
    opposite: 'bottom_front',
    rotation:[0,PI,PI/9],
    location: [-0.5, 0.7, 0]
}
export const TOP_BACK_RIGHT = {
    type: 'top_back_right',
    opposite: 'bottom_front_left',
    rotation:[0,-PI*3/4,PI/7],
    location: [-0.4, 0.7, 0.4]
}
export const TOP_BACK_LEFT = {
    type: 'top_back_left',
    opposite: 'bottom_front_right',
    rotation:[0,PI*3/4,PI/9],
    location: [-0.4, 0.7, -0.4]
}
export const TOP_RIGHT = {
    type: 'top_right',
    opposite: 'bottom_left',
    rotation:[0,-PI/2,PI/9],
    location: [0, 0.7, 0.5]
}
export const TOP_LEFT = {
    type: 'top_left',
    opposite: 'bottom_right',
    rotation:[0,PI/2,PI/9],
    location: [0,0.7, -0.5]
}

export const BOTTOM = {
    type: 'bottom',
    opposite: 'top',
    rotation:[0,0,-PI/3],
    location: [0, -0.7, 0]
}

export const BOTTOM_FRONT = {
    type: 'bottom_front',
    opposite: 'top_back',
    rotation:[0,0,-PI/7],
    location: [0.5,-0.7, 0]
}
export const BOTTOM_FRONT_RIGTH = {
    type: 'bottom_front_right',
    opposite: 'top_back_left',
    rotation:[0,-PI/4,-PI/7],
    location: [0.4, -0.7, 0.4]
}
export const BOTTOM_FRONT_LEFT = {
    type: 'bottom_front_left',
    opposite: 'top_back_right',
    rotation:[0,PI/4,-PI/7],
    location: [0.4, -0.7,-0.4]
}
export const BOTTOM_BACK = {
    type: 'bottom_back',
    opposite: 'top_front',
    rotation:[0,PI,-PI/7],
    location: [-0.5, -0.7, 0]
}
export const BOTTOM_BACK_RIGTH = {
    type: 'bottom_back_right',
    opposite: 'top_front_left',
    rotation:[0,-PI*3/4,-PI/7],
    location: [-0.4,-0.7, 0.4]
}
export const BOTTOM_BACK_LEFT = {
    type: 'bottom_back_left',
    opposite: 'top_front_right',
    rotation:[0,PI*3/4,-PI/7],
    location: [-0.4, -0.7, -0.4]
}
export const BOTTOM_RIGHT = {
    type: 'bottom_right',
    opposite: 'top_left',
    rotation:[0,-PI/2,-PI/7],
    location: [0, -0.7,0.5]
}
export const BOTTOM_LEFT = {
    type: 'bottom_left',
    opposite: 'top_right',
    rotation:[0,PI/2,-PI/7],
    location: [0, -0.7, -0.5]
} 