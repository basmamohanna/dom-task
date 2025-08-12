//Task1: DOM Archaeologist

// 1. Starting from document.body, write code that logs (in order):
// The tag name of the last element child of <main>, using only navigation properties (no query selectors).
const body = document.body;
const mainEL = body.children[1];
const lastMainChild= mainEL.lastElementChild;

console.log('Tag name of last element child of main:', lastMainChild.tagName);

// The number of element children in <section> (not text nodes).
const sectionEl = mainEL.children[0];
const numberOfSectionChildren = sectionEl.children.length;

console.log('Number of element children in section:', numberOfSectionChildren);

// The difference in length between childNodes and children of <section>. Explain why they differ.

// childNodes includes all nodetypes like text nodes, elements
// but children includes only element nodes
const childNodesNum = sectionEl.childNodes.length;
const childrenNum = sectionEl.children.length;
const difference = childNodesNum - childrenNum;

console.log('The difference in length between childNodes and children:', difference);

// 2. Determine:
// What is the nodeType and nodeName of the first node in document.body.childNodes?

// nodeType property returns a numerical value indicating the type of the node, 1 = element , 3 = text. 
/* nodeName property returns a string representing the name of the node,
   example: nodeName is "#text" for text nodes */
const firstNode = document.body.childNodes[0];
console.log('nodeType:', firstNode.nodeType, 'nodeName:', firstNode.nodeName);

// Is the first paragraph a sibling of the second, or a descendant?
const section = document.body.children[1].children[0];
const firstParagraph = section.children[0];// First <p>
const secondParagraph = section.children[1];// Second <p>

// Check sibling relationship
console.log('Is first paragraph a sibling of the second?',
             firstParagraph.nextElementSibling === secondParagraph);// true

// Check descendant relationship 
console.log('Is first paragraph a descendant of the second?', 
             firstParagraph.contains(secondParagraph));// false

/* Twist:
Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin. */
section.childNodes.forEach(node => {
   if(node.nodeType ===3) { // if nodeType returns 3 means this node ia is text node
      console.log('unexpected text node found:', node)
   }
})           

// Task 2: Synthetic DOM Injection
/* <div class="card" data-role="admin">
     <h2>Access Panel</h2>
     <p>Authenticated</p>
   </div> */

// Create <div>
const div = document.createElement('div');
div.classList.add('card');
div.dataset.role = 'admin';

// Create <h2>
const h2 = document.createElement('h2');
h2.textContent = 'Access Panel';

// Create <p>
const p = document.createElement('p');
p.textContent = 'Authenticated';

// Attach h2 and p elements to the div element:
div.appendChild(h2);
div.appendChild(p);

// Append to body
document.body.appendChild(div);

// After appending it to the document body:
// Log the value of the data-role as a JS property, not via .getAttribute.
console.log('data role:', div.dataset.role);

// Change the paragraph text to "Welcome back, Admin" using a property, not a method.
p.textContent = 'Welcome back, Admin';

// Add two classes to the div: "authenticated" and "highlight" using classList.
div.classList.add('authenticated', 'highlight');

/* Challenge:
Use classList.contains() to verify that "card" still exists, and remove it while keeping the others.*/
if (div.classList.contains('card')) {
    div.classList.remove('card');
}
console.log('class List:', div.className);
