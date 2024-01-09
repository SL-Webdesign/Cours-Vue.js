<template>
  <!--Section: Contact v.2-->
  <section class="mb-4 mt-4 rounded pt-1" style="background-color: #ACB2C6">

    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contactez-nous</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Nous serions ravis de vous entendre ! Veuillez remplir le
      formulaire ci-dessous avec vos coordonnées et votre message, et nous vous répondrons dans les plus brefs
      délais.</p>

    <div class="row">

      <!--Grid column-->
      <div class="col-md-8 ms-3 mb-3 pb-1">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

          <!--Grid row-->
          <div class="row">

            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <label for="name" class="mt-3 mb-2">Votre nom</label>
                <input type="text" id="name" name="name" class="form-control">
              </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <label for="email" class="mt-3 mb-2">Votre email</label>
                <input type="text" id="email" name="email" class="form-control">
              </div>
            </div>
            <!--Grid column-->

          </div>
          <!--Grid row-->

          <!--Grid row-->
          <div class="row">
            <div class="col-md-12">
              <div class="md-form mb-0">
                <label for="subject" class="mt-3 mb-2">Sujet</label>
                <input type="text" id="subject" name="subject" class="form-control">
              </div>
            </div>
          </div>
          <!--Grid row-->

          <!--Grid row-->
          <div class="row">

            <!--Grid column-->
            <div class="col-md-12">

              <div class="md-form mt-3">
                <label for="message" class="mb-2">Votre message</label>
                <textarea type="text" id="message" name="message" rows="3" class="form-control md-textarea"></textarea>
              </div>

            </div>
          </div>
          <!--Grid row-->

        </form>

        <div class="text-center text-md-left">
          <button class="btn btn-primary mt-4" onclick="window.location.href = '/';">Envoyer</button>
        </div>
        <div class="status"></div>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-3 text-center mt-4">
        <ul class="list-unstyled mb-0">
          <li><i class="fas fa-map-marker-alt fa-2x"></i>
            <p>Tintigny Beach 6730, Belgique</p>
          </li>

          <li><i class="fas fa-phone mt-4 fa-2x"></i>
            <p>+32 63 42 42 70</p>
          </li>

          <li><i class="fas fa-envelope mt-4 fa-2x"></i>
            <p>contact@plansportif.com</p>
          </li>
        </ul>
      </div>
      <!--Grid column-->

    </div>

  </section>
  <!--Section: Contact v.2-->
</template>
