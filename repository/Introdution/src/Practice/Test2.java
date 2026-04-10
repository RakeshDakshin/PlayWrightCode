package Practice;

import static org.testng.Assert.assertEquals;

import java.time.Duration;
import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

public class Test2 {

	public static void main(String[] args) {

		WebDriver driver = new ChromeDriver();
		// 2 - Take Action on Browser
		driver.get("https://www.selenium.dev/selenium/web/web-form.html");
		// 3 - Request Browser Information
		String title = driver.getTitle();
		System.out.println(title);
		assertEquals("Web form", title);
		// 4 - Establishing Wait Strategy
		//driver.manage().timeouts().implicitlyWait(Duration.ofMillis(5000));
		WebDriverWait wait = new WebDriverWait(driver,Duration.ofMillis(1000));
		// 5 - Find an Element
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@type='submit']")));
		WebElement textbox = driver.findElement(By.name("my-text"));
		WebElement button = driver.findElement(By.cssSelector("button"));
		// 6 - Take Action on the Element
		textbox.sendKeys("Selenium");
		button.click();
		// 7 - Request Element Information
		WebElement message = driver.findElement(By.id("message"));
		String value = message.getText();
		System.out.println(value);
		assertEquals("Received!", value);
		driver.quit();
		
		Wait<WebDriver> fluentwait = new FluentWait<>(driver).withTimeout(Duration.ofMillis(5000))
				.pollingEvery(Duration.ofMillis(1000)).ignoring(NoSuchElementException.class).ignoring(ElementNotInteractableException.class);

		
		WebElement dropdown = driver.findElement(By.className("form-select"));
		Select select = new Select(dropdown);
		select.selectByVisibleText("One");
	}
	
}
