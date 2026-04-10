
public class methodDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		methodDemo d = new methodDemo();
		String name = d.getData();
		System.out.println(name);
		methodDemo2 d2 = new methodDemo2();
		d2.getMethod();
		
	}

	public String getData()
	{
		System.out.println("Hello Rakesh");
		return "Rakesh Kumar";
	}
}
