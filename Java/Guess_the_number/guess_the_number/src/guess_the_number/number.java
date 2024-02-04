package guess_the_number;

import java.util.Scanner;

public class number {

	public static void numberGuessing() {
		Scanner sc = new Scanner(System.in);
		int num = 1 + (int) (100 * Math.random());

		int trial = 5;

		int i, guess = 0;
		System.out.println("A number is chosen between 1 to 100.\nGuess the number within 5 trials.");

		for (i = 0; i < trial; i++) {
			System.out.print("Guess the number: ");
			guess = sc.nextInt();

			if (num == guess) {
				System.out.println("Congratulations! \nYou guessed the number.");
				break;
			} 
			else if (num > guess && i != trial - 1) {
				System.out.println("The number is greater than " + guess);
			} 
			else if (num < guess && 1 != trial - 1) {
				System.out.println("The number is lesser than " + guess);
			}
		}

		if (i == trial) {
			System.out.println("\nYou have exhausted " + trial + " trails.");
			System.out.println();
			System.out.println("The number was " + num);
		}

	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		numberGuessing();
	}

}
