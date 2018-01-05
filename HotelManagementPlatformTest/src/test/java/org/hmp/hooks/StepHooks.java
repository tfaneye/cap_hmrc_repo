package org.hmp.hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.hmp.browsers.SharedBrowsers;
import org.hmp.page_objects.BasePage;


/**
 * Created by inet-tech on 05/12/17.
 */
public class StepHooks {

    private final SharedBrowsers sharedBrowsers;
    protected BasePage basePage;

    public StepHooks(SharedBrowsers sharedBrowsers) {
        this.sharedBrowsers = sharedBrowsers;
    }

    @Before
    public void setUpTest() throws Exception {
        basePage = sharedBrowsers
                .initialiseBrowser()
                .setUpBrowser();
    }

   // @After
    public void tearDownTest(){
        sharedBrowsers
                .tearDownBrowser();
    }
}
