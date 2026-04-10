public class palindrometest {
	public static void main(String[] args) {
		int a = 1001,temp,sum=0,rem;
			temp=a;
		
		 while(a>0){    
		  rem=a%10;  //getting remainder  
		  sum=(sum*10)+rem;    
		  a=a/10;    
		 }    
		if(sum==temp)
		{
			System.out.println(temp + "is a Palindrome");
		}
		else
		{
			System.out.println(temp+"is not a Palindrome");
		}
		
	}

}
