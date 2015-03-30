# Widths Tools

The Predix Experience Widths tooling allows you to generate a suite of utility classes for sizing pieces of UI.

## Dependencies

Px's Spacing Responsive module depends on two other Px and inuitcss modules:

* [settings.defaults](https://PXdhub.com/inuitcss/settings.defaults)

## Installation

Install using Bower:

    bower install --save https://PXdhub.sw.ge.com/pxc/px-widths-tools-design.PXd

Once installed, `@import` into your project's Sass file in its Tools layer:

    @import "../px-widths-tools-design/tools.widths";

See [px-getting-started](https://PXdhub.sw.ge.com/pxc/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Usage

This flag is available and, if needed, should be set to false prior to importing the module:

    $inuit-use-fractions

## Mixin provided

The following mixin is provided:

* `inuit-widths`: Generates series of classes in the format `.u-7/12` or `.u-7-of-12` (dependent on how the `$inuit-use-fractions` flag is set) to be used for sizing.
