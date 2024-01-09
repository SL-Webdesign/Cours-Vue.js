<template>
	<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light rounded mb-3 ps-3" style="background-color: #A8CAD8;">
      <router-link class="navbar-brand" to="/">Plan Sportif</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/todo">To-do</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">A propos de nous</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contactez-nous</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/inscription">Inscription</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>

    <footer class="text-center text-white rounded mt-3" style="background-color: #A8CAD8;">
      <!-- Grid container -->
      <div class="container pt-4">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/people/La-Sotizerie-stzr-/100083511348325/"
              role="button"
              data-mdb-ripple-color="dark"
          ><i class="fab fa-facebook-f"></i
          ></a>

          <!-- Twitter -->
          <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              role="button"
              data-mdb-ripple-color="dark"
          ><i class="fab fa-twitter"></i
          ></a>

          <!-- Google -->
          <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://fr.wikipedia.org/wiki/Kim_Jong-un"
              role="button"
              data-mdb-ripple-color="dark"
          ><i class="fab fa-google"></i
          ></a>

          <!-- Instagram -->
          <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/explore/locations/190532194635472/mia-khalifa/?hl=fr"
              role="button"
              data-mdb-ripple-color="dark"
          ><i class="fab fa-instagram"></i
          ></a>

          <!-- Linkedin -->
          <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://fr.wikipedia.org/wiki/Auschwitz"
              role="button"
              data-mdb-ripple-color="dark"
          ><i class="fab fa-linkedin"></i
          ></a>
          <!-- Github -->
          <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.joomla.org/"
              role="button"
              data-mdb-ripple-color="dark"
          ><i class="fab fa-github"></i
          ></a>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        Créé par Simon Lemaire - Web Design 2022-2023
      </div>
      <!-- Copyright -->
    </footer>

  </div>
</template>