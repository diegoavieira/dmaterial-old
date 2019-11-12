import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'doc-home',
          loadChildren: () =>
            import('@dmaterial/doc/home').then(module => module.DocHomeModule)
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
