package(default_visibility = ["//visibility:public"])
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_binary")

closure_js_binary(
  name = "bundle",
  language = "ECMASCRIPT5",
  compilation_level = "ADVANCED",
  deps = ['//bags','//list'],
  defs = [
       "--generate_exports",
       "--export_local_property_definitions",
  ]
)


