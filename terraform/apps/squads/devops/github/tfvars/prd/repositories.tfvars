repositories = {
  gangnam-style = {
    name                = "gangnam style"
    description         = "gangnam style"
    environments        = ["qa", "stg", "prd"]
    actions             = true
    template            = "gangnam style"
    build_flows_enabled = true
    teams_roles = {
      onecommerce = "gangnam style"
    }
    squad_name = "gangnam style"
    custom_actions_variables = {
      DIVISION = "gangnam style",
    }
  },

  ms-app-devportal-bs3 = {
    name                = "ms-app-devportal-bs3"
    description         = "teste-desc"
    environments        = ["qa", "stg", "prd"]
    actions             = true
    template            = "ms-nest-template"
    build_flows_enabled = true
    teams_roles = {
      product_platform = "Write + View Dependabot Alerts"
    }
    pagerduty  = true
    squad_name = "product_platform"
    custom_actions_variables = {
      DIVISION = "yape3",
    }
  },
}
