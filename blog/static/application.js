import { Application } from "stimulus"

import PostController from "./controllers/post_controller"
import FormController from "./controllers/form_controller"

const application = Application.start()
application.register("post", PostController)
application.register("form", FormController)