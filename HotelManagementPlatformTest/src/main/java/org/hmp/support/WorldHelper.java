package org.hmp.support;

import org.hmp.browsers.SharedBrowsers;
import org.hmp.page_objects.BasePage;
import org.hmp.page_objects.DataEntryPage;
import org.hmp.page_objects.DeleteEntryPage;

/**
 * Created by inet-tech on 05/12/17.
 */
public class WorldHelper extends SharedBrowsers {


    private BasePage basePage;
    private DataEntryPage dataEntryPage;
    private DeleteEntryPage deleteEntryPage;

    public BasePage getBasePage(){
        if(basePage == null){
            basePage = new BasePage(driver);
        }
        return basePage;
    }

    public DataEntryPage getDataEntryPage(){
        if(dataEntryPage == null){
            dataEntryPage = new DataEntryPage(driver);
        }
        return dataEntryPage;
    }

    public DeleteEntryPage getDeleteEntryPage(){
        if(deleteEntryPage == null){
            deleteEntryPage = new DeleteEntryPage(driver);
        }
        return deleteEntryPage;
    }


}
