public class CoreJava1 {

	public static void main(String[] args) {
		
	int num = 5; 
	char letter = 'r';
	String website = "Rakesh Academy";
	double decimal = 5.99;
	boolean mycard = true;
	
	System.out.println(num + "is my fav number");
	
	int[] arr = new int [5];
	arr[0]=1;
	arr[1]=3;
	arr[2]=5;
	arr[3]=7;
	arr[4]=9;
			
	for (int i=0;i<arr.length;i++)
	{
     System.out.println(arr[i]);
	}

	int[] arr1= {0,2,4,6,8,9,10,13,17,18,284};
	
	for (int i=0;i<arr1.length;i++)
	{
		System.out.println(arr1[i]);
	}
	
	String[] name = {"Rakesh","Kumar"};
	
	for (int i=0;i<name.length;i++) {
		
	System.out.println(name[i]);
	}
	
	// Enhanced FOR loop declaration

	for (String r:name)
	{
	System.out.println(r);
	}
	
	
	}
}
