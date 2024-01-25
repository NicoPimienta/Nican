import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderSlot, k as renderComponent } from '../astro_bd63adee.mjs';
import 'clsx';
import { $ as $$Icon, a as $$Image, b as $$DefaultLayout } from './404_1c24fb66.mjs';
/* empty css                           */
const MiImagen = new Proxy({"src":"/_astro/undraw_innovative_re_rr5i.e6916abe.svg","width":740.10323,"height":574.31553,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="hero my-24" data-astro-cid-bbe6dxrz> <div class="container" data-astro-cid-bbe6dxrz> <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2" data-astro-cid-bbe6dxrz> <div class="flex flex-col items-center gap-8 md:items-start" data-astro-cid-bbe6dxrz> <h1 class="text-center text-6xl md:text-left lg:text-8xl" data-astro-cid-bbe6dxrz> ${renderSlot($$result, $$slots["default"], renderTemplate`<span class="text-gradient" data-astro-cid-bbe6dxrz>NICAN</span> Pensamos tu Negocio`)} </h1> <div class="flex flex-col gap-3 min-[500px]:flex-row" data-astro-cid-bbe6dxrz> <a class="button has-icon" href="https://m.me/nicolas.pimienta/" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "pack": "ion", "name": "send-outline", "data-astro-cid-bbe6dxrz": true })}
Contacto
</a> <a class="button has-icon color-secondary" href="mailto: nicolaspimienta@gmail.com" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "pack": "ion", "name": "email", "data-astro-cid-bbe6dxrz": true })}
Email
</a> </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": MiImagen, "alt": "undraw", "data-astro-cid-bbe6dxrz": true })} </div> </div> </section> `;
}, "C:/accessible-astro-starter/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$Feature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Feature;
  const { icon = "mdi:rocket", title = "Title" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature flex flex-col gap-4" data-astro-cid-ezsi7upz> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-ezsi7upz": true })} <div class="content" data-astro-cid-ezsi7upz> <h3 data-astro-cid-ezsi7upz>${title}</h3> <p data-astro-cid-ezsi7upz> ${renderSlot($$result, $$slots["default"], renderTemplate`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.`)} </p> </div> </div> `;
}, "C:/accessible-astro-starter/src/components/Feature.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="my-64"> <div class="container"> <h2 class="mb-16 text-6xl">Features</h2> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:web", "title": "Pagina Web Simple" }, { "default": ($$result3) => renderTemplate`
Impulsá tu presencia en línea con una página web que refleje la esencia de tu marca, cautivando a tus
          visitantes con un diseño atractivo y contenido convincente para dejar tu huella en la web.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:store", "title": "Tienda Online" }, { "default": ($$result3) => renderTemplate`
Llevá tu negocio al mundo digital con una tienda en línea que brinda a tus clientes una experiencia de compra
          conveniente y segura, permitiéndote ampliar tu alcance y aumentar tus ventas.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:design", "title": "Logo & Identidad" }, { "default": ($$result3) => renderTemplate`
Le damos forma a la identidad de tu negocio con logos que transmiten profesionalismo y dejan una huella
          imborrable en tus clientes. Tu esencia, plasmada en cada diseño.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:search", "title": "SEO" }, { "default": ($$result3) => renderTemplate`
Aumentá tu visibilidad en los motores de búsqueda y localiza a tu audiencia objetivo al mejorar tu
          posicionamiento en línea a través de estrategias de SEO y al optimizar tu perfil en Google Mi Negocio.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:paper", "title": "Sitio de noticias" }, { "default": ($$result3) => renderTemplate`
Creamos la plataforma, tú controlas el contenido. Te brindamos la estructura perfecta: desde titulares
          impactantes hasta una navegación fluida. Tu fuente de información se merece un sitio web que refleje su
          importancia y te brindamos las herramientas para que lo manejes con facilidad.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:language-markdown", "title": "Markdown & MDX" }, { "default": ($$result3) => renderTemplate`
Easily use .md and .mdx pages to build your websites or use it with Netlify CMS.
` })} </div> </div> </section> ` })}`;
}, "C:/accessible-astro-starter/src/pages/index.astro", void 0);

const $$file = "C:/accessible-astro-starter/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
