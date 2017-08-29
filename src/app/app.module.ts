import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';
import { ResultadoBuscaComponent } from './resultado-busca/resultado-busca.component';
import { ResultadoBuscaItemComponent } from './resultado-busca/resultado-busca-item/resultado-busca-item.component';
import { ItemDescriptionComponent } from './item-description/item-description.component';

import { BuscaService } from './shared/busca.service';

const appRoutes: Routes = [
  { path: '', component: ResultadoBuscaComponent },
  { path: 'descricao/:id', component: ItemDescriptionComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

//{ path: '**', component: PageNotFoundComponent }

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    ResultadoBuscaComponent,
    ResultadoBuscaItemComponent,
    ItemDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BuscaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
