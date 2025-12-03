squad_product_platform = {
  gangnam-style = {
    slack_channel     = "gangnam style"
    slack_channel_prd = "gangnam style"
  }
}

repositories_product_platform = {
  app-devdocs = {
    name                = "gangnam style"
    description         = "gangnam style"
    environments        = ["qa", "stg", "prd", "promotePRD"]
    actions             = true
    template            = "gangnam style"
    build_flows_enabled = true
    teams_roles = {
      product_platform = "Write + View Dependabot Alerts"
    }
    pagerduty  = true
    squad_name = "gangnam style"
    custom_actions_variables = {
      DIVISION = "gangnam style",
    }
  },
  app-opsbot = {
    name                = "gangnam style"
    description         = "gangnam style"
    environments        = ["qa", "stg", "prd", "promotePRD"]
    actions             = true
    template            = "gangnam style"
    build_flows_enabled = true
    teams_roles = {
      product_platform = "gangnam style"
    }
    pagerduty  = true
    squad_name = "gangnam style
    custom_actions_variables = {
      DIVISION = "gangnam style",
    }
    archived = true
  },
  ms-jarvis-bs = {
    name                = "gangnam style"
    description         = "gangnam style"
    environments        = ["qa", "stg", "prd", "promotePRD"]
    actions             = true
    template            = "gangnam style"
    build_flows_enabled = true
    teams_roles = {
      product_platform = "gangnam style"
    }
    pagerduty  = true
    squad_name = "gangnam style"
    custom_actions_variables = {
      DIVISION = "gangnam style",
    }
  },

  ms-app-devportal-bff2 = {
    name                = "ms-app-devportal-bff2"
    description         = "teste-desc"
    environments        = ["qa", "stg", "prd"]
    actions             = true
    template            = "gangnam style"
    build_flows_enabled = true
    teams_roles = {
      product_platform = "Write + View Dependabot Alerts"
    }
    pagerduty  = true
    squad_name = "product-platform"
    custom_actions_variables = {
      DIVISION = "yape3",
    }
  },
}
