tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;

    // Update buttons
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');

    // Update panels
    tabContents.forEach(content => {
      content.classList.remove('active');
      content.hidden = true; // modern alternative to display:none
    });
    const activePanel = document.getElementById(tabId);
    activePanel.classList.add('active');
    activePanel.hidden = false;
  });
});