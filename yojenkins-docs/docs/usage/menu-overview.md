---
title: Menu Overview
metaTitle: Menu Overview
metaDescription: Menu Overview
sidebar_position: 2
---

# Menu Overview

The following is the main menu displayed when running `yojenkins --help`.

```txt
❯ yojenkins --help

                        YOJENKINS (Version: 0.0.00)

  yojenkins is a flexible tool that is focused on interfacing with Jenkins
  server from the comfort of the beloved command line. This tool can also be
  used as a middleware utility, generating and passing Jenkins information or
  automating tasks.

  QUICK START:

    1. Configure yo profile:  yojenkins auth configure
    2. Add yo API token:      yojenkins auth token --profile <PROFILE NAME>
    3. Verify yo creds:       yojenkins auth verify
    4. Explore yojenkins

Options:
  -v, --version  Show the version
  --help         Show this message and exit.

Commands:
  account     Manage user accounts
  auth        Manage authentication and profiles
  build       Manage builds
  credential  Manage credentials
  folder      Manage folders
  job         Manage jobs
  node        Manage nodes
  server      Manage server
  stage       Manage build stages
  step        Manage stage steps
  tools       Tools and more
```

The sub-menus can be accessed by entering `yojenkins` followed by the sub-menu name.
For example, `yojenkins server` will display the server sub-menu.

```txt
❯ yojenkins server --help

Usage: yojenkins server [OPTIONS] COMMAND [ARGS]...

  Server Management

Options:
  --help  Show this message and exit.

Commands:
  browser          Open server home page in web browser
  info             Server information
  people           Show all people/users on server
  plugins          Show plugin information
  queue            Show current job build queues on server
  quiet            Server quite mode enable/disable
  reachable        Check if server is reachable
  restart          Restart the server
  server-deploy    Create a local development server using Docker
  server-teardown  Remove a local development server
  shutdown         Shut down the server
```

In turn, the sub-menu commands can be accessed by entering `yojenkins server` followed by the
sub-menu command name. For example, `yojenkins server browser` will open the Jenkins server
home page in the browser.

!!! note
Some commands may be greyed out. These commands are not yet implemented.

Of course you can view the help menu for the sub-menu's commands by adding `--help`.
For example, `yojenkins server browser --help` will display the help menu for the `browser`

```txt
❯ yojenkins server browser --help

Usage: yojenkins server browser [OPTIONS]

  Open server home page in web browser

Options:
  --debug         Enable debug level log messages
  --profile TEXT  Authentication profile for command
  --help          Show this message and exit.
```
