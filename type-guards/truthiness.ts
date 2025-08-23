/* https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing */

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return "Nobody's here. :(";
}

console.log(getUsersOnlineMessage(10));
