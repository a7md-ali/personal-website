// Dynamic Island functionality
class DynamicIsland {
    constructor() {
        this.island = document.getElementById('dynamicIsland');
        this.islandContent = this.island.querySelector('.island-content');
        this.islandIcon = this.island.querySelector('.island-icon i');
        this.islandText = this.island.querySelector('.island-text');
        
        this.messages = [
            { icon: 'fas fa-user', text: 'Welcome to my portfolio' },
            { icon: 'fas fa-code', text: 'Check out my projects' },
            { icon: 'fas fa-heart', text: 'I love creating amazing things' },
            { icon: 'fas fa-rocket', text: 'Let\'s build something together' },
            { icon: 'fas fa-star', text: 'Thanks for visiting!' }
        ];
        
        this.currentMessageIndex = 0;
        this.init();
    }
    
    init() {
        this.startMessageRotation();
        this.addScrollEffects();
        this.addHoverEffects();
        this.addClickEffects();
    }
    
    startMessageRotation() {
        setInterval(() => {
            this.changeMessage();
        }, 3000);
    }
    
    changeMessage() {
        const message = this.messages[this.currentMessageIndex];
        
        // Animate out
        this.islandContent.style.transform = 'scale(0.8)';
        this.islandContent.style.opacity = '0.5';
        
        setTimeout(() => {
            this.islandIcon.className = message.icon;
            this.islandText.textContent = message.text;
            
            // Animate in
            this.islandContent.style.transform = 'scale(1)';
            this.islandContent.style.opacity = '1';
            
            this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
        }, 200);
    }
    
    addScrollEffects() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                this.island.style.transform = 'translateX(-50%) translateY(-20px)';
                this.island.style.opacity = '0.7';
            } else {
                // Scrolling up
                this.island.style.transform = 'translateX(-50%) translateY(0)';
                this.island.style.opacity = '1';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    addHoverEffects() {
        this.island.addEventListener('mouseenter', () => {
            this.island.style.transform = 'translateX(-50%) scale(1.1)';
            this.island.style.background = 'rgba(0, 0, 0, 0.9)';
        });
        
        this.island.addEventListener('mouseleave', () => {
            this.island.style.transform = 'translateX(-50%) scale(1)';
            this.island.style.background = 'rgba(0, 0, 0, 0.8)';
        });
    }
    
    addClickEffects() {
        this.island.addEventListener('click', () => {
            // Add a special click animation
            this.island.style.transform = 'translateX(-50%) scale(0.95)';
            setTimeout(() => {
                this.island.style.transform = 'translateX(-50%) scale(1.05)';
                setTimeout(() => {
                    this.island.style.transform = 'translateX(-50%) scale(1)';
                }, 100);
            }, 100);
            
            // Show a special message
            this.showSpecialMessage();
        });
    }
    
    showSpecialMessage() {
        const specialMessages = [
            { icon: 'fas fa-magic', text: 'You found the secret!' },
            { icon: 'fas fa-gem', text: 'Amazing discovery!' },
            { icon: 'fas fa-fire', text: 'You\'re on fire!' },
            { icon: 'fas fa-crown', text: 'You\'re awesome!' }
        ];
        
        const randomMessage = specialMessages[Math.floor(Math.random() * specialMessages.length)];
        
        this.islandIcon.className = randomMessage.icon;
        this.islandText.textContent = randomMessage.text;
        
        // Reset to normal rotation after 2 seconds
        setTimeout(() => {
            this.currentMessageIndex = 0;
        }, 2000);
    }
}

// Smooth scrolling for navigation links
class SmoothScrolling {
    constructor() {
        this.init();
    }
    
    init() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Mobile navigation
class MobileNavigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }
    
    init() {
        this.hamburger.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
    }
    
    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }
    
    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// Scroll animations
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.observeElements();
        this.addScrollIndicator();
    }
    
    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat, .about-text, .about-image');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    addScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        if (scrollIndicator) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            });
        }
    }
}

// Form handling with EmailJS
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = document.getElementById('submit-btn');
        this.init();
    }
    
    init() {
        // Initialize EmailJS
        emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
        
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }
    }
    
    handleSubmit() {
        const originalText = this.submitBtn.textContent;
        
        // Show loading state
        this.submitBtn.textContent = 'Sending...';
        this.submitBtn.disabled = true;
        
        // Get form data
        const formData = {
            from_name: document.getElementById('from_name').value,
            from_email: document.getElementById('from_email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            to_email: 'aahmedsaty289@gmail.com' // Your email address
        };
        
        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.showSuccess();
            })
            .catch((error) => {
                console.log('FAILED...', error);
                this.showError();
            });
    }
    
    showSuccess() {
        this.submitBtn.textContent = 'Message Sent! ✓';
        this.submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        
        // Reset form
        this.form.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            this.submitBtn.textContent = 'Send Message';
            this.submitBtn.disabled = false;
            this.submitBtn.style.background = '';
        }, 3000);
    }
    
    showError() {
        this.submitBtn.textContent = 'Failed to Send';
        this.submitBtn.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
        
        // Reset button after 3 seconds
        setTimeout(() => {
            this.submitBtn.textContent = 'Send Message';
            this.submitBtn.disabled = false;
            this.submitBtn.style.background = '';
        }, 3000);
    }
}

// Parallax effects
class ParallaxEffects {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero::before');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Typing animation for hero text
class TypingAnimation {
    constructor() {
        this.heroTitle = document.querySelector('.hero-title');
        this.init();
    }
    
    init() {
        if (this.heroTitle) {
            const text = this.heroTitle.textContent;
            this.heroTitle.textContent = '';
            this.typeText(text, 0);
        }
    }
    
    typeText(text, index) {
        if (index < text.length) {
            this.heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(() => this.typeText(text, index), 100);
        }
    }
}

// Skill bars animation
class SkillBars {
    constructor() {
        this.init();
    }
    
    init() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkillItem(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    animateSkillItem(item) {
        item.style.transform = 'scale(1.05)';
        item.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        item.style.color = 'white';
        
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
    }
}

// Dark Mode Toggle
class DarkModeToggle {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = this.themeToggle.querySelector('i');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        this.setTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark') {
            this.themeIcon.className = 'fas fa-sun';
        } else {
            this.themeIcon.className = 'fas fa-moon';
        }
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add a nice transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DynamicIsland();
    new SmoothScrolling();
    new MobileNavigation();
    new ScrollAnimations();
    new ContactForm();
    new ParallaxEffects();
    new TypingAnimation();
    new SkillBars();
    new DarkModeToggle();
    new ParticleSystem();
    new CursorEffects();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Particle System
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }
    
    init() {
        // Skip particles on mobile devices for better performance
        if (window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return;
        }
        
        this.createCanvas();
        this.createParticles();
        this.animate();
        this.addResizeListener();
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.6;
        `;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        // Reduce particle count for better performance
        const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 20000), 50);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.4 + 0.1
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        // Draw connections
        this.drawConnections();
        
        requestAnimationFrame(() => this.animate());
    }
    
    drawConnections() {
        // Optimize connection drawing with reduced iterations
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < Math.min(i + 5, this.particles.length); j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = dx * dx + dy * dy; // Avoid sqrt for performance
                
                if (distance < 10000) { // 100^2 = 10000
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(102, 126, 234, ${0.05 * (1 - distance / 10000)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }
    
    addResizeListener() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.particles = [];
            this.createParticles();
        });
    }
}

// Enhanced Cursor Effects
class CursorEffects {
    constructor() {
        this.cursor = null;
        this.follower = null;
        this.init();
    }
    
    init() {
        this.createCursor();
        this.addMouseMoveListener();
        this.addMouseEnterListeners();
    }
    
    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            opacity: 0.8;
        `;
        
        this.follower = document.createElement('div');
        this.follower.className = 'cursor-follower';
        this.follower.style.cssText = `
            position: fixed;
            width: 30px;
            height: 30px;
            border: 2px solid var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.3s ease;
            opacity: 0.3;
        `;
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.follower);
    }
    
    addMouseMoveListener() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX - 4 + 'px';
            this.cursor.style.top = e.clientY - 4 + 'px';
            
            setTimeout(() => {
                this.follower.style.left = e.clientX - 15 + 'px';
                this.follower.style.top = e.clientY - 15 + 'px';
            }, 100);
        });
    }
    
    addMouseEnterListeners() {
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(2)';
                this.follower.style.transform = 'scale(1.5)';
                this.follower.style.opacity = '0.6';
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.follower.style.transform = 'scale(1)';
                this.follower.style.opacity = '0.3';
            });
        });
    }
}

// Add some fun interactive effects
document.addEventListener('mousemove', (e) => {
    // Keep the existing cursor code for backward compatibility
});

// Add click ripple effect
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
        animation: ripple 0.6s ease-out;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});
