var myMars = new Array (10);

for (var i = 0; i < 10; i++) {
  myMars[i] = new Array (10);
}

var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }

    if (rover.position[0] < 0) {
      rover.position[0] += 10;
    }

    if (rover.position[0] > 9) {
      rover.position[0] -= 10;
    }

    if (rover.position[1] < 0) {
      rover.position[1] += 10;
    }

    if (rover.position[1] > 9) {
      rover.position[1] -= 10;
    }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

 function goBackward(rover) {
   switch(rover.direction) {
     case 'N':
       rover.position[0]--;
       break;
     case 'E':
       rover.position[1]--;
       break;
     case 'S':
       rover.position[0]++;
       break;
     case 'W':
       rover.position[1]++;
       break;
   }

     if (rover.position[0] < 0) {
       rover.position[0] += 10;
     }

     if (rover.position[0] > 9) {
       rover.position[0] -= 10;
     }

     if (rover.position[1] < 0) {
       rover.position[1] += 10;
     }

     if (rover.position[1] > 9) {
       rover.position[1] -= 10;
     }

   console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
 }

 function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction ='E';
      break;
    case 'E':
      rover.direction ='S';
      break;
    case 'S':
      rover.direction ='W';
      break;
    case 'W':
      rover.direction ='N';
      break;
  }
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction='W';
      break;
    case 'W':
      rover.direction='S';
      break;
    case 'S':
      rover.direction='E';
      break;
    case 'E':
      rover.direction='N';
      break;
  }
}

function commands() {
  var commands = prompt('Provide sequence of commands to move the rover: f (forward), b (backward), l (left), r (right).');

  var arrayCommands = commands.split("");

  for (var i = 0; i < arrayCommands.length; i++) {
    if (arrayCommands[i] == 'f') {
      goForward(myRover);
    }

    else if (arrayCommands[i] == 'b') {
      goBackward(myRover);
    }

    else if (arrayCommands[i] == 'l') {
      turnLeft(myRover);
    }

    else if (arrayCommands[i] == 'r') {
      turnRight(myRover);
    }

    else {
      alert('Command not recognized');
      return commands();
    }
  }
}

commands();
