
const darkModeToggle = document.querySelector('.dark-mode-toggle');


darkModeToggle.addEventListener('click', () => {
  
    document.body.classList.toggle('dark-mode');
        
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});


const storedDarkMode = localStorage.getItem('darkMode');

if (storedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
}

export default darkModeToggle