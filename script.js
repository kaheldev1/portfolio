document.addEventListener('DOMContentLoaded', () => {
    
    // Contact Toggle logic
    const contactBtn = document.querySelector('#contact-btn');
    const contactInfo = document.querySelector('#contact-info');

    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            contactInfo.classList.toggle('hidden');
            e.stopPropagation(); // Iwasan ang agad na pagsara
        });
    }

    // Isara ang contact popup kapag nag-click sa labas
    document.addEventListener('click', () => {
        if (contactInfo && !contactInfo.classList.contains('hidden')) {
            contactInfo.classList.add('hidden');
        }
    });

    // Metric Load Animation
    const metrics = document.querySelectorAll('.value');
    metrics.forEach((m, i) => {
        m.style.opacity = '0';
        setTimeout(() => {
            m.style.opacity = '1';
            m.style.transition = 'opacity 1s ease-in';
        }, 200 * i);
    });
});

function openTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}