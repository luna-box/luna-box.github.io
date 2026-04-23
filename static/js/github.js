// static/js/github.js
(function () {
  function fetchLatestVersion() {
    const versionText = document.getElementById('version-text');
    const versionBadge = document.getElementById('version-badge');
    const repoOwner = 'luna-box';
    const repoName = 'luna';

    if (!versionText) {
      // Si no encuentra el elemento, reintentar después
      setTimeout(fetchLatestVersion, 500);
      return;
    }

    versionText.textContent = 'Cargando...';
    if (versionBadge) versionBadge.classList.add('loading');

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`)
      .then(response => {
        if (!response.ok) throw new Error('No releases found');
        return response.json();
      })
      .then(data => {
        if (data && data.tag_name) {
          versionText.textContent = data.tag_name;
          if (versionBadge) versionBadge.classList.remove('loading');
        } else {
          throw new Error('Invalid response');
        }
      })
      .catch(() => {
        versionText.textContent = 'master';
        if (versionBadge) versionBadge.classList.remove('loading');
        const iconSpan = versionBadge?.querySelector('span:first-child');
        if (iconSpan) iconSpan.textContent = '🌿';
      });
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchLatestVersion);
  } else {
    fetchLatestVersion();
  }
})();