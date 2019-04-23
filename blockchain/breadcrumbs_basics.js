var html = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Basics: <a href="/#/blockchain/hash" onclick="loadPage('blockchain/hash')">Hash</a></li>
        <li class="breadcrumb-item"><a href="/#/blockchain/block" onclick="loadPage('blockchain/block')">Block</a></li>
        <li class="breadcrumb-item"><a href="/#/blockchain/chain" onclick="loadPage('blockchain/chain')">Chain</a></li>
      </ol>
    </nav>    
`;
var breadcrumbs = document.getElementById('breadcrumbs');
breadcrumbs.innerHTML = html;