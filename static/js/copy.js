// Función para copiar el comando
function copyInstallCommand() {
  const codeElement = document.getElementById('install-code');
  const textToCopy = codeElement.innerText;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.innerText;
    btn.innerText = '✅';
    setTimeout(() => {
      btn.innerText = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}