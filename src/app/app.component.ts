import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // ./ aynı klasör anlamına gelir
  styleUrls: ['./app.component.css'], // bu html in css lerini koyduğumuz yerdir. Birden fazla css varsa virgül ile ayırabiliriz
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'EnginDemiroğ';
}

// datayı yönettiğimiz yer burasıdır
// Angular da component demek html in datasını kontrol ettiğimiz yerdir
//3. satırdaki @Component çalışma anında class a anlam yükler. C# taki attribute lar gibi
//  süslü parantez demek obje demektir. Obje içerisinde özellikleri verebiliriz
// Bir classın component olduğunu üstündeki deklerasyon ile anlatırız. neyin componenti olduğunu süslü parantezler-
// -içerisine yazdığımız özellikler ile belirleriz
