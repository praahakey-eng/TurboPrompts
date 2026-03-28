// Yahan tum apne pasand ke prompts aur images add kar sakte ho
const promptData = [
    {
        category: "Realistic Portrait",
        title: "Alpha Beard & Hair Edit",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500", 
        text: "Extreme close-up portrait of a man with dense, perfectly groomed beard, textured natural hair, sharp jawline, cinematic lighting, 8k realistic skin pores, photorealistic."
    },
    {
        category: "Automotive",
        title: "Hyper-Speed Night Drive",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500", 
        text: "Midnight blue sports car speeding on a Japanese highway, heavy motion blur, neon light trails, realistic rain reflections on asphalt, high-speed aesthetic, 4k resolution."
    },
    {
        category: "Art & Decor",
        title: "Luxury Resin Wall Clock",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500", 
        text: "Modern luxury wall clock made of deep emerald resin and liquid gold swirls, glossy marble finish, minimalist gold hands, interior design masterpiece, hyper-detailed."
    },
    {
        category: "Photography",
        title: "Urban Techwear Style",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500", 
        text: "Cinematic street photography of a model in techwear, dramatic neon lighting, foggy urban atmosphere, shot on 35mm lens, grainy realistic texture."
    }
];

const grid = document.getElementById('promptGrid');

// Function to display prompts
function displayPrompts(data) {
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" class="card-img" alt="${item.title}">
            <span class="tag">${item.category}</span>
            <h3>${item.title}</h3>
            <div class="prompt-box">${item.text}</div>
            <button class="copy-btn" onclick="copyText('${item.text}')">COPY PROMPT</button>
        `;
        grid.appendChild(card);
    });
}

// Function to copy text with Toast notification
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => { 
            toast.classList.remove('show'); 
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Search Functionality
function searchPrompts() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = promptData.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.text.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
    displayPrompts(filtered);
}

// Initial Load
displayPrompts(promptData);
