<!-- _coverpage.md -->

<style>
  /* Cover page estilo xmake */
  .cover {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  /* Contenedor principal con efecto glass */
  .cover-container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    flex-wrap: wrap;
    background: rgba(11, 15, 26, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 32px;
    padding: 3rem;
    border: 1px solid rgba(243, 139, 168, 0.2);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  /* Columna izquierda */
  .cover-left {
    flex: 1.2;
    min-width: 280px;
  }

  /* Badge de versión */
  .version-badge {
    display: inline-block;
    background: rgba(243, 139, 168, 0.15);
    color: #f38ba8;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid rgba(243, 139, 168, 0.3);
  }

  .cover-left h1 {
    font-size: 4.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 0%, #f38ba8 60%, #cba6f7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
  }

  .cover-left .tagline {
    font-size: 1.25rem;
    color: #a6adc8;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .cover-left .description {
    font-size: 1rem;
    color: #cdd6f4;
    margin-bottom: 2rem;
    line-height: 1.6;
    opacity: 0.9;
  }

  /* Features en línea estilo xmake */
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
  }

  .feature {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255, 255, 255, 0.03);
    padding: 0.35rem 0.9rem;
    border-radius: 40px;
    font-size: 0.8rem;
    color: #c9d1d9;
    border: 1px solid rgba(255, 255, 255, 0.05);
    white-space: nowrap;
  }

  .feature span {
    font-size: 1.1rem;
  }

  /* Bloque de instalación - estilo one-liner */
  .install-section {
    margin: 1.5rem 0;
  }

  .install-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #a6adc8;
    margin-bottom: 0.5rem;
  }

  .install-command {
    background: #0b0f1a;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    margin-left: 3rem;
    margin-right: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    border: 1px solid rgba(243, 139, 168, 0.2);
    transition: all 0.2s ease;
  }

  .install-command:hover {
    border-color: rgba(243, 139, 168, 0.4);
    background: #0f1322;
  }

  .install-command code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: #cdd6f4;
    background: none;
    padding: 0;
    word-break: break-all;
  }

  .copy-btn {
    background: rgba(243, 139, 168, 0.15);
    border: none;
    color: #f38ba8;
    padding: 0.3rem 0.8rem;
    border-radius: 6px;
    font-size: 0.7rem;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: monospace;
  }

  .copy-btn:hover {
    background: rgba(243, 139, 168, 0.3);
  }

  .buttons {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
  }

  /* Botón principal */
  .btn-github {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #1e1e2e;
    color: #f9e2af !important;
    border: 1px solid rgba(249, 226, 175, 0.3);
    padding: 0.85rem 2rem;
    border-radius: 40px;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .btn-github:hover {
    transform: translateY(-2px);
    background: #313244;
    border-color: rgba(249, 226, 175, 0.6);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  /* Botón Sponsor - con emoji rojo */
  .btn-sponsor {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #1e1e2e;
    color: #f38ba8 !important;
    border: 1px solid rgba(243, 139, 168, 0.3);
    padding: 0.85rem 2rem;
    border-radius: 40px;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .btn-sponsor:hover {
    transform: translateY(-2px);
    background: #313244;
    border-color: rgba(243, 139, 168, 0.6);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  /* Columna derecha - Anuncio */
  .cover-right {
    flex: 0.7;
    min-width: 280px;
  }

  .ad-card {
    background: linear-gradient(135deg, rgba(243, 139, 168, 0.05) 0%, rgba(203, 166, 247, 0.05) 100%);
    border-radius: 24px;
    padding: 1.5rem;
    border: 1px solid rgba(243, 139, 168, 0.2);
    transition: all 0.2s ease;
  }

  .ad-card:hover {
    border-color: rgba(243, 139, 168, 0.4);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .ad-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(243, 139, 168, 0.2);
  }

  .ad-icon {
    font-size: 1.25rem;
  }

  .ad-title {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #f38ba8;
    font-weight: 600;
  }

  .ethical-ad-placeholder {
    min-height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    text-align: center;
  }

  .ad-spot {
    font-size: 2rem;
    opacity: 0.5;
  }

  .ad-text {
    font-size: 0.8rem;
    color: #a6adc8;
  }

  .ad-note {
    font-size: 0.7rem;
    color: #6c7086;
    margin-top: 1rem;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .cover-container {
      flex-direction: column;
      padding: 2rem;
      gap: 2rem;
    }
    
    .cover-left h1 {
      font-size: 3rem;
    }
    
    .cover-left {
      text-align: center;
    }
    
    .features {
      justify-content: center;
    }
    
    .btn-github, .btn-sponsor {
      justify-content: center;
    }
    
    .install-command {
      flex-direction: column;
      text-align: center;
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }

  @media (max-width: 480px) {
    .cover-container {
      padding: 1.5rem;
    }
    
    .cover-left h1 {
      font-size: 2.5rem;
    }
    
    .feature {
      font-size: 0.75rem;
    }
  }
</style>

<div class="cover">
  <div class="cover-container">
    <div class="cover-left">
      <div class="version-badge" id="version-badge">
        <span>⚡</span>
        <span id="version-text">Cargando...</span>
      </div>
      <h1>LUNA_</h1>
      <div class="tagline">Lua → Static Binary Compiler</div>
      <div class="description">
        Compile Lua code into ultra-fast static binaries using Zig.<br>
        Zero dependencies. No runtime. Blazing fast execution.
      </div>
      
      <!-- Bloque de instalación -->
      <div class="install-section">
        <div class="install-label">⚡ FAST INSTALL</div>
        <div class="install-command">
          <code id="install-code">curl -fsSL https://luna-box.github.io/install.sh | bash</code>
          <button class="copy-btn" onclick="copyInstallCommand()">💾</button>
        </div>
      </div>
      
      <div class="features">
        <div class="feature"><span>🚀</span> Ultra-fast</div>
        <div class="feature"><span>📦</span> Standard Library</div>
        <div class="feature"><span>⚡</span> Blazing</div>
        <div class="feature"><span>🌒</span> Lua 5.1</div>
      </div>
      
      <div class="buttons">
        <a href="https://github.com/luna-box/luna" class="btn-github">
          <span>🐱 GitHub</span> <span>→</span>
        </a>
        <a href="https://ko-fi.com/wux4an" class="btn-sponsor">
          <span>❤️ Donate</span>
        </a>
      </div>
    </div>
    
    <div class="cover-right">
      <div class="ad-card">
        <div class="ad-header">
          <span class="ad-icon">📢</span>
          <span class="ad-title">Ethical Advertising</span>
        </div>
        <div class="ethical-ad-placeholder" id="ethical-ad">
          <div class="ad-spot">✨</div>
          <div class="ad-text">Advertisement space</div>
          <small class="ad-note">Powered by EthicalAds</small>
        </div>
      </div>
    </div>
  </div>
</div>

