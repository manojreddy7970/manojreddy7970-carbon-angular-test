import { NgModule, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

// import { ButtonModule, InputModule } from "carbon-components-angular";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./header/header.component";

import {
  ButtonModule,
  InputModule,
  UIShellModule,
  IconService,
  IconModule
} from "carbon-components-angular";
import Notification16 from "@carbon/icons/es/notification/16";
import UserAvatar16 from "@carbon/icons/es/user--avatar/16";
import AppSwitcher16 from "@carbon/icons/es/app-switcher/16";

@NgModule({
  imports: [BrowserModule, FormsModule, ButtonModule, InputModule],
  declarations: [AppComponent, HelloComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Notification16, UserAvatar16, AppSwitcher16]);
  }
}
