QBO UI Plugin Development
==================

These are instructions for getting started with QBO plugin development. Plugins are iFrames that you can insert into various places inside QBO.

[Power Point Presentation](https://intuitcloud-my.sharepoint.com/personal/jeffb531_corp_intuit_net/_layouts/15/guestaccess.aspx?guestaccesstoken=78LBdUpBPuqmGe7t%2fb0sePY2BPL9mrX1tKS0FduO86M%3d&docid=06cb70646ccfc46eaa142bd04d431bc9a)

Getting started with local development
-------

1. Fork this repo and rename it to the name of your plugin.
1. Clone the repo to your local machine
1. Open the server.crt file in the sslcert folder and add it to your keychain/trusted cert store (this will allow you to run your browser with full security turned on)
1. Add the following to your hosts file (/etc/hosts on *nix)

        127.0.0.1 localhost.intuit.com

1. Edit package.json and replace "billcom-demo" with your own plugin name and repository location
1. Run "npm install"
1. Run "grunt dev" for development on https://localhost.intuit.com:34212
1. A QBO Developer Sandbox account is recommended. Go to https://developer.intuit.com to get your free account.
1. After you create and log into your free sandbox account, go to this link https://sandbox.qbo.intuit.com/app/developers
1. Add a new plugin with your own name (e.g. mycoolplugin). Notice it is marked "local storage". This means it will be configured on just your browser in its local storage.
1. Refresh the browser so it will load your configuration.
1. The example plugin overrides the path /app/billdotcomdemo. Go to this link to access HUI Table demo.
1. The example plugin also adds a menu item to Global Nav. Click on + icon on global header to view 'Pay Bills (BDC)' menu item.
1. The example plugin also adds a tab to Company and Settings. Click on gear icon > Company Settings to view new tab for 'Pay Bills (BDC)'.

