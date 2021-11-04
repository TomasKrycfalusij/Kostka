Kostka = 0
Key = 0
Typ = 6
Player = 1
input.on_button_pressed(Button.B, less_sides)
input.on_button_pressed(Button.A, more_sides)
input.on_logo_event(TouchButtonEvent.PRESSED, give_key)

def number_of_players():
    if Player == 1:
        Player = 2
        basic.show_string("2P")
        basic.pause(500)
        basic.clear_screen()
    elif Player == 2:
        Player = 1
        basic.show_string("1P")
        basic.pause(500)
        basic.clear_screen()

def more_sides():
    pass
def less_sides():
    pass
def give_key():
    pass

if input.logo_is_pressed():
    A = 1
    basic.show_number(1)
    basic.pause(500)
    basic.clear_screen()
if input.is_gesture(Gesture.SHAKE):
    if A == 1 or A == 2:
        Kostka = randint(1, Typ)
        basic.pause(100)
        if Kostka > 0:
            led.plot(0, 4)
        if Kostka > 1:
            led.plot(4, 4)
        if Kostka > 2:
            led.plot(0, 0)
        if Kostka > 3:
            led.plot(4, 0)
        if Kostka > 4:
            led.plot(2, 2)
        if Kostka > 5:
            led.plot(0, 2)
            led.plot(4, 2)
        if Kostka == 6:
            led.unplot(2, 2)
        if Kostka > 6:
            led.plot(4, 4)
        if Kostka > 7:
            led.plot(2, 4)
            led.plot(2, 0)
        if Kostka == 8:
            led.unplot(2, 2)
        if Kostka > 8:
            led.plot(2, 0)
        if Kostka > 9:
            led.unplot(2, 2)
            led.plot(1, 2)
            led.plot(3, 2)
        for index in range(Kostka):
            music.play_tone(500, music.beat(BeatFraction.EIGHTH))
            basic.pause(300)
        basic.pause(3000)
        basic.clear_screen()
        if A == 1 and Player == 2:
            A += 1
            basic.show_number(2)
            basic.pause(500)
            basic.clear_screen()
        else:
            basic.show_string("NEXT?")
            A = 0