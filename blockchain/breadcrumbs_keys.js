var html = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Basics: <a href="/#/blockchain/keys" onclick="loadPage('blockchain/keys')">Keys</a></li>
        <li class="breadcrumb-item"><a href="/#/blockchain/signatures" onclick="loadPage('blockchain/signatures')">Signatures</a></li>
        <li class="breadcrumb-item"><a href="/#/blockchain/transaction" onclick="loadPage('blockchain/transaction')">Transaction</a></li>
        <li class="breadcrumb-item"><a href="/#/blockchain/chainPlusSignatures" onclick="loadPage('blockchain/chainPlusSignatures')">Chain</a></li>        
      </ol>
    </nav>    
`;
var breadcrumbs = document.getElementById('breadcrumbs');
breadcrumbs.innerHTML = html;