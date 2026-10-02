const notes = {
  "Array": `<h2>📚 What is an Array?</h2>
    <p>An array is a collection of elements of the same data type stored in continuous memory locations.</p>
    <h3>⭐ Exam Points</h3><ul><li>Stores multiple values under one name.</li><li>Elements are accessed using an index.</li><li>Index generally starts from 0.</li><li>Arrays can be one-dimensional or multi-dimensional.</li></ul>
    <h3>🎯 Important Question</h3><p><b>Explain array with its types, advantages and applications.</b></p>`,
  "Java Hello World": `<h2>☕ Java — Hello World</h2><p>The basic Java program uses a class and the <code>main()</code> method.</p><h3>Example</h3><pre><code>class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}</code></pre><h3>⭐ Remember</h3><p><code>System.out.println()</code> is used to print output.</p>`,
  "HTML Boilerplate": `<h2>🌐 HTML Boilerplate</h2><p>HTML boilerplate is the basic structure used to start an HTML page.</p><h3>⭐ Main Parts</h3><ul><li><code>&lt;!DOCTYPE html&gt;</code> tells the browser the document is HTML5.</li><li><code>&lt;html&gt;</code> is the root element.</li><li><code>&lt;head&gt;</code> contains page information.</li><li><code>&lt;body&gt;</code> contains visible content.</li></ul>`
};

function openNote(name){
  document.getElementById('modalContent').innerHTML = notes[name] || `<h2>${name}</h2><p>This topic is ready for your notes. Add your exam-ready content here.</p>`;
  document.getElementById('modal').classList.add('show');
  document.getElementById('modal').setAttribute('aria-hidden','false');
}
function closeModal(){
  document.getElementById('modal').classList.remove('show');
  document.getElementById('modal').setAttribute('aria-hidden','true');
}
function showTopic(subject){
  openNote(subject);
  document.getElementById('modalContent').innerHTML = `<h2>📚 ${subject}</h2><p><b>Topics coming here:</b></p><ul><li>Unit-wise notes</li><li>Important exam questions</li><li>Short answers</li><li>Long answers</li><li>Quick revision points</li></ul><p>You can replace these placeholders with your complete notes as the website grows.</p>`;
}
document.getElementById('searchInput').addEventListener('input', function(){
  const q=this.value.toLowerCase().trim();
  let count=0;
  document.querySelectorAll('.note-card').forEach(card=>{
    const show=card.dataset.search.includes(q);
    card.style.display=show?'block':'none';
    if(show) count++;
  });
  document.getElementById('noResults').style.display=count?'none':'block';
});
document.querySelector('.menu-btn').addEventListener('click',()=>{
  const nav=document.querySelector('nav');
  nav.style.display=nav.style.display==='flex'?'none':'flex';
  nav.style.position='absolute'; nav.style.top='76px'; nav.style.right='5%'; nav.style.background='#fff';
  nav.style.padding='18px'; nav.style.borderRadius='15px'; nav.style.flexDirection='column'; nav.style.gap='15px';
});
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal') closeModal();});
