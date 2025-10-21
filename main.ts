/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program does an else if statment
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// varbles 
let inerger1 : number = 0
let inerger2 : number = 0

// get Numbers
inerger1 = randint (0, 99)
inerger2 = randint (0, 99)
 
input.onButtonPressed(Button.A, function() {
    basic.showNumber(inerger1)
})

input.onButtonPressed(Button.B, function() {
    basic.showNumber(inerger2)
})

input.onGesture(Gesture.Shake, function () 
{
    if (inerger1 > inerger2)
    basic.showString(inerger1 + ">" + inerger2 )

    else if (inerger1 < inerger2)
    basic.showString(inerger1 + "<" + inerger2)
})
