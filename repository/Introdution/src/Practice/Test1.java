package Practice;

import java.time.Duration;
//import java.util.Iterator;
//import java.util.List;
//import java.util.Set;
//import java.util.concurrent.TimeUnit;

//import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
//import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.Select;
//import org.openqa.selenium.support.ui.WebDriverWait;

public class Test1 {

	public static void main(String[] args) throws InterruptedException {
	    
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		//WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(1000) );
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1000));
		driver.get("https://uat.qatarinsurance.com/QIC-UAE/Anoud/PortalLogin.do?company=002");
		System.out.println(driver.getTitle());
		driver.findElement(By.id("userId")).sendKeys("shihab");
		driver.findElement(By.className("form-control text-transform-none")).sendKeys("shihab");
		Thread.sleep(5000);
		driver.findElement(By.xpath("//div[@id='Employee']//input[@value='Login']")).click();
		driver.quit();
//		//
//		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.partialLinkText(""))));
//		
//		WebElement dropdown = driver.findElement(By.xpath("//div[@id='Employee']//input[@value='Login' and @value='Login2']"));
//		Select select = new Select(dropdown);
//		select.selectByValue(null);
//		
//		List<WebElement> list = driver.findElements(By.tagName("a"));
//		list.size();
//		
//		for(WebElement l : list) {
//			l.click();
//		}
//		
//		
//		Actions action = new Actions(driver);
//		action.dragAndDrop(dropdown, dropdown).perform();
//		
//		action.sendKeys(Keys.BACK_SPACE).perform();
//		action.sendKeys(Keys.chord(Keys.CONTROL+"A")).perform();
//		action.sendKeys(Keys.chord(Keys.CONTROL+"C")).perform();
//		
//		action.sendKeys(Keys.chord(Keys.CONTROL+"A")).sendKeys(Keys.chord(Keys.CONTROL+"V")).build().perform();
//
//		
//		Alert alert = driver.switchTo().alert();
//		alert.accept();
//		alert.dismiss();
//		alert.getText();
//		
//		Alert al = wait.until(ExpectedConditions.alertIsPresent());
//		al.accept();
//		
//		driver.switchTo().frame(0);
//		
//		driver.switchTo().frame("AnayaIframeId");
//		
//		driver.switchTo().defaultContent();
//		
//		Set<String> windows = driver.getWindowHandles();
//		
//		Iterator<String> winIterate = windows.iterator();
//		
////		for(String s : windows) {
////			
////			
////		}
//		
//		
//		
//		winIterate.next(); //1st window
//		winIterate.next(); //2nd window
//		
//		driver.switchTo().window(winIterate.next());
//		driver.getCurrentUrl();
//		driver.close();
//		driver.switchTo().window(winIterate.next());
//		
//		while(winIterate.hasNext()) {
//			driver.switchTo().window(winIterate.next());
//			driver.getCurrentUrl();
//			driver.close();
		}
	}

