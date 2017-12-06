package org.hmp.page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * Created by inet-tech on 05/12/17.
 */
public class DeleteEntryPage extends BasePage{
    private By deletefield = By.className("glyphicon_glyphicon-remove_hotelDelete");

    public DeleteEntryPage(WebDriver driver) {
        super(driver);
    }

    public DeleteEntryPage deleteAnEntry(){

        driver.findElement(deletefield).click();
        return new DeleteEntryPage(driver);

    }
}
