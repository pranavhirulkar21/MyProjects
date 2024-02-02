package currency_converter;

import java.util.*;
import java.text.DecimalFormat;

public class currency_converter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double rupee, doller, euro, pound, KWD;
		int code;
		DecimalFormat f = new DecimalFormat("##.###");
		Scanner sc = new Scanner(System.in);
		System.out.println("--- Welcome to Currrency Converter ---");

		do {
			System.out.println(
					"\nEnter the Currency Code that you wanna convert \n1. Rupee \n2. Doller \n3. Euro \n4. Pound \n5. KWD \n0. Exit");
			code = sc.nextInt();
			// Rupee
			switch (code) {
			case 1:

				System.out.print("Enter the amount in Rupee: ");
				rupee = sc.nextDouble();
				doller = rupee / 83.43;
				System.out.println("Doller : " + f.format(doller));
				euro = rupee / 89.88;
				System.out.println("Euro : " + f.format(euro));
				pound = rupee / 104.69;
				System.out.println("Pound : " + f.format(pound));
				KWD = rupee / 270.56;
				System.out.println("KWD : " + f.format(KWD));
				break;

			// Doller
			case 2:
				System.out.print("Enter the amount in Doller: ");
				doller = sc.nextDouble();
				rupee = doller * 83.43;
				System.out.println("Rupee : " + f.format(rupee));
				euro = doller * 0.92;
				System.out.println("Euro : " + f.format(euro));
				pound = doller * 1.25;
				System.out.println("Pound : " + f.format(pound));
				KWD = doller * 3.24;
				System.out.println("KWD : " + f.format(KWD));
				break;
			// Euro
			case 3:
				System.out.print("Enter the amount in Euro: ");
				euro = sc.nextDouble();
				rupee = euro * 89.88;
				System.out.println("Rupee : " + f.format(rupee));
				doller = euro * 1.07;
				System.out.println("Doller : " + f.format(doller));
				pound = euro * 1.16;
				System.out.println("Pound : " + f.format(pound));
				KWD = euro * 3.01;
				System.out.println("KWD : " + f.format(KWD));
				break;
			// Pound
			case 4:
				System.out.print("Enter the amount in Pound: ");
				pound = sc.nextDouble();
				rupee = pound * 104.69;
				System.out.println("Rupee: " + f.format(rupee));
				doller = pound * 1.25;
				System.out.println("Doller: " + f.format(doller));
				euro = pound * 1.16;
				System.out.println("Euro: " + f.format(euro));
				KWD = pound * 0.38;
				System.out.println("KWD: " + f.format(KWD));
				break;
			// KWD
			case 5:
				System.out.print("Enter the amount in KWD: ");
				KWD = sc.nextDouble();
				rupee = KWD * 270.56;
				System.out.println("Rupee: " + f.format(rupee));
				doller = KWD * 3.24;
				System.out.println("Doller: " + f.format(doller));
				euro = KWD * 3.01;
				System.out.println("Euro: " + f.format(euro));
				pound = KWD * 0.38;
				System.out.println("pound: " + f.format(pound));
				break;
			case 0:
				System.out.println("Thank You");
				break;

			default:
				System.out.println("Invalid Code.");
				break;
			}

		} while (code != 0);
	}

}
