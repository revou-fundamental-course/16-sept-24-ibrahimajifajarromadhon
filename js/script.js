function displayInput() {
    var nama = document.getElementById('nama').value;
    var tanggal = document.getElementById('tanggal').value;
    var jk = document.querySelector('input[name="jk"]:checked').value;
    var pesan = document.getElementById('pesan').value;

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    var currentTime = new Date().toLocaleString('id-ID', options);

    var resultList = document.getElementById('inputList');
    resultList.innerHTML = '';

    var timeItem = document.createElement('li');
    timeItem.textContent = "Current Time : " + currentTime;
    resultList.appendChild(timeItem);

    var items = [
        {label: "Nama", value: nama},
        {label: "Tanggal Lahir", value: tanggal},
        {label: "Jenis Kelamin", value: jk},
        {label: "Pesan", value: pesan}
    ];

    items.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.label + " : " + item.value;
        resultList.appendChild(li);
    });

    return false;
}