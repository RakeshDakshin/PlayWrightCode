import java.util.ArrayList;

public class CoreJava2 {

	public static void main(String[] args) {

		/*int[] arr1= {0,2,4,6,8,9,10,13,17,18,284};
		
		for (int i=0;i<arr1.length;i++)
		{
			if (arr1[i]%2==0)
			{
			System.out.println(arr1[i]);
			}
			else
			{
			System.out.println(arr1[i]);
			}*/
	
	ArrayList<String> a = new ArrayList<String>();
    a.add("rakesh");
    a.add("kumar");
    a.remove(1);
    System.out.println(a.get(0));
    
    
	ArrayList<String> a1 = new ArrayList<String>();
	
	a1.add ("Rakesh");
	a1.add ("Kumar");
	a1.add ("Dakshin");
	a1.add ("Sukan");
	
	System.out.println(a1.get(3));
	
	for (int i=0;i<a.size();i++)
	{
		System.out.println(a.get(i));
	}

	for (String val : a1)
	{
		System.out.println(val);
	}
    
	System.out.println(a1.contains("Dakshin"));
	
	
	
}
}