import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderComponent, i as renderSlot } from '../astro_bd63adee.mjs';
import 'clsx';
import { d as $$Media, b as $$DefaultLayout } from './404_1c24fb66.mjs';

const $$Astro$1 = createAstro();
const $$ContentMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentMedia;
  const { imgSrc, reverseImg = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-64 "> <svg></svg> <div class="container"> <div class="grid grid-cols-1 gap-24 md:grid-cols-2"> ${!reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg", "src": imgSrc })}` : ""} <div class="space-content flex flex-col justify-center"> ${renderSlot($$result, $$slots["default"])} </div> ${reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg", "src": imgSrc })}` : ""} </div> </div> </section>`;
}, "C:/accessible-astro-starter/src/components/ContentMedia.astro", void 0);

const $$Astro = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyectos;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Proyectos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/src/assets/img/alma.jpeg" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>Alma y Destino</h2> <p class="text-2xl">
Alma y Destino fue mi primera web, diseñada para servicios holísticos, desarrollada en HTML5 Y CSS3.
</p> <a href="http://almaydestino.com"><button type="button" class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver Sitio</button></a> ` })} ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/src/assets/img/poder.jpeg", "reverseImg": true }, { "default": ($$result3) => renderTemplate` <h2>Poder Interior</h2> <p class="text-2xl">
Using semantic HTML, landmarks, skip links, screen reader friendly content, aria-labels, keyboard accessible
      navigation and components, clear outlines and tab indicators and the right color contrast, you're more certain of
      reaching WCAG AA compliance.
</p> <a href="http://poderinterior.com.ar"><button type="button" class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver Sitio</button></a> ` })} ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/src/assets/img/hoteldelsolar.jpeg" }, { "default": ($$result3) => renderTemplate` <h2>Hotel Del Solar</h2> <p class="text-2xl">
Desarrollé una página web para el Hotel Del Solar de Pehuajó, utilizando la plataforma de Wordpress. La página
      presenta un diseño atractivo y funcional, reflejando la identidad y servicios del hotel de manera efectiva. Está
      organizada en dos secciones.
</p> <a href="http://hoteldelsolar.com.ar"><button type="button" class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver Sitio</button></a> ` })} ` })}`;
}, "C:/accessible-astro-starter/src/pages/proyectos.astro", void 0);

const $$file = "C:/accessible-astro-starter/src/pages/proyectos.astro";
const $$url = "/proyectos";

export { $$Proyectos as default, $$file as file, $$url as url };
