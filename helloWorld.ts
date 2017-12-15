import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h1>Hello {{world}}</h1>
  `,
})
class HelloWorldComponent {
  world = "World";
}

@NgModule({
  declarations: [ HelloWorldComponent ],
  imports: [BrowserModule],
  exports: [HelloWorldComponent],
  bootstrap: [ HelloWorldComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
