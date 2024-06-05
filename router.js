const pageTitle = "Hash Routing Test";

const routes = {
  404: {
    template: "/templates/404.html",
    title: "404 | " + pageTitle,
  },
  "/": {
    template: "/templates/index.html",
    title: "Start | " + pageTitle,
  },
  hungry: {
    template: "/templates/hungry.html",
    title: "Hungry | " + pageTitle,
  },
  nothungry: {
    template: "/templates/nothungry.html",
    title: "Not Hungry | " + pageTitle,
  },
  omnomnom: {
    template: "/templates/omnomnom.html",
    title: "Om Nom Nom | " + pageTitle,
  },
};

const locationHandler = async () => {
  let location = window.location.hash.replace("#", "");
  if (location.length == 0) {
    location = "/";
  }

  const route = routes[location] || routes[404];
  const html = await fetch(route.template).then((response) => response.text());
  document.getElementById("content").innerHTML = html;
  document.title = route.title;
};

window.addEventListener("hashchange", locationHandler);

locationHandler();
