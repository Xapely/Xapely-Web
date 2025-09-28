document.addEventListener('DOMContentLoaded', () => {
    const path = document.querySelector('.path-line');
    const section = document.querySelector('.how-it-works');
    const pathLength = path.getTotalLength();
    
    // Set initial dasharray and offset based on actual path length
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    
    window.addEventListener('scroll', () => {
        const sectionRect = section.getBoundingClientRect();
        const scrollPercentage = Math.min(
            Math.max(
                (window.innerHeight - sectionRect.top) / 
                (sectionRect.height + window.innerHeight),
                0
            ),
            1
        );
        
        // Smoothly animate the path
        path.style.strokeDashoffset = pathLength - (scrollPercentage * pathLength);
    });
});