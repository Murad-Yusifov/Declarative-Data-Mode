// "c" filtr üçün seçilən kateqoriya adı
function filterSelection(c: string): void {
  // Bütün ".column" sinifli elementləri götürürük
  const columns = document.getElementsByClassName("column");

  // Əgər "all" seçilibsə, filtiri boş edir, yəni hamısını göstər
  const filter = c === "all" ? "" : c;

  for (let i = 0; i < columns.length; i++) {
    const el = columns[i] as HTMLElement;

    // Əvvəlcə göstərmə sinfini sil
    removeClass(el, "show");

    // Əgər elementin sinifində filtirlə uyğunluq varsa, göstər sinfi əlavə et
    if (el.className.indexOf(filter) > -1) {
      addClass(el, "show");
    }
  }
}

// Elementə sinif əlavə edən funksiya
function addClass(element: HTMLElement, className: string): void {
  const classes = element.className.split(" ");
  if (!classes.includes(className)) {
    element.className += " " + className;
  }
}

// Elementdən sinif silən funksiya
function removeClass(element: HTMLElement, className: string): void {
  const classes = element.className.split(" ").filter(c => c !== className);
  element.className = classes.join(" ");
}

// Düymə konteynerini seçirik
const btnContainer = document.querySelector(".myBtnContainer");

if (btnContainer) {
  const buttons = btnContainer.getElementsByClassName("btn");

  // Hər düyməyə klik dinləyicisi əlavə edirik
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (this:HTMLElement) {
      // Aktiv olan düymədən "active" sinfini silirik
      const current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      // Bu kliklənən düyməyə "active" sinfi əlavə olunur
      this.className += " active";
    });
  }
}

// Səhifə yüklənəndə bütün elementləri göstəririk
filterSelection("all");
