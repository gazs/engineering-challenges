# Pirates

You are shipwrecked on a desert island with nothing but your own company
and a solar powered laptop with the Node.js, Golang and Python3 or you prefered development environment installed. Without internet access you're driven, by boredom to scratch
in the sand where you find a compass and a scroll left behind by some
algorithmically minded pirates. The scroll has a set of instructions of
how to find hidden treasure and a working satellite phone. You decide to
follow them and escape the island so you can return home to the good
weather and political stability of the island you live.

The only problem is that the scroll of instructions is very long and it
would take ages to walk around the island and follow each instruction
step by step. But wait! Can you use code to simplify the instructions to
go straight to the end and get home in time for bake-off?

## The Instructions

The scroll consists of an array of instructions of only a single word,
either `TURN` or `WALK` followed by a space and a
number. For `TURN` instructions the number is in degrees so
`90` would be a right turn and `270` for left.
`WALK` is followed by a number of steps forward.

Start facing north at the center of the island (by the obligatory palm
tree). Write a function to process this list of instructions and return
a new list of instructions that you can use to get to the end of
the trail, how few can you do it in? As usual, points for instresting
submissions including extreme brevity, verbosity, or performance and
of course finding the treasure.

These are the instructions that are written on the scroll (which
conveniently supports copy and paste).

```
[
"WALK 14",
"TURN 90",
"WALK 13",
"TURN 270",
"WALK 12",
"TURN 270",
"WALK 8",
"TURN 270",
"WALK 7",
"TURN 270",
"WALK 11",
"TURN 270",
"WALK 9",
"TURN 90",
"WALK 12",
"TURN 90",
"WALK 15",
"TURN 270",
"WALK 15",
"TURN 270",
"WALK 10",
"TURN 90",
"WALK 9",
"TURN 90",
"WALK 14",
"TURN 90",
"WALK 6",
"TURN 270",
"WALK 7",
"TURN 90",
"WALK 6",
"TURN 90",
"WALK 10",
"TURN 270",
"WALK 15",
"TURN 270",
"WALK 15",
"TURN 270",
"WALK 14",
"TURN 90",
"WALK 6",
"TURN 90",
"WALK 6",
"TURN 270",
"WALK 6",
"TURN 270",
"WALK 10",
"TURN 270",
"WALK 15",
"TURN 270",
"WALK 13",
"TURN 270",
"WALK 13",
"TURN 270",
"WALK 6",
"TURN 90",
"WALK 13",
"TURN 270",
"WALK 10",
"TURN 90",
"WALK 14",
"TURN 270",
"WALK 12",
"TURN 270",
"WALK 10",
"TURN 270",
"WALK 6",
"TURN 270",
"WALK 8",
"TURN 90",
"WALK 11",
"TURN 90",
"WALK 10",
"TURN 270",
"WALK 14",
"TURN 90",
"WALK 15",
"TURN 270",
"WALK 12",
"TURN 90",
"WALK 14",
"TURN 90",
"WALK 12",
"TURN 90",
"WALK 12",
"TURN 90",
"WALK 9",
"TURN 90",
"WALK 14",
"TURN 90",
"WALK 7",
"TURN 270",
"WALK 10",
"TURN 90",
"WALK 13",
"TURN 270",
"WALK 8",
"TURN 270",
"WALK 14",
"TURN 270",
"WALK 9"
]
```
