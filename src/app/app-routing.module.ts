import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
/*
You'll configure the router with Routes in the RouterModule so,
import those two symbols from the @angular/router library.
*/
import {RouterModule , Routes} from '@angular/router'; //v1 
import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{path:'heroes',component: HeroesComponent}
	// {path: 'dashboard' , component: DashboardComponent},
	// {path: '',redirectTo:'dashboard' , pathMatch: 'full'}, // default route


 ];
 /*
 You first must initialize the router and start it listening for browser,
 location changes.

 Add RouterModule to the @NgModule.imports array and configure it with,
 the routes in one step,
 by calling RouterModule.forRoot() within the imports array, like this:
 */
@NgModule({
	imports: [
	//     CommonModule,

		   RouterModule.forRoot(routes),
	    
	  ],
	/*
Add an @NgModule.exports array with RouterModule in it. Exporting,
RouterModule makes router directives available for use in the AppModule,
components that will need them.
	*/
	exports: [ RouterModule ], // v1
  // declarations: []
})
export class AppRoutingModule { }
