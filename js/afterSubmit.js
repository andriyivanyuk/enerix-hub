(function () {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitButton");
  const ok = document.getElementById("submitSuccessMessage");
  const err = document.getElementById("submitErrorMessage");

  function encode(data) {
    return new URLSearchParams(data).toString();
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    ok.classList.add("d-none");
    err.classList.add("d-none");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    btn.disabled = true;

    const data = new FormData(form);
    // Netlify expects this field
    data.set("form-name", form.getAttribute("name"));

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(data.entries())),
      });

      if (res.ok) {
        form.reset();
        form.classList.remove("was-validated");
        ok.classList.remove("d-none");
      } else {
        err.classList.remove("d-none");
      }
    } catch (e) {
      err.classList.remove("d-none");
    } finally {
      btn.disabled = false;
    }
  });
})();
