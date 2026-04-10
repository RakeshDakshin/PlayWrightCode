package Practice;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Test3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofMillis(5000));
		driver.get("https://www.uat.qatarinsurance.com/Online/Welcome.do");
		driver.findElement(By.xpath("//button[@title = 'Qatar']")).click();
		//Keys.chord(Keys.CONTROL,Keys.Zen);
	}

}
