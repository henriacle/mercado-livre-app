import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';
import { ResultadoBuscaComponent } from './resultado-busca/resultado-busca.component';
import { ResultadoBuscaItemComponent } from './resultado-busca/resultado-busca-item/resultado-busca-item.component';
import { ItemDescriptionComponent } from './item-description/item-description.component';

import { BuscaService } from './shared/busca.service';

const appRoutes: Routes = [
  { path: 'items', component: ResultadoBuscaComponent },
  { path: 'descricao/:id', component: ItemDescriptionComponent },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  { path: '**', component: ResultadoBuscaComponent }
];

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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [BuscaService, { provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
