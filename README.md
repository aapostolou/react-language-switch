# Usage

A simple language dropdown to use on your projects.

### Examples

```tsx
const [currentLanguage, setCurrentLanguage] = useState<FlagCode>("gr");

<LanguageSwitch
    languages={["gr", "us", "es", "fr", "de", "pt", "it"]}
    currentLanguage={currentLanguage}
    onChange={setCurrentLanguage}
/>;
```

### Props

|      prop       |                  type                  | default |            |
| :-------------: | :------------------------------------: | :-----: | :--------: |
|    languages    |              `FlagCode[]`              |         | `required` |
| currentLanguage |               `FlagCode`               |         | `required` |
|   direction?    |       `LanguageSwitchDirection`        | `down`  |            |
| flagsPerGroup?  |                `number`                |   \*    | \*optional |
|     width?      |                `number`                |  `40`   |            |
|     height?     |                `number`                |  `30`   |            |
|      gap?       |                `number`                |   `8`   |            |
|   flagProps?    |              `FlagProps`               |         |            |
|    onChange?    | (`languageCode`: `FlagCode`) => `void` |         |            |

\*`flagsPerGroup` gets a default value equal to the number of languages provided in order to show all flags when it needs to be calculated.

#### Types

##### LanguageSwitchDirection

`down` `up` `right` `left` `down-left` `down-right` `up-left` `up-right` `left-down` `left-up` `right-down` `right-up`

##### FlagCode and FlagProps

Those types are part of the [react-flagpedia]('https://www.npmjs.com/package/react-flagpedia') package.

# Credits

-   The implementation wouldn't be possible without https://flagpedia.net/ and the [react-flagpedia]('https://www.npmjs.com/package/react-flagpedia') package.
-   This package was build using [react-library-template](https://github.com/morewings/react-library-template).
