package Practice;

public class Fibonacci {

/*	public static void main(String[] args) {
		
		int n=10;
		int first=0;
		int second=1;
		
		for(int i=0;i<n;i++)
		{
			int nextValue=first+second;
			System.out.println(" "+ nextValue);
			first=second;
			second=nextValue;
		}
	}
	
	public static void main(String[] args) {
		
		int v1=99;
		int Orgval=v1;
		int sum=0;
		
		while(v1!=0) {
			int newnum=v1%10;
			sum= sum+(newnum*newnum*newnum);
			v1=v1/10;
		}
		if (sum==Orgval) {
			System.out.println(Orgval +" is an Armstrong Number");
		}else {
				System.out.println(Orgval+ " is not an Armstrong Number");
			}
		}
*/
	public static void main(String[] args) {
		int num=5;
		int fact=1;
		
		for (int i=1;i<=num;i++)
		{
			fact=fact*i;
		}
		System.out.println("Factorial of the given number is " + fact);
	
	        int num1 = 98764321;
	        int count = 0;

	        while(num1 != 0){
	            num1 = num1 / 10;
	            count++;
	        }

	        System.out.println("Number of digits: " + count);
	        
	        String str = "RAKESH";
	        String reverse = "";

	        for(int i = str.length() - 1; i >= 0; i--){
	            reverse = reverse + str.charAt(i);
	        }

	        System.out.println("Reversed String: " + reverse);
	    }
	 }
