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

  ms-test-auto-merge-3 = {
    name                = "ms-test-auto-merge-3"
    description         = "Test"
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

  ms-test-create = {
    name                = "ms-test-create"
    description         = "Test"
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

  ms-test-workflow-dispatch = {
    name                = "ms-test-workflow-dispatch"
    description         = "2"
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

  ms-test-test = {
    name                = "ms-test-test"
    description         = "test"
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

  ms-test-wait-repo = {
    name                = "ms-test-wait-repo"
    description         = "Tet"
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
