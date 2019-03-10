workflow "Deploy on Now" {
  on = "push"
  resolves = ["deploy"]
}

action "deploy" {
  uses = "actions/zeit-now@master"
  args = "--public --no-clipboard deploy . > $HOME/$GITHUB_ACTION.txt"
  secrets = ["ZEIT_TOKEN"]
}
