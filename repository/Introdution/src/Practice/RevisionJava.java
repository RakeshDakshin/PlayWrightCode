package Practice;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;

public class RevisionJava {

	public static void main(String[] args) throws AWTException {

		ChromeOptions options = new ChromeOptions();
		WebDriver driver = new ChromeDriver(options);
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(3000,TimeUnit.MILLISECONDS);
		driver.get("https://www.uat.qatarinsurance.com/Online/Welcome.do");
		WebElement loginbutton= driver.findElement(By.xpath("//a[contains(text(),'Login')]"));
		loginbutton.click();
		WebElement LoginType= driver.findElement(By.xpath("//a[contains(text(),'Employee')]"));
		LoginType.click();
		WebElement UserName=  driver.findElement(By.id("userId"));
		int UN_X=UserName.getLocation().getX();
		int UN_width=UserName.getSize().getWidth();
		int UN_height=UserName.getSize().getHeight();
		
		WebElement password= driver.findElement(By.id("password"));
		int PW_X=password.getLocation().getX();
		int PW_width= password.getSize().getWidth();
		int PW_height=password.getSize().getHeight();
		
		if (UN_X==PW_X && UN_width==PW_width && UN_height==PW_height) {
			System.out.println("Both the fields are aligned");
		}else {
			System.out.println("Both the fields are not aligned");
		}
		
		Actions action = new Actions(driver);
		action.contextClick().perform();
		
		
	}

}
