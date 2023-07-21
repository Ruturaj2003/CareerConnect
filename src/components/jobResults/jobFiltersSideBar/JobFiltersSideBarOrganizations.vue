<!-- Find Me  = "import JobFiltersSideBarOrganizations from '@/components/jobResults/jobFiltersSideBar/JobFiltersSideBarOrganizations.vue';" -->

<template>
  <collapsible-accordion header="Organization">
    <div class="mt-3">
      <fieldset>
        <ul class="flex flex-wrap">
          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="BetweenVue" type="checkbox" class="mr-3" />
            <label for="BetweenVue">BetweenVue</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="VueMen" type="checkbox" class="mr-3" />
            <label for="VueMen">Vue And a Half Men</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="VueMen" type="checkbox" class="mr-3" />
            <label for="VueMen">Vuea Half Men</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
export default {
  name: 'JobFiltersSideBarOrganizations',
  components: {
    CollapsibleAccordion
  }
};
</script>
