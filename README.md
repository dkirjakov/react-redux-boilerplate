# React Installer Portal Web

##Initial Machine Setup
1. **Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
2. **Install [Git](https://git-scm.com/downloads)**.
3. **[Disable safe write in your editor](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)** to assure hot reloading works properly.
4. On a Mac? You're all set. If you're on Linux or Windows, complete the steps for your OS below.  

**On Linux:**  

 * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).    
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

**On Windows:**

* **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
* **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler. Or, if you already have Visual Studio installed: Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

##General Project Setup
This Setup comes from the [React Slingshot Project](https://github.com/coryhouse/react-slingshot), if you need general help, look at there Example App


##Folder Structure
* **/** project root containing all build/environment configuration files (runtime configurations can be put in an seperate */config* folder)
  * **/src** containing all editable source files
    * **/src/api** containing Apis to external Services
    * **/src/components** containing all React Components (The Different to Container is that these Components dont contain Application Logic, only Component Logic)
    * **/src/config** containing all Config Files
    * **/src/constants** containing constents e.g. actionTypes
    * **/src/container** containing all React Components which are serving as the Applications Structure e.g. WelcomePage, Impressum, Overlays (The Difference to Components is that these can contain Application Logic)
    * **/src/reducers** containing the main Reducer
    * **/src/redux** containing ducks Files [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
    * **/src/store** containing the Redux Store configuration
    * **/src/styles** containing all the less Files, in this folder the global Less Files are placed e.g. `variables.less` or `globals.less`
      * **/src/styles/components** less Files related to Components
      * **/src/styles/container** less Files related to Pages
    * **/src/util** containing utils needed in the Application
  * **/tools** containing Tools needed to build this Application
