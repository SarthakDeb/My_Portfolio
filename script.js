document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.elements[0].value;
        const email = contactForm.elements[1].value;
        const message = contactForm.elements[2].value;

        // Here you would typically send this data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // Clear form fields
        contactForm.reset();

        // Show a success message (you can replace this with a more user-friendly notification)
        alert('Thank you for your message! We\'ll get back to you soon.');
    });

const skills = document.querySelectorAll('.skill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pieChart = entry.target.querySelector('.pie-chart-fill');
                const percentage = entry.target.querySelector('.skill-percentage').textContent;
                pieChart.style.strokeDasharray = `${percentage.slice(0, -1)} 100`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skills.forEach(skill => observer.observe(skill));
});