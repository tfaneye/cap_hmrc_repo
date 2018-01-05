package org.hmp.page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * Created by inet-tech on 05/12/17.
 */
public class DeleteEntryPage extends BasePage{
    private By deleteField = By.xpath("/html/body/div/div[13]/div[2]/span");

    public DeleteEntryPage(WebDriver driver) {
        super(driver);
    }

    public DeleteEntryPage deleteAnEntry(){

        driver.findElement(deleteField).click();
        return new DeleteEntryPage(driver);

    }
}
