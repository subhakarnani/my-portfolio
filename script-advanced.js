/* ============================================
   ADVANCED PROJECTS INTERACTIONS
============================================= */

function toggleProjectDetails(button) {
    const card = button.closest('.advanced-project-card');
    const details = card.querySelector('.project-details-hidden');
    
    button.classList.toggle('active');
    details.classList.toggle('active');
    
    const span = button.querySelector('span');
    if (details.classList.contains('active')) {
        span.textContent = 'Hide Technical Details';
    } else {
        span.textContent = 'View Technical Details';
    }
    
    if (details.classList.contains('active')) {
        setTimeout(() => {
            details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
}

// Add expand all functionality
document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.projects-advanced .section-header');
    if (!section) return;
    
    const container = document.createElement('div');
    container.style.cssText = 'text-align: center; margin-top: 1rem;';
    
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline';
    btn.innerHTML = '<i class="fas fa-expand-alt"></i> Expand All Projects';
    btn.style.cssText = 'color: white; border-color: white;';
    
    btn.addEventListener('click', function() {
        const allBtns = document.querySelectorAll('.btn-expand');
        const allExpanded = Array.from(allBtns).every(b => b.classList.contains('active'));
        
        allBtns.forEach(b => {
            const details = b.closest('.advanced-project-card').querySelector('.project-details-hidden');
            
            if (allExpanded) {
                b.classList.remove('active');
                details.classList.remove('active');
                b.querySelector('span').textContent = 'View Technical Details';
                btn.innerHTML = '<i class="fas fa-expand-alt"></i> Expand All Projects';
            } else {
                b.classList.add('active');
                details.classList.add('active');
                b.querySelector('span').textContent = 'Hide Technical Details';
                btn.innerHTML = '<i class="fas fa-compress-alt"></i> Collapse All Projects';
            }
        });
    });
    
    container.appendChild(btn);
    section.appendChild(container);
});