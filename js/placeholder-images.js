/**
 * Placeholder Images Generator
 * This script creates placeholder images for the website
 */

document.addEventListener('DOMContentLoaded', function() {
  // Replace all image elements with placeholders
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt') || 'Image';
    
    // Skip if not a placeholder image
    if (!src.includes('assets/images/')) return;
    
    // Get image type from src
    const imagePath = src.split('/');
    const imageName = imagePath.pop();
    const imageType = imagePath[imagePath.length - 1]; // Get the directory name
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set dimensions
    let width = 300;
    let height = 200;
    
    // Adjust dimensions based on image type
    if (imageType === 'logos' || imageName.includes('logo')) {
      width = 200;
      height = 50;
    } else if (imageType === 'hero' || imageName.includes('hero')) {
      width = 1200;
      height = 600;
    } else if (imageType === 'testimonials' || imageName.includes('testimonial')) {
      width = 100;
      height = 100;
    } else if (imageName.includes('book-cover')) {
      width = 400;
      height = 600;
    } else if (imageName.includes('author')) {
      width = 300;
      height = 300;
    } else if (imageType === 'graphics' || imageName.includes('hrv-graph')) {
      width = 600;
      height = 400;
    } else if (imageName.includes('favicon')) {
      width = 32;
      height = 32;
    }
    
    canvas.width = width;
    canvas.height = height;
    
    // Fill background
    let bgColor = '#F0F2F5';
    
    if (imageName.includes('logo-white')) {
      bgColor = '#212529';
    } else if (imageType === 'hero' || imageName.includes('hero')) {
      // Create gradient for hero images
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      
      if (imageName.includes('hero-home')) {
        gradient.addColorStop(0, '#0D8A8C'); // Teal
        gradient.addColorStop(1, '#5B4E96'); // Purple
      } else if (imageName.includes('hero-book')) {
        gradient.addColorStop(0, '#5B4E96'); // Purple
        gradient.addColorStop(1, '#0D8A8C'); // Teal
      }
      
      bgColor = gradient;
    } else if (imageType === 'testimonials' || imageName.includes('testimonial')) {
      // Different colors for testimonials
      const testimonialColors = {
        'testimonial-1.jpg': '#0D8A8C', // Teal
        'testimonial-2.jpg': '#5B4E96', // Purple
        'testimonial-3.jpg': '#F06E3B', // Muted Orange
        'testimonial-4.jpg': '#5CBFC0', // Light Teal
        'testimonial-5.jpg': '#8A7EBB', // Light Purple
        'testimonial-6.jpg': '#F59D7A'  // Light Orange
      };
      
      bgColor = testimonialColors[imageName] || '#0D8A8C';
    } else if (imageName.includes('book-cover')) {
      // Gradient for book cover
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#5B4E96'); // Purple
      gradient.addColorStop(1, '#0D8A8C'); // Teal
      bgColor = gradient;
    }
    
    // Fill background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    
    // Add content based on image type
    if (imageType === 'logos' || imageName.includes('logo')) {
      // Draw logo
      ctx.fillStyle = imageName.includes('logo-white') ? '#FFFFFF' : '#0D8A8C';
      ctx.font = 'bold 24px Arial';
      ctx.fillText('RecoverHRV', 60, 35);
      
      // Draw logo box
      ctx.fillStyle = imageName.includes('logo-white') ? '#0D8A8C' : '#FFFFFF';
      ctx.fillRect(0, 0, 50, 50);
      
      // Draw HRV line
      ctx.strokeStyle = imageName.includes('logo-white') ? '#FFFFFF' : '#0D8A8C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(15, 25);
      ctx.quadraticCurveTo(25, 10, 35, 25);
      ctx.quadraticCurveTo(45, 40, 45, 25);
      ctx.stroke();
    } else if (imageType === 'hero' || imageName.includes('hero')) {
      // Add text to hero
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      
      if (imageName.includes('hero-home')) {
        ctx.fillText('Heart Rate Variability', width/2, height/2);
      } else if (imageName.includes('hero-book')) {
        ctx.fillText('HRV Recovery Blueprint', width/2, height/2);
      }
      
      // Add HRV line
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(width/4, height/2 + 50);
      ctx.lineTo(width/3, height/2 + 50);
      ctx.lineTo(width/2.5, height/2);
      ctx.lineTo(width/2, height/2 + 100);
      ctx.lineTo(width/1.7, height/2 + 50);
      ctx.lineTo(width/1.5, height/2 + 50);
      ctx.stroke();
    } else if (imageType === 'testimonials' || imageName.includes('testimonial')) {
      // Draw person silhouette
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(width/2, height/3, height/5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(width/2, height/2);
      ctx.quadraticCurveTo(width/3, height, width/4, height);
      ctx.lineTo(width - width/4, height);
      ctx.quadraticCurveTo(width - width/3, height, width/2, height/2);
      ctx.fill();
    } else if (imageType === 'graphics' || imageName.includes('hrv-graph')) {
      // Draw graph background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(50, 50, width - 100, height - 100);
      
      // Draw grid
      ctx.strokeStyle = '#EEEEEE';
      ctx.lineWidth = 1;
      
      // Vertical grid lines
      for (let x = 50; x <= width - 50; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 50);
        ctx.lineTo(x, height - 50);
        ctx.stroke();
      }
      
      // Horizontal grid lines
      for (let y = 50; y <= height - 50; y += 50) {
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(width - 50, y);
        ctx.stroke();
      }
      
      // Draw axes
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(50, height - 50);
      ctx.lineTo(width - 50, height - 50);
      ctx.moveTo(50, 50);
      ctx.lineTo(50, height - 50);
      ctx.stroke();
      
      // Draw HRV line
      ctx.strokeStyle = '#0D8A8C'; // Teal
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(50, height - 100);
      
      // Create random points for the graph
      const points = [];
      const numPoints = 10;
      const stepX = (width - 100) / numPoints;
      
      for (let i = 0; i <= numPoints; i++) {
        const x = 50 + i * stepX;
        const y = Math.random() * (height - 150) + 50;
        points.push({ x, y });
      }
      
      // Draw the line
      for (let i = 0; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      
      ctx.stroke();
      
      // Add labels
      ctx.fillStyle = '#333333';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Time (days)', width/2, height - 20);
      
      ctx.save();
      ctx.translate(20, height/2);
      ctx.rotate(-Math.PI/2);
      ctx.textAlign = 'center';
      ctx.fillText('HRV (ms)', 0, 0);
      ctx.restore();
    } else if (imageName.includes('book-cover')) {
      // Draw book title
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('THE HRV', width/2, height/3 - 40);
      ctx.fillText('RECOVERY', width/2, height/3);
      ctx.fillText('BLUEPRINT', width/2, height/3 + 40);
      
      // Draw HRV line
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(width/4, height/2);
      ctx.lineTo(width/3, height/2);
      ctx.lineTo(width/2.5, height/2 - 50);
      ctx.lineTo(width/2, height/2 + 50);
      ctx.lineTo(width/1.7, height/2);
      ctx.lineTo(width/1.5, height/2);
      ctx.stroke();
      
      // Draw subtitle
      ctx.font = '16px Arial';
      ctx.fillText('The definitive guide to using', width/2, height/1.5);
      ctx.fillText('Heart Rate Variability for optimal', width/2, height/1.5 + 25);
      ctx.fillText('recovery, performance, and health', width/2, height/1.5 + 50);
      
      // Draw author
      ctx.font = '14px Arial';
      ctx.fillText('By RecoverwithHRV', width/2, height - 30);
    } else if (imageName.includes('author')) {
      // Draw person silhouette
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(width/2, height/3, height/5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(width/2, height/2);
      ctx.quadraticCurveTo(width/3, height, width/4, height);
      ctx.lineTo(width - width/4, height);
      ctx.quadraticCurveTo(width - width/3, height, width/2, height/2);
      ctx.fill();
      
      // Add name
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Author Name', width/2, height - 50);
      ctx.font = '16px Arial';
      ctx.fillText('HRV Specialist', width/2, height - 25);
    } else if (imageName.includes('favicon')) {
      // Draw favicon
      ctx.fillStyle = '#1E7A4B';
      ctx.fillRect(0, 0, width, height);
      
      // Draw HRV line
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(8, 16);
      ctx.quadraticCurveTo(16, 6, 24, 16);
      ctx.stroke();
    }
    
    // Replace the image with the canvas
    // Replace the image src with canvas data URL
    img.src = canvas.toDataURL('image/png');
  });
}); 