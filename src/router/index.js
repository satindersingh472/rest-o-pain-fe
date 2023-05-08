import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: [
      {
        title: "Rest-O-Pain",
      },
      {
        name: "Author",
        content: "Aman Thind",
      },
      {
        name: "keywords",
        content:
          "Physiotherapy, ultrasound-therapy, shockwave-therapy, interferential-therapy, dry needling, kinesiology-therapy,laser-therapy",
      },
      {
        name: "description",
        content:
          "Physiotherapy, ultrasound-therapy, shockwave-therapy, interferential-therapy, dry needling, kinesiology-therapy,laser-therapy",
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

/*remove the old meta tag */
router.beforeEach((to, from, next) => {
  let current_meta_tags = document.querySelectorAll(`meta`);
  for (let i = 0; i < current_meta_tags.length; i++) {
    current_meta_tags[i].remove();
  }
  /*put the title tag inside head */
  let new_meta_tags = to[`meta`];
  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];
  /*put the other meta tags other than the title tag inside the head */
  for (let i = 1; i < new_meta_tags.length; i++) {
    document
      .querySelector(`head`)
      .insertAdjacentHTML(
        `afterbegin`,
        `<meta name="${new_meta_tags[i][`name`]}" content="${
          new_meta_tags[i][`content`]
        }"/>`
      );
  }
  document.querySelector(`head`).insertAdjacentHTML(
    `afterbegin`,
    `<meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width,initial-scale=1.0">`
  );

  from;
  next();
});

export default router;
