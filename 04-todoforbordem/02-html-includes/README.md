

<img src="./assets/images/image.png>

1. Kodun ümumi strukturu
Kodun məqsədi:

HTML elementlərini siniflərə (class) görə filtr etmək.

Filtrlənmiş elementlərə müəyyən sinif əlavə etmək və ya çıxarmaq.

Bir düyməyə basıldıqda, həmin düyməni aktivləşdirmək.

2. Blokları izah edək
Kod aşağıdakı əsas hissələrdən ibarətdir:

Filtrləmə funksiyası: filterSelection(c)

Parametr olaraq bir kateqoriya adı alır və yalnız həmin kateqoriyaya aid olan elementləri göstərir.

Bütün elementlər arasında dövr (for loop) edərək uyğun olanlara show sinfini əlavə edir.

Sinif əlavə/silmə funksiyaları:

addClass və removeClass funksiyaları elementlərə sinif əlavə etmək və ya silmək üçün yazılıb.

Düymələrin idarəsi:

Bütün düymələrə klik dinləyicisi (addEventListener) əlavə olunur.

Bir düyməyə klik edildikdə, əvvəlki "aktiv" düymənin sinfi silinir və yenisinə əlavə olunur.

3. Əsas anlayışlar
a) for döngüsü
Döngü elementlər arasında bir-bir hərəkət etmək üçündür. Məsələn:

ts
Copy
Edit
for (let i = 0; i < columns.length; i++) {
  const el = columns[i] as HTMLElement;
  // Elə elementlərə əməliyyatlar tətbiq edilir
}
Bu döngü hər dəfə bir columns elementini seçir və həmin element üzərində işləyir.

b) className
className elementin bütün siniflərini təmsil edir. Məsələn:

ts
Copy
Edit
el.className // "column show"
Bu yazı elementin siniflərinin bir sətir olaraq göstərilməsidir.

c) Funksiyalar
Funksiyalar kodun bir dəfə yazılıb, təkrar-təkrar istifadə edilən hissələridir. Məsələn:

ts
Copy
Edit
function addClass(element: HTMLElement, className: string): void {
  const classes = element.className.split(" "); // Sinifləri ayırır
  if (!classes.includes(className)) { // Əgər sinif yoxdursa
    element.className += " " + className; // Əlavə edir
  }
}
Bu funksiya bir elementə verilən sinifi əlavə edir.

4. Sadə nümunə ilə başa düşmək
Daha sadə bir filtr nümunəsi yazıram:

ts
Copy
Edit
function filterElements(filter: string) {
  const items = document.querySelectorAll(".item"); // Bütün elementlər

  items.forEach((item) => {
    if (filter === "all" || item.classList.contains(filter)) {
      item.style.display = "block"; // Göstər
    } else {
      item.style.display = "none"; // Gizlət
    }
  });
}
Burada:

.item sinifli elementlər seçilir.

Döngü ilə hər element yoxlanılır.

Uyğun elementlər göstərilir (display: block), digərləri gizlədilir (display: none).

5. Daha rahat oxumaq üçün tövsiyələr
Funksiyaları kiçik hissələrə böl: Hər funksiya yalnız bir iş görsün.

Şərh əlavə et: Hər bir addımın yanında nə etdiyini izah et.

Sadə nümunələrdə məşq et: Çətin kodlardan əvvəl sadə nümunələrlə başla.