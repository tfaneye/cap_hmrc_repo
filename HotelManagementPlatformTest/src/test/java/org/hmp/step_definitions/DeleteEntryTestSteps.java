package org.hmp.step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.hmp.page_objects.DeleteEntryPage;
import org.hmp.support.WorldHelper;

/**
 * Created by inet-tech on 04/01/18.
 */
public class DeleteEntryTestSteps {

    private final WorldHelper helper;
    private DeleteEntryPage deleteAnEntryPage;

    public DeleteEntryTestSteps(WorldHelper helper){
        this.helper = helper;
    }

    @When("^I delete the an entry$")
    public void i_delete_the_an_entry() throws Throwable {
        deleteAnEntryPage = helper
                .getDeleteEntryPage()
                .deleteAnEntry();
    }

    @Then("^The entry should be deleted$")
    public void the_entry_should_be_deleted() throws Throwable {
    }
}
