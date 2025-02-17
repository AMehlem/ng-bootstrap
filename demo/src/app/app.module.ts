import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {NgbdAccordionModule} from './components/accordion/accordion.module';
import {NgbdAlertModule} from './components/alert/alert.module';
import {NgbdCarouselModule} from './components/carousel/carousel.module';
import {NgbdCollapseModule} from './components/collapse/collapse.module';
import {NgbdDatepickerModule} from './components/datepicker/datepicker.module';
import {NgbdDropdownModule} from './components/dropdown/dropdown.module';
import {NgbdModalModule} from './components/modal/modal.module';
import {NgbdNavModule} from './components/nav/nav.module';
import {NgbdPaginationModule} from './components/pagination/pagination.module';
import {NgbdPopoverModule} from './components/popover/popover.module';
import {NgbdProgressbarModule} from './components/progressbar/progressbar.module';
import {NgbdRatingModule} from './components/rating/rating.module';
import {NgbdTableModule} from './components/table/table.module';
import {NgbdTimepickerModule} from './components/timepicker/timepicker.module';
import {NgbdToastModule} from './components/toast/toast.module';
import {NgbdTooltipModule} from './components/tooltip/tooltip.module';
import {NgbdTypeaheadModule} from './components/typeahead/typeahead.module';
import {DefaultComponent} from './default';
import {GettingStartedPage} from './pages/getting-started/getting-started.component';
import {AnimationsPage} from './pages/animations/animations.component';
import {I18nPage} from './pages/i18n/i18n.component';
import {PositioningPage} from './pages/positioning/positioning.component';
import {NgbdSharedModule} from './shared';
import {NgbdDemoVersionsComponent} from './demo-versions.component';
import {NgbdOffcanvasModule} from './components/offcanvas/offcanvas.module';


const DEMOS = [
  NgbdAccordionModule, NgbdAlertModule, NgbdCarouselModule, NgbdCollapseModule, NgbdDatepickerModule,
  NgbdDropdownModule, NgbdModalModule, NgbdNavModule, NgbdOffcanvasModule, NgbdPaginationModule, NgbdPopoverModule, NgbdProgressbarModule,
  NgbdRatingModule, NgbdTableModule, NgbdTimepickerModule, NgbdToastModule, NgbdTooltipModule,
  NgbdTypeaheadModule
];

const PAGES = [GettingStartedPage, AnimationsPage, I18nPage, PositioningPage];

@NgModule({
  declarations: [AppComponent, DefaultComponent, NgbdDemoVersionsComponent, ...PAGES],
  imports: [BrowserModule, routing, NgbModule, NgbdSharedModule, ...DEMOS],
  bootstrap: [AppComponent]
})
export class NgbdModule {
}
