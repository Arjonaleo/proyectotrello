import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './login/login';
import { Register } from './register/register';
import { Board } from './board/board';
import { Group } from './group/group';
import { Column } from './column/column';
import { TaskCard } from './taskcard/taskcard';

/**
 * El módulo principal de la aplicación Angular.
 * Aquí se declaran todos los componentes, se importan los módulos necesarios
 * y se configura el componente de arranque.
 */
@NgModule({
  /**
   * Lista de componentes que pertenecen a este módulo.
   * Estos componentes son parte de la aplicación y se pueden usar en las plantillas.
   */
  declarations: [
    AppComponent,
    Login,
    Register,
    Board,
    Group,
    Column,
    TaskCard
  ],
  /**
   * Módulos importados que proporcionan directivas, pipes y servicios
   * que pueden ser utilizados por los componentes de este módulo.
   */
  imports: [
    BrowserModule,        // Proporciona servicios esenciales para la aplicación en el navegador
    AppRoutingModule,     // Módulo de enrutamiento de la aplicación
    FormsModule,          // Para formularios basados en plantillas
    ReactiveFormsModule,  // Para formularios reactivos
    HttpClientModule      // Para realizar peticiones HTTP
  ],
  /**
   * Proveedores de servicios que estarán disponibles en toda la aplicación.
   * Actualmente no hay proveedores definidos.
   */
  providers: [],
  /**
   * El componente principal que se cargará cuando la aplicación arranque.
   */
  bootstrap: [AppComponent]
})
export class AppModule { }