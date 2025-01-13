function openCertificatesModal() {
    document.getElementById('certificatesModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCertificatesModal() {
    document.getElementById('certificatesModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('certificatesModal');
    if (event.target === modal) {
        closeCertificatesModal();
    }
} 