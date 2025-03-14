import { Global } from "@emotion/react"
import { FC } from "react"

export const LondrinaSolidFontFace: FC = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Londrina Solid';
      font-style: normal;
      font-weight: 100;
      src: url('./fonts/londrinaSolid/londrina-solid-v10-latin-100.eot'); /* IE9 Compat Modes */
      src: local(''),
        url('./fonts/londrinaSolid/londrina-solid-v10-latin-100.eot?#iefix')
          format('embedded-opentype'),
        /* IE6-IE8 */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-100.woff2')
          format('woff2'),
        /* Super Modern Browsers */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-100.woff')
          format('woff'),
        /* Modern Browsers */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-100.ttf')
          format('truetype'),
        /* Safari, Android, iOS */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-100.svg#LondrinaSolid')
          format('svg'); /* Legacy iOS */
    }
    /* londrina-solid-300 - latin */
    @font-face {
      font-family: 'Londrina Solid';
      font-style: normal;
      font-weight: 300;
      src: url('./fonts/londrinaSolid/londrina-solid-v10-latin-300.eot'); /* IE9 Compat Modes */
      src: local(''),
        url('./fonts/londrinaSolid/londrina-solid-v10-latin-300.eot?#iefix')
          format('embedded-opentype'),
        /* IE6-IE8 */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-300.woff2')
          format('woff2'),
        /* Super Modern Browsers */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-300.woff')
          format('woff'),
        /* Modern Browsers */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-300.ttf')
          format('truetype'),
        /* Safari, Android, iOS */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-300.svg#LondrinaSolid')
          format('svg'); /* Legacy iOS */
    }
    /* londrina-solid-regular - latin */
    @font-face {
      font-family: 'Londrina Solid';
      font-style: normal;
      font-weight: 400;
      src: url('./fonts/londrinaSolid/londrina-solid-v10-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
        url('./fonts/londrinaSolid/londrina-solid-v10-latin-regular.eot?#iefix')
          format('embedded-opentype'),
        /* IE6-IE8 */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-regular.woff2')
          format('woff2'),
        /* Super Modern Browsers */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-regular.woff')
          format('woff'),
        /* Modern Browsers */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-regular.ttf')
          format('truetype'),
        /* Safari, Android, iOS */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-regular.svg#LondrinaSolid')
          format('svg'); /* Legacy iOS */
    }
    /* londrina-solid-900 - latin */
    @font-face {
      font-family: 'Londrina Solid';
      font-style: normal;
      font-weight: 900;
      src: url('./fonts/londrinaSolid/londrina-solid-v10-latin-900.eot'); /* IE9 Compat Modes */
      src: local(''),
        url('./fonts/londrinaSolid/londrina-solid-v10-latin-900.eot?#iefix')
          format('embedded-opentype'),
        /* IE6-IE8 */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-900.woff2')
          format('woff2'),
        /* Super Modern Browsers */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-900.woff')
          format('woff'),
        /* Modern Browsers */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-900.ttf')
          format('truetype'),
        /* Safari, Android, iOS */
          url('./fonts/londrinaSolid/londrina-solid-v10-latin-900.svg#LondrinaSolid')
          format('svg'); /* Legacy iOS */

    `}
  />
)
