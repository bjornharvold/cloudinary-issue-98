import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyLibOneModule } from '@cloudinary/my-lib-one';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
	MyLibOneModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
