# HTML Form

This README provides an overview of an HTML form.

## Introduction
An HTML form is a crucial element for collecting user input on a web page. It allows users to enter data, make selections, and submit the form to the server for processing.

## Structure
To create an HTML form, you need to use the `<form>` element. Inside the form, you can include various form controls such as text inputs, checkboxes, radio buttons, dropdown menus, and buttons.

Here's an example of a basic form structure:

```html
<form>
    <!-- Form controls go here -->
</form>
```

## Form Controls
There are different types of form controls available in HTML. Here are a few commonly used ones:

- `<input type="text">`: Used for single-line text input.
- `<input type="checkbox">`: Used for checkboxes.
- `<input type="radio">`: Used for radio buttons.
- `<select>`: Used for dropdown menus.
- `<textarea>`: Used for multi-line text input.

## Form Submission
When a user submits a form, the data is typically sent to a server for processing. To specify where the form data should be sent, you can use the `action` attribute on the `<form>` element.

```html
<form action="/submit" method="POST">
    <!-- Form controls go here -->
    <button type="submit">Submit</button>
</form>
```

In the example above, the form data will be sent to the `/submit` endpoint using the HTTP POST method.

## Conclusion
HTML forms are essential for collecting user input on a web page. By understanding the structure and various form controls, you can create interactive and user-friendly forms for your web applications.
