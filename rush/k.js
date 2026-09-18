function showPage(pageId) {
    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-resume1').style.display = 'none';
    document.getElementById('page-resume2').style.display = 'none';
    document.getElementById('nav-resume1').style.display = 'none';
    document.getElementById('nav-resume2').style.display = 'none';
    if (pageId === 'home') {
        document.getElementById('page-home').style.display = 'block';
    } else if (pageId === 'resume1') {
        document.getElementById('page-resume1').style.display = 'block';
        document.getElementById('nav-resume1').style.display = 'flex'; 
    } else if (pageId === 'resume2') {
        document.getElementById('page-resume2').style.display = 'block';
        document.getElementById('nav-resume2').style.display = 'flex';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}