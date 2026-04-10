public class coreJavaBrushUp3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String a="Rakesj";
		String a1="Rakesj";
		
		//new
		String b= new String("Welcome");
		String b1= new String("Welcome");
		
		String s ="Rakesh Kumar Dakshina Murthi Sukanya";
		String[] splittedString= s.split("Dakshina");
		System.out.println(splittedString[0].trim());
		System.out.println(splittedString[1].trim());
		//System.out.println(splittedString[2]);
		//System.out.println(splittedString[3]);
		
		/*for (int i=0;i<s.length();i++)
		{
			System.out.println(s.charAt(i));
		}*/
		
		for (int i=s.length()-1;i>=0;i--)
		{
			System.out.println(s.charAt(i));
		}
	}

}
