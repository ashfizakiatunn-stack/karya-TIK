let saldo = 0;

document.getElementById(`btn-menabung`).addEventListener(`click`, () => {
  const jumlahmenabung = parseInt(document.getElementById(`jumlah-menabung`).value);
  saldo += jumlahmenabung;
  document.getElementById(`saldo`).innerHTML = `saldo: $(saldo)`;
});
