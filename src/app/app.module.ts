import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Servicies or Providers
import { InfoService } from './providers/info.service';
import { ProductsService } from './providers/products.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    InfoService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
