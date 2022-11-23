export class Pizza {

  private _numPizza:number = 0;
  private _tamano: number = 10;
  private _sabor: String = "Queso";
  private _Precio: number = 3.80;
  tablaPrecios = [
    { "agrego": "Jamon", "PrecioAgregacion" : "+0.40€" },
    { "agrego": "Atun", "PrecioAgregacion" : "+0.60€" },
    { "agrego": "Chorizo", "PrecioAgregacion" : "+0.60€" },
    { "agrego": "Champion", "PrecioAgregacion" : "+0.60€" },
    { "agrego": "queso", "PrecioAgregacion" : "+0.20€" },
];
}
