# Kubernetes Chrome Token Plugin

Chrome browser plugin to inject OAuth 2 bearer tokens into outgoing HTTP requests (``Authorization`` header).

This plugin should allow using the kubernetes apiserver proxy when utilizing tokken auth.

## Usage

1. `git clone git@github.com:NickelMedia/chrome-oauth-bearer-plugin.git`
2. Open Chrome
3. Open [Chrome extensions](chrome://extensions/)
4. Enable the developer mode
5. Load unpacked extensions...
6. Select the plugin you just have downloaded via git
7. Open options page
8. Add your apiserver url and token
9. Visit your apiserver (it's lonely)
10. Great success!

