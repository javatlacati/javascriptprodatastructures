workspace(name = "project")

git_repository(
  name = "io_bazel_rules_closure",
  remote = "https://github.com/bazelbuild/rules_closure.git",
  commit = "f4d0633f14570313b94822223039ebda0f398102",
)

#http_archive(
#    name = "io_bazel_rules_closure",
    #    strip_prefix = "rules_closure-0.4.2",
    #    sha256 = "25f5399f18d8bf9ce435f85c6bbf671ec4820bc4396b3022cc5dc4bc66303609",
    #    url = "https://mirror.bazel.build/github.com/bazelbuild/rules_closure/archive/0.4.2.tar.gz",
#)



load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")

closure_repositories()
