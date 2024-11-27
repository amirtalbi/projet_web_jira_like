import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import fr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { fr_FR, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterTasksPipe } from './pipes/filter-tasks.pipe';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthComponent } from './auth/auth.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

registerLocaleData(fr);

@NgModule({
  declarations: [AppComponent, HomeComponent, FilterTasksPipe,AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzMenuModule,
    NzButtonModule,
    NzSelectModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,NzAvatarModule
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: fr_FR },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
