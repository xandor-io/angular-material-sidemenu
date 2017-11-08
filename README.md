# Angular Material Sidemenu

## Introduction

This is a package to create navigation menus using Angular Material. This follows all the design guidelines provided by Google Material spec.

## Installation

This package can be installed using npm or bower:

**Note:** Use version `1.0.6`

* `npm install ng-material-sidemenu`
* `bower install angular-material-sidemenu`

## Usage

Include the script and CSS files in you HTML and add `ngMaterialSidemenu` in you module. Also this module has support for browserify or wiredep.

```html
<link rel="stylesheet" href="path/to/angular-material-sidemenu.css">
<script src="path/to/angular-material-sidemenu.js"></script>
```

To use icons with ligatures you should include the reference for the Material Icons:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

After that you can add the following markup:
```html
<md-sidemenu>
  <md-sidemenu-group>
    <md-subheader class="md-no-sticky">Caption</md-subheader>

    <md-sidemenu-content collapse-other="true" md-icon="home" md-heading="Menu 1" md-arrow="true">
      <md-sidemenu-button href="#">Submenu 1</md-sidemenu-button>
      <md-sidemenu-button href="#">Submenu 2</md-sidemenu-button>
      <md-sidemenu-button href="#">Submenu 3</md-sidemenu-button>
    </md-sidemenu-content>

    <md-sidemenu-content md-heading="Menu 2" md-arrow="true" on-hover="true">
      <md-sidemenu-button href="#">Submenu 1</md-sidemenu-button>
      <md-sidemenu-button href="#">Submenu 2</md-sidemenu-button>

      <md-sidemenu-content md-heading="Menu 2" md-arrow="true">
        <md-sidemenu-button href="#">Submenu 1</md-sidemenu-button>
        <md-sidemenu-button href="#">Submenu 2</md-sidemenu-button>
        <md-sidemenu-button href="#">Submenu 3</md-sidemenu-button>
      </md-sidemenu-content>
    </md-sidemenu-content>

  </md-sidemenu-group>

  <md-sidemenu-group>
    <md-divider></md-divider>

    <md-subheader class="md-no-sticky">Caption</md-subheader>

    <md-sidemenu-button href="#">Menu 4</md-sidemenu-button>
  </md-sidemenu-group>
</md-sidemenu>
```

### Components

* `<md-sidemenu>`
Is the main directive to hold all navigation items.

* `<md-sidemenu-group>`
Is needed to create groups of content.

* `<md-sidemenu-content>`
Define the collapsible navigation element and there's some attributes to setup. The following attributes are available:
 - `collapse-other` - You can use to collapse all other elements.
 - `on-hover` - You can open menu content on hover.
 - `md-icon` - You can use font icons
 - `md-svg-icon` - To use external svg icons
 - `md-heading` - The title of the section
 - `md-arrow` - An optional boolean to show an indicator arrow


* `<md-sidemenu-button>`
 Add the buttons inside the navigation. The following attributes are available:
 - `href` - The href for the button
 - `ui-sref` - The ui-router alternative
 - `ui-sref-active` - The highlight class to use with ui-router
 - `target` - The link target attribute

Pretty easy!

## License

MIT
