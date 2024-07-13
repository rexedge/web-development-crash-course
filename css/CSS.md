### CSS 45-Minute Crash Course Outline

**Minutes 1-5: Introduction to CSS**
- **Overview of CSS**: What is CSS and why is it important?
- **Syntax and Structure**: How to write CSS rules, selectors, properties, and values.
- **Including CSS**: Inline styles, internal styles, and external stylesheets.

**Minutes 6-10: Basic Selectors and Combinators**
- **Element Selector**: Select elements by their tag name (e.g., `p` for paragraphs).
- **Class Selector**: Select elements by their class attribute (e.g., `.nav-link`).
- **ID Selector**: Select elements by their ID attribute (e.g., `#header`).
- **Combinators**: Child (`>`), descendant (space), adjacent sibling (`+`), and general sibling (`~`).

**Minutes 11-15: Styling Text and Fonts**
- **Font Properties**: `font-family`, `font-size`, `font-weight`, `font-style`.
- **Text Properties**: `color`, `text-align`, `text-decoration`, `line-height`.

**Minutes 16-20: Box Model and Layout**
- **Box Model**: Content, padding, border, and margin.
- **Width and Height**: Setting element dimensions.
- **Border Properties**: `border-width`, `border-style`, `border-color`.
- **Margin and Padding**: Controlling space inside and outside elements.

**Minutes 21-25: Advanced Selectors**
- **Attribute Selectors**: `[attribute]`, `[attribute=value]`.
- **Pseudo-classes**: `:hover`, `:focus`, `:nth-child`.
- **Pseudo-elements**: `::before`, `::after`.

**Minutes 26-30: Backgrounds and Images**
- **Background Properties**: `background-color`, `background-image`, `background-repeat`, `background-position`.
- **Styling Images**: `width`, `height`, `max-width`, `float`.

**Minutes 31-35: Flexbox and Grid**
- **Flexbox**: `display: flex`, `justify-content`, `align-items`, `flex-direction`.
- **Grid**: `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`.

**Minutes 36-40: Responsive Design**
- **Media Queries**: `@media` rules for different screen sizes.
- **Responsive Units**: Percentages, `em`, `rem`, `vw`, `vh`.
- **Responsive Layout Techniques**: Fluid grids, flexible images.

**Minutes 41-45: Practical Implementation**
- **Switching Themes with JavaScript**: Using a button to toggle between stylesheets.
- **Live Demo**: Create a simple webpage with two themes (default and digital).
- **Further Learning Resources**: Online tutorials, documentation, CSS frameworks (e.g., Bootstrap).

### Detailed Breakdown and Examples

**Minutes 1-5: Introduction to CSS**
- **CSS Basics**: CSS (Cascading Style Sheets) is used to style and layout web pages.
  ```html
  <style>
      body {
          background-color: #f0f0f0;
      }
  </style>
  ```
- **Linking External Stylesheets**:
  ```html
  <link rel="stylesheet" href="styles.css">
  ```

**Minutes 6-10: Basic Selectors and Combinators**
- **Class and ID Selectors**:
  ```css
  .nav-link {
      color: blue;
  }
  #header {
      background-color: green;
  }
  ```
- **Combinators**:
  ```css
  div > p {
      color: red;
  }
  ```

**Minutes 11-15: Styling Text and Fonts**
- **Font Properties**:
  ```css
  body {
      font-family: Arial, sans-serif;
      font-size: 16px;
  }
  ```
- **Text Properties**:
  ```css
  h1 {
      color: #333;
      text-align: center;
      text-decoration: underline;
  }
  ```

**Minutes 16-20: Box Model and Layout**
- **Box Model**:
  ```css
  .box {
      width: 200px;
      padding: 10px;
      border: 1px solid #000;
      margin: 20px;
  }
  ```

**Minutes 21-25: Advanced Selectors**
- **Attribute Selectors**:
  ```css
  a[target="_blank"] {
      color: red;
  }
  ```
- **Pseudo-classes and Pseudo-elements**:
  ```css
  a:hover {
      color: green;
  }
  p::before {
      content: "Note: ";
      font-weight: bold;
  }
  ```

**Minutes 26-30: Backgrounds and Images**
- **Background Properties**:
  ```css
  body {
      background-image: url('background.jpg');
      background-repeat: no-repeat;
      background-position: center center;
  }
  ```
- **Styling Images**:
  ```css
  img {
      width: 100%;
      height: auto;
  }
  ```

**Minutes 31-35: Flexbox and Grid**
- **Flexbox**:
  ```css
  .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  ```
- **Grid**:
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
  }
  ```

**Minutes 36-40: Responsive Design**
- **Media Queries**:
  ```css
  @media (max-width: 600px) {
      .container {
          flex-direction: column;
      }
  }
  ```
- **Responsive Units**:
  ```css
  .box {
      width: 50vw;
      height: 50vh;
  }
  ```

**Minutes 41-45: Practical Implementation**
- **Switching Themes with JavaScript**:
  ```html
  <button onclick="switchTheme()">Switch Theme</button>
  <script>
      function switchTheme() {
          const currentTheme = document.getElementById('theme-link').getAttribute('href');
          const newTheme = currentTheme === 'styles.css' ? 'digital-theme.css' : 'styles.css';
          document.getElementById('theme-link').setAttribute('href', newTheme);
      }
  </script>
  ```

- **Further Learning Resources**:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [CSS-Tricks](https://css-tricks.com/)
  - [W3Schools CSS Tutorial](https://www.w3schools.com/css/)

### Live Demo and Practice
- **Build a Simple Web Page**: Implement a basic webpage structure with header, navigation, main content, and footer.
- **Apply Styles**: Use both default and digital themes to style the webpage.
- **Interactive Practice**: Encourage students to modify styles and see immediate changes.

This crash course covers essential CSS concepts and provides practical examples to help students understand and apply CSS effectively.