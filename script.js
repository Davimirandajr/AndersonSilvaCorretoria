document.addEventListener('DOMContentLoaded', () => {

    // Lógica para o filtro de imóveis (na página imoveis.html)
    const filterButton = document.getElementById('filter-btn');
    const tipoImovelSelect = document.getElementById('tipo-imovel');
    const precoMinInput = document.getElementById('preco-min');
    const precoMaxInput = document.getElementById('preco-max');
    const imovelCards = document.querySelectorAll('.imovel-card');
    
    if (filterButton && tipoImovelSelect && precoMinInput && precoMaxInput) {
        filterButton.addEventListener('click', () => {
            const tipoSelecionado = tipoImovelSelect.value;
            const precoMin = parseFloat(precoMinInput.value) || 0;
            const precoMax = parseFloat(precoMaxInput.value) || Infinity;

            imovelCards.forEach(card => {
                const cardPreco = parseFloat(card.dataset.price);
                const cardTipo = card.dataset.type;
                
                const precoCorresponde = cardPreco >= precoMin && cardPreco <= precoMax;
                const tipoCorresponde = !tipoSelecionado || cardTipo === tipoSelecionado;

                card.style.display = (precoCorresponde && tipoCorresponde) ? 'block' : 'none';
            });
        });
    }

    // Lógica para a galeria de fotos (caso você crie uma página de detalhes)
    const fotosMiniaturas = document.querySelectorAll('.fotos-miniaturas img');
    const fotoPrincipal = document.querySelector('.foto-principal');

    if (fotosMiniaturas.length > 0 && fotoPrincipal) {
        fotosMiniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', () => {
                fotoPrincipal.src = miniatura.src;
                
                fotosMiniaturas.forEach(m => m.style.borderColor = 'transparent');
                miniatura.style.borderColor = '#ffc107';
            });
        });
    }
    
    // ===========================================
    // Lógica do Modal para o formulário de simulação
    // ===========================================
    const openModalBtn = document.getElementById('open-contact-modal');
    const closeModalBtn = document.getElementById('close-contact-modal');
    const modal = document.getElementById('contact-modal');
    const contactForm = document.getElementById('contact-form');
    const whatsappFloatLink = document.getElementById('whatsapp-float-link');

    // Apenas se o botão de abrir o modal existir na página
    if (openModalBtn) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });
    }
    
    // Fecha o modal ao clicar no 'x'
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Fecha o modal ao clicar fora da área de conteúdo
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Lógica para o formulário que envia para o WhatsApp
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Novos IDs dos campos
            const empreendimento = document.getElementById('empreendimento').value;
            const nascimento = document.getElementById('nascimento').value;
            const tipoRenda = document.getElementById('tipo-renda').value;
            const valorRenda = document.getElementById('valor-renda').value;
            const contato = document.getElementById('contato').value;
            const email = document.getElementById('email').value;

            // Número do WhatsApp do corretor
            const numeroCorretor = "55999999999"; // Troque pelo número correto

            // Monta a mensagem com os dados do formulário
            let mensagem = `Olá, Anderson!%0A%0A`;
            mensagem += `Gostaria de fazer uma simulação de empreendimento. Seguem meus dados:%0A`;
            mensagem += `*Empreendimento de Interesse:* ${empreendimento || 'Não especificado'}%0A`;
            mensagem += `*Data de Nascimento:* ${nascimento || 'Não informada'}%0A`;
            mensagem += `*Tipo de Renda:* ${tipoRenda || 'Não especificado'}%0A`;
            mensagem += `*Valor Bruto da Renda:* ${valorRenda ? 'R$' + valorRenda : 'Não informado'}%0A`;
            mensagem += `*Contato:* ${contato}%0A`;
            mensagem += `*E-mail:* ${email}%0A`;
            
            // Cria a URL do WhatsApp e abre em uma nova aba
            const urlWhatsapp = `https://wa.me/${5598982068177}?text=${mensagem}`;
            window.open(urlWhatsapp, '_blank');
            
            // Fecha o modal após o envio e reseta o formulário
            modal.style.display = 'none';
            contactForm.reset();
        });
    }

    // Lógica para o botão flutuante
    if (whatsappFloatLink) {
        whatsappFloatLink.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });
    }
});