import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_bd63adee.mjs';
import { a as $$Image, c as $$Notification, $ as $$Icon } from './404_1c24fb66.mjs';
import 'clsx';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./markdown-page_5c47398c.mjs').then(n => n.M)).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../layouts/MarkdownLayout.astro",
  "title": "MDX Page"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "mdx-page",
    "text": "MDX Page"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    pre: "pre",
    code: "code",
    span: "span",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "mdx-page",
      children: "MDX Page"
    }), "\n", createVNode($$Notification, {
      type: "info",
      children: [createVNode($$Icon, {
        pack: "ion",
        name: "information-circle-outline"
      }), createVNode("p", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Info:"
          }), " This page utilizes Astro\u2019s MDX feature which let\u2019s you use components in a markdown file and\r\nsupports out-of-the-box syntax highlighting with Shiki."]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Hello Accessible World!'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/markteekman/accessible-astro-starter",
        children: "Get this theme on GitHub"
      })
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/mdx-page";
const file = "C:/accessible-astro-starter/src/pages/mdx-page.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/accessible-astro-starter/src/pages/mdx-page.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
