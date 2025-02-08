document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('aiForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    // Initialize submissions array in localStorage if it doesn't exist
    if (!localStorage.getItem('aiProbeSubmissions')) {
        localStorage.setItem('aiProbeSubmissions', JSON.stringify([]));
    }

    // Log visitor information
    const visitorInfo = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    
    console.log('Visitor Information:', visitorInfo);
    
    // Store visitor info in localStorage
    const visitors = JSON.parse(localStorage.getItem('aiProbeVisitors') || '[]');
    visitors.push(visitorInfo);
    localStorage.setItem('aiProbeVisitors', JSON.stringify(visitors));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Gather form data
        const formData = {
            name: form.name.value,
            purpose: form.purpose.value,
            autonomy: form.autonomy.value,
            systemLength: form.systemLength.value || null,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            ...visitorInfo
        };
        
        // Store submission in localStorage
        const submissions = JSON.parse(localStorage.getItem('aiProbeSubmissions'));
        submissions.push(formData);
        localStorage.setItem('aiProbeSubmissions', JSON.stringify(submissions));
        
        // Log submission to console with detailed information
        console.log('Form Submission:', formData);
        console.log('Total Submissions:', submissions.length);
        console.log('Access stored submissions in browser console using: JSON.parse(localStorage.getItem("aiProbeSubmissions"))');
        
        // Show thank you message
        thankYouMessage.classList.remove('hidden');
        
        // Reset form
        form.reset();
        
        // Hide thank you message after 5 seconds
        setTimeout(() => {
            thankYouMessage.classList.add('hidden');
        }, 5000);
    });

    // Add helper function to console for viewing submissions
    window.viewSubmissions = () => {
        const submissions = JSON.parse(localStorage.getItem('aiProbeSubmissions') || '[]');
        console.table(submissions);
        return `Total submissions: ${submissions.length}`;
    };

    // Add helper function to console for viewing visitors
    window.viewVisitors = () => {
        const visitors = JSON.parse(localStorage.getItem('aiProbeVisitors') || '[]');
        console.table(visitors);
        return `Total visitors: ${visitors.length}`;
    };

    // Log instructions for viewing data
    console.log('To view all submissions, run: viewSubmissions()');
    console.log('To view all visitors, run: viewVisitors()');
});
