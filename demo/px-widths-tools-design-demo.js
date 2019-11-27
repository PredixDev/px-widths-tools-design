/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-widths-tools-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-widths-tools-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-widths-tools-design" description="The Predix UI Widths Tools allows you to generate a suite of utility classes for sizing pieces of UI." layer="tools" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-defaults-design&quot;
  ]" hide-demo-container="" selected-options="{{selectedOptions}}">

<!-- 5: Set Usage HTML -->
<section slot="usage">
Pass in the fraction you'd like the widths to have - with a <strong>space</strong> instead of <strong>/</strong> - and an optional suffix for responsive widths.

\`\`\`
<!-- @param {Number} \$inuit-widths-columns            - Number of columns -->
<!-- @param {String} \$inuit-widths-breakpoint [null]  - Name of breakpoint -->

@include inuit-widths(\$inuit-widths-columns, \$inuit-widths-breakpoint: null);


<!-- E.g. to create thirds and quarters for a small breakpoint: -->
@include inuit-widths(3 4, -sm);

\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-widths-tools-design-demo'
});
