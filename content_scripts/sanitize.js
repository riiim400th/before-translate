function sanitizeCodeTags() {
  document.querySelectorAll("p code").forEach(codeEl => {
    if (codeEl.closest("pre")) return;

    const parent = codeEl.parentNode;
    const quotedText = `\`${codeEl.textContent}\``;
    const textNode = document.createTextNode(quotedText);

    parent.replaceChild(textNode, codeEl);
  });
}

sanitizeCodeTags();
