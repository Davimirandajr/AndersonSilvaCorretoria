document.addEventListener('DOMContentLoaded', function() {
    const empreendimentosContainer = document.getElementById('empreendimentos-container');

    const empreendimentos = [
        {
            nome: 'CANOPUS',
            icone: 'fa-solid fa-star',
            link: 'http://encurtador.com.br/nwDGV'
        },
        {
            nome: 'ESCUDO',
            icone: 'fa-solid fa-shield-alt',
            link: 'http://encurtador.com.br/fE139'
        },
        {
            nome: 'LUA NOVA',
            icone: 'fa-solid fa-moon',
            link: 'http://bit.ly/Informa%C3%A7%C3%B5esLuaNovaSLZ'
        },
        {
            nome: 'MRV',
            icone: 'fa-solid fa-tree',
            link: 'https://drive.google.com/drive/folders/0B9ze68YGV-gSUzZZZkJJNXAtN3M?resourcekey=0-S1oDap9TiPPBvCKfQlvYwQ'
        },
        {
            nome: 'ENGEPLAN',
            icone: 'fa-solid fa-key',
            link: 'https://bit.ly/VillaParkMateriais'
        },
        {
            nome: 'TREVISO',
            icone: 'fa-solid fa-building',
            link: 'https://drive.google.com/drive/folders/1-6lAlpl96bzVTAkdDe2gOpA8vOmvVwDZ'
        },
        {
            nome: 'CASTELUCCI',
            icone: 'fa-solid fa-crown',
            link: 'https://drive.google.com/drive/folders/1mvGs7jMOm8gkAUQvqTF_EphL1BAfqCIs'
        }
    ];

    empreendimentos.forEach(empreendimento => {
        const card = document.createElement('div');
        card.className = 'empreendimento-card';
        card.innerHTML = `
            <i class="${empreendimento.icone}"></i>
            <h3>${empreendimento.nome}</h3>
            <a href="${empreendimento.link}" target="_blank">Ver Detalhes</a>
        `;
        empreendimentosContainer.appendChild(card);
    });
});