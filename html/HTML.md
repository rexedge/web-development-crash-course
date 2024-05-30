# 30-Minute HTML Crash Course: Building a Minimalistic Blog Page

## Minutes 1-5: Introduction to HTML5 Semantic Elements

- **What is HTML?** HTML (HyperText Markup Language) is the standard language used to - create web pages. It uses elements (tags) to structure and format content.
- **HTML5 Semantic Elements:** Semantic elements clearly describe their meaning in a human- and machine-readable way. Here's an overview of some key elements:

 ```text
 <header>: Defines a header for a document or section.
 <nav>: Defines navigation links.
 <main>: Specifies the main content of a document.
 <footer>: Defines a footer for a document or section.
 ```

 ```html
 <!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <title>My Blog</title>
  </head>
  <body>
   <header>
    <h1>Welcome to My Blog</h1>
   </header>
   <nav>
    <a href="#home">Home</a> | 
    <a href="#about">About</a> |
    <a href="#contact">Contact</a>
   </nav>
   <main>
    <h2>Blog Post Title</h2>
    <p>This is a sample blog post.</p>
   </main>
   <footer>
    <p>&copy; 2024 My Blog</p>
   </footer>
  </body>
 </html>
 ```

- **Importance of HTML Validation and Accessibility:**
  - HTML Validation: Ensures your HTML code is error-free and follows web standards. Use tools like the W3C Validator.
  - Accessibility: Making your website usable for people with disabilities. Use semantic elements and attributes like alt for images.

## Minutes 6-10: Basic HTML Attributes

- Common HTML Attributes: Adding Attributes to Elements

```html
<a href="https://www.example.com">Visit Example</a>
<img src="image.jpg" alt="Description of image">
```

## Minutes 11-15: Basic HTML Formatting Elements

- Formatting Elements

```text
<b>: Bold text.
<i>: Italic text.
<u>: Underlined text.
```

- HTML Entities

```text
&nbsp;: Non-breaking space.
&copy;: Copyright symbol.
```

```html
<p>
 This is <b>bold</b>, <i>italic</i>, and <u>underlined</u> text.
 </p>
<p>
 Use &nbsp; for non-breaking spaces and &copy; for copyright symbols.
 </p>
```

## Minutes 16-20: Basic HTML Lists

- Ordered and Unordered Lists

```text
<ul>: Unordered list.
<ol>: Ordered list.
<li>: List item.
```

```html
<h3>Unordered List</h3>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<h3>Ordered List</h3>
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

## Minutes 21-25: Basic HTML Tables

- Table Elements

```text
<table>: Defines a table.
<tr>: Table row.
<td>: Table data/cell.
```

```html
<table border="1">
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
    </tr>
</table>
```

## Minutes 26-30: Resources for Further Learning

- Online Tutorials and Documentation
  - W3Schools
  - MDN Web Docs
  - HTML.com

- Practice Building Your Own HTML Pages
  - Use a code editor like Visual Studio Code or Sublime Text.
  - Experiment with different HTML elements and attributes.
  - Validate your HTML and ensure it is accessible.

## Conclusion

HTML is the backbone of web development. By mastering its basics, you can create well-structured and accessible web pages. Keep practicing and exploring more advanced topics to enhance your web development skills.

## Interactive Exercise

- Create a simple HTML page with a header, navigation, main content area, a list, and a table.
- Validate your HTML using an online validator.
- Make sure to include descriptive alt attributes for any images you use.
