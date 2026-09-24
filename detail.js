const menuButton = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const article = document.querySelector(".detail-main article");
const articleImage = article?.querySelector(".article-image");

if (article && articleImage) {
  const title = document.querySelector("h1")?.textContent.trim() || document.title;
  const pageUrl = window.location.href;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);
  const share = document.createElement("section");

  share.className = "share-box";
  share.setAttribute("aria-labelledby", "share-title");
  share.innerHTML = `
    <div>
      <strong id="share-title">Partager cet article</strong>
      <span>Transmettez ce contenu à votre entourage.</span>
    </div>
    <div class="share-actions">
      <button class="share-native" type="button">Partager</button>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://wa.me/?text=${encodedTitle}%20${encodedUrl}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}" target="_blank" rel="noopener noreferrer">X</a>
      <button class="share-copy" type="button">Copier le lien</button>
    </div>
    <span class="share-status" role="status" aria-live="polite"></span>
  `;

  articleImage.insertAdjacentElement("afterend", share);

  const status = share.querySelector(".share-status");
  const nativeButton = share.querySelector(".share-native");
  const copyButton = share.querySelector(".share-copy");

  nativeButton?.addEventListener("click", async () => {
    if (!navigator.share) {
      status.textContent = "Choisissez un réseau pour partager cet article.";
      return;
    }

    try {
      await navigator.share({ title, text: title, url: pageUrl });
    } catch (error) {
      if (error.name !== "AbortError") {
        status.textContent = "Le partage n'a pas pu être ouvert.";
      }
    }
  });

  copyButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      status.textContent = "Lien copié dans le presse-papiers.";
    } catch (error) {
      status.textContent = "Copie impossible. Sélectionnez l'adresse de la page.";
    }
  });
}
