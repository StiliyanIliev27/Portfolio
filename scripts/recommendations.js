// Add loading state to PDF viewer
document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.querySelector('.pdf-viewer');
    if (pdfViewer) {
        pdfViewer.classList.add('loading');
        
        pdfViewer.onload = function() {
            pdfViewer.classList.remove('loading');
        };
    }
});

// Fallback if PDF fails to load
function handlePDFError(iframe) {
    iframe.style.display = 'none';
    const errorMessage = document.createElement('div');
    errorMessage.className = 'pdf-error';
    errorMessage.innerHTML = `
        <p>Unable to load PDF preview.</p>
        <a href="${iframe.src}" class="download-pdf" target="_blank">
            <i class="fas fa-file-pdf"></i>
            Open PDF directly
        </a>
    `;
    iframe.parentNode.appendChild(errorMessage);
} 