/*******************************************************************************
**Erik Bridgeford
**October 5, 2016
**
**This program prompts the user to enter an integer that the "player" will try
**to guess. If the guess is below the number, program displays "too low"
**if the guess is above the number, program displays "too high"
**loop continues untill correct guess is given, then displays how many
**tries it took.
**********************************************************************/
#include <iostream>

using namespace std;

int main()
{
    int num;
    int guess;
    bool correct=false;
    int x=0;

    //prompts user to input number to be guessed.
    cout<<"Enter the number for the player to guess."<<endl;
    cin>> num;
    cout<<"Enter your guess."<<endl;

    //using boolean statement to continue loop until correct guess.
    while(!correct){
       cin>> guess;
       x++;

        //checks if guess is below num. If below, outputs message.
        if (guess<num){
           cout<<"Too low - try again"<<endl;
            }
        //checks if guess is above num. If above, outputs message.
        if (guess>num){
           cout<<"Too high - try again"<<endl;
            }
        // checks if guess is correct.
        //If correct, boolean value changes and loop ends.
        if(guess==num){
           correct=true;
           //cout<<"good guess"<<endl;
            }
    }
      // Outputs number of attemps made by user.
      cout<<"You guessed it in "<<x++<<" tries  "<<endl;


return 0;
}
