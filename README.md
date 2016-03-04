# Angular Material Sidemenu

## Introduction

This is a package to create navigation menus using Angular Material. This follows all guidelines provided by Google.

## Installation

This package can be installed using npm and bower:

* `npm install angular-material-sidemenu`
* `bower install angular-material-sidemenu`

## Usage

To use the sidemenu you can add the following markup:
```html
<md-sidemenu locked="true">
  <md-sidemenu-group>
    <md-subheader class="md-no-sticky">Caption</md-subheader>

    <md-sidemenu-content md-icon="home" md-heading="Menu 1" md-arrow="true">
      <md-sidemenu-button href="#">Submenu 1</md-sidemenu-button>
      <md-sidemenu-button href="#">Submenu 2</md-sidemenu-button>
      <md-sidemenu-button href="#">Submenu 3</md-sidemenu-button>
    </md-sidemenu-content>
  </md-sidemenu-group>
  
  <md-sidemenu-group>
    <md-divider></md-divider>

    <md-subheader class="md-no-sticky">Caption</md-subheader>

    <md-sidemenu-button href="#">Menu 4</md-sidemenu-button>
  </md-sidemenu-group>
</md-sidemenu>
```

The `<md-sidemenu>` is the main directive to hold all navigation items.

The `<md-sidemenu-group>` is needed to create groups of content.

The `<md-sidemenu-content>` define the collapsible navigation element and theres some attributes to setup. The `md-icon` add an icon before the `md-heading` and the `md-arrow` add an arrow after the heading.

The `<md-sidemenu-button>` add the buttons inside the navigation.

Pretty easy!

## License

MIT
