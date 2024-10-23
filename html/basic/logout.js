function submitForm() {
  let result = confirm("ログアウトしますか？");
  if (result) {
    document.getElementById("logout").submit();
  }
}
