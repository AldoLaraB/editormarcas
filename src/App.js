import {useState} from 'react';
import {marked} from 'marked';

function App() {

  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!

  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25 
  }
  \`\`\`
  - First item
  - Second item
  - Third item

  > blockquote

  ![Tux, the Linux mascot](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100)

**bold text**

  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <textarea id="editor" onChange={(event) => {
        setText(event.target.value);
      } }
      value={text} ></textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}>
        
      </div>
    </div>
  );
}

export default App;
