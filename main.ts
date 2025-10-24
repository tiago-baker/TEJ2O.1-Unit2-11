/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program does an else if statment
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables 
let interger1 : number = 0
let interger2 : number = 0

// get Numbers
interger1 = randint (0, 99)
interger2 = randint (0, 99)
 
 // show number for interger1 
input.onButtonPressed(Button.A, function() {
    basic.showNumber(interger1)
})

// show number for interger2
input.onButtonPressed(Button.B, function() {
    basic.showNumber(interger2)
})

// if statment
input.onGesture(Gesture.Shake, function () {
    if (interger1 > interger2) {
    basic.showString(interger1 + ">" + interger2 )

    } else {
    basic.showString(interger1 + "<" + interger2)
    }
})
