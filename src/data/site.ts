export const phone = '+34633456454';
export const phoneDisplay = '+34 633 45 64 54';
export const address = 'Calle Cariño 20, 03181 Torrevieja, Alicante, España';
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
export const sitePath = (path: string) => `${basePath}${path.startsWith('/') ? path : `/${path}`}`;

export const nav = [
  { label: 'Música', href: sitePath('/es/clases-de-musica/') },
  { label: 'Arte', href: sitePath('/es/arte-y-talleres/') },
  { label: 'Español', href: sitePath('/es/espanol-para-extranjeros/') },
  { label: 'Eventos', href: sitePath('/es/eventos-y-conciertos/') },
  { label: 'Libros', href: sitePath('/es/contacto/#libros') },
  { label: 'Salas', href: sitePath('/es/contacto/#salas') },
  { label: 'Contacto', href: sitePath('/es/contacto/') },
];

export const navUk = [
  { label: 'Музика', href: sitePath('/uk/muzyka/') },
  { label: 'Мистецтво', href: sitePath('/uk/mystetstvo-i-maisterni/') },
  { label: 'Іспанська', href: sitePath('/uk/ispanska-dlia-inozemtsiv/') },
  { label: 'Події', href: sitePath('/uk/podii-ta-kontserty/') },
  { label: 'Книги', href: sitePath('/uk/kontakty/#knyhy') },
  { label: 'Зали', href: sitePath('/uk/kontakty/#zaly') },
  { label: 'Контакти', href: sitePath('/uk/kontakty/') },
];

export const disciplines = ['Canto', 'Piano', 'Guitarra', 'Violín', 'Solfeo', 'Coro'];
export const disciplinesUk = ['Вокал', 'Фортепіано', 'Гітара', 'Скрипка', 'Сольфеджіо', 'Хор'];

export const offerings = [
  { number: '01', title: 'Música', note: 'Canto, piano, guitarra, violín, solfeo y coro.', href: sitePath('/es/clases-de-musica/'), image: sitePath('/images/artwork/music-object.webp') },
  { number: '02', title: 'Arte y creatividad', note: 'Pintura y talleres creativos.', href: sitePath('/es/arte-y-talleres/'), image: sitePath('/images/artwork/painting-object.webp') },
  { number: '03', title: 'Español', note: 'Español para extranjeros.', href: sitePath('/es/espanol-para-extranjeros/'), image: sitePath('/images/artwork/language-object.webp') },
  { number: '04', title: 'Eventos', note: 'Eventos y conciertos.', href: sitePath('/es/eventos-y-conciertos/'), image: sitePath('/images/artwork/event-object.webp') },
  { number: '05', title: 'Libros', note: 'Pregunta qué títulos hay disponibles.', href: sitePath('/es/contacto/#libros'), image: sitePath('/images/artwork/books-object.webp') },
  { number: '06', title: 'Alquiler de salas', note: 'Alquiler por horas; consulta condiciones y disponibilidad.', href: sitePath('/es/contacto/#salas'), image: sitePath('/images/artwork/space-object.webp') },
];

export const offeringsUk = [
  { number: '01', title: 'Музика', note: 'Вокал, фортепіано, гітара, скрипка, сольфеджіо та хор.', href: sitePath('/uk/muzyka/'), image: sitePath('/images/artwork/music-object.webp') },
  { number: '02', title: 'Мистецтво й творчість', note: 'Малювання та творчі майстерні.', href: sitePath('/uk/mystetstvo-i-maisterni/'), image: sitePath('/images/artwork/painting-object.webp') },
  { number: '03', title: 'Іспанська', note: 'Іспанська мова для іноземців.', href: sitePath('/uk/ispanska-dlia-inozemtsiv/'), image: sitePath('/images/artwork/language-object.webp') },
  { number: '04', title: 'Події', note: 'Події та концерти.', href: sitePath('/uk/podii-ta-kontserty/'), image: sitePath('/images/artwork/event-object.webp') },
  { number: '05', title: 'Книги', note: 'Запитайте, які книжки є в наявності.', href: sitePath('/uk/kontakty/#knyhy'), image: sitePath('/images/artwork/books-object.webp') },
  { number: '06', title: 'Оренда залів', note: 'Погодинна оренда; уточнюйте умови й доступність.', href: sitePath('/uk/kontakty/#zaly'), image: sitePath('/images/artwork/space-object.webp') },
];
