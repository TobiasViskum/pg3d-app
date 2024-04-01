window.addEventListener("popstate", async (e) => {
  e.stopImmediatePropagation();

  const newUrl = window.location.pathname;
  const link = document.createElement("a");
  link.setAttribute("hx-get", newUrl);
  link.setAttribute("hx-replace-url", "true");
  link.setAttribute("hx-swap", "innerHTML transition:true");
  link.setAttribute("hx-target", "body");

  document.body.appendChild(link);
  htmx.process(link);

  link.click();

  document.body.removeChild(link);
});
