let A: number;
let Kostka = 0
let Key = 0
let Typ = 6
let Player = 1
input.onButtonPressed(Button.B, function less_sides() {
    
})
input.onButtonPressed(Button.A, function more_sides() {
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function give_key() {
    
})
function number_of_players() {
    let Player: number;
    if (Player == 1) {
        Player = 2
        basic.showString("2P")
        basic.pause(500)
        basic.clearScreen()
    } else if (Player == 2) {
        Player = 1
        basic.showString("1P")
        basic.pause(500)
        basic.clearScreen()
    }
    
}

if (input.logoIsPressed()) {
    A = 1
    basic.showNumber(1)
    basic.pause(500)
    basic.clearScreen()
}

if (input.isGesture(Gesture.Shake)) {
    if (A == 1 || A == 2) {
        Kostka = randint(1, Typ)
        basic.pause(100)
        if (Kostka > 0) {
            led.plot(0, 4)
        }
        
        if (Kostka > 1) {
            led.plot(4, 4)
        }
        
        if (Kostka > 2) {
            led.plot(0, 0)
        }
        
        if (Kostka > 3) {
            led.plot(4, 0)
        }
        
        if (Kostka > 4) {
            led.plot(2, 2)
        }
        
        if (Kostka > 5) {
            led.plot(0, 2)
            led.plot(4, 2)
        }
        
        if (Kostka == 6) {
            led.unplot(2, 2)
        }
        
        if (Kostka > 6) {
            led.plot(4, 4)
        }
        
        if (Kostka > 7) {
            led.plot(2, 4)
            led.plot(2, 0)
        }
        
        if (Kostka == 8) {
            led.unplot(2, 2)
        }
        
        if (Kostka > 8) {
            led.plot(2, 0)
        }
        
        if (Kostka > 9) {
            led.unplot(2, 2)
            led.plot(1, 2)
            led.plot(3, 2)
        }
        
        for (let index = 0; index < Kostka; index++) {
            music.playTone(500, music.beat(BeatFraction.Eighth))
            basic.pause(300)
        }
        basic.pause(3000)
        basic.clearScreen()
        if (A == 1 && Player == 2) {
            A += 1
            basic.showNumber(2)
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showString("NEXT?")
            A = 0
        }
        
    }
    
}

