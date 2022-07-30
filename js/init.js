document.addEventListener('DOMContentLoaded', function () {
  M.Sidenav.init(document.querySelectorAll('.sidenav'), null);
  M.Carousel.init(document.querySelectorAll('.carousel'), null);
});
function download() {
  window.open("https://play.google.com/store/apps/details?id=com.tiz.yowjerryapps", '_blank').focus();
}
function sendMessage( message) {
  message_=encodeURI(message);
  url='https://wa.me/+50937771713?text='+message_;
  window.open(url,'_blank');
}