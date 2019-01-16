import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatComponentsModule } from './module/mat-components.module';
import { NavbarComponent } from '../app/generic/navbar/navbar.component';
import { FooterComponent } from './generic/footer/footer.component';
import { HomeComponent } from './basics/home/home.component';
import { AboutComponent } from './basics/about/about.component';
import { GalleryComponent } from './basics/gallery/gallery.component';
import { ContactComponent } from './basics/contact/contact.component';
import { LoginComponent } from '../app/Admin/login/login.component';
import { GalleryDetailsComponent } from '../../src/app/basics/gallery/gallery-details/gallery-details.component';
import { ImageService } from './basics/gallery/image.service';
import { ImageFilterPipePipe } from '../../src/app/basics/gallery/gallery-Pipe/image-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    LoginComponent,
    GalleryDetailsComponent,
    ImageFilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'gallery/:galleryId', component: GalleryDetailsComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'contact', component: ContactComponent},
      {path: 'login', component: LoginComponent},
    ])
  ],
  providers: [ImageService, ImageFilterPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
