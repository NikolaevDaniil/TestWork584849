<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div class="container">
        <div class="collapse navbar-collapse">
          <div class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="btn btn-primary me-4"  to="/">All tasks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-success"  to="/create">Create tasks</router-link>
            </li>
          </div>
        </div>
      </div>

    </nav>



  <router-view/>
</template>

