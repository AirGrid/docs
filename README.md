# Docs

## Creating Top-Level Navigation

To create a new top-level navigation item in the documentation, follow these steps:

1. Create a New Folder:
   Inside the `docs/` directory, create a new folder with a name that represents your new section. For example, if your new section is named "New Section Name," create a folder named `new-section-name`.

2. Add Content:
   Within the newly created folder, add an `index.md` file. This Markdown file will contain the content for your new section.

3. Make it visible inside of sidebar:
   Open [`docs/.vitepress/config.js`](docs/.vitepress/config.js) in your code editor, locate the `themeConfig.sidebar` object. Add a new item to this object with the following format:

   ```javascript
   themeConfig: {
     // ...
     sidebar: [
       // existing sidebar items
       {
         text: 'New Section Name',
         link: '/new-section-name/',
       },
       // existing sidebar items
     ],
     // ...
   }
   
5. Update the Table of Contents: Open [`docs/index.md`](docs/index.md), which is the main documentation file. Update the 
   table of 
   contents to include a link to your new section. 
