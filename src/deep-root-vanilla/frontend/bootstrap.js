(function(framework) {
  'use strict';

  function importScript(scriptPath) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptPath;

    document.head.appendChild(script);
  }

  framework.Kernel.bootstrap(function () {
    framework.Kernel.get('deep_frontend_bootstrap_vector').forEach(importScript);
  });
}(DeepFramework));
