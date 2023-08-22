---
title: "Getting Started With yojenkins"
metaTitle: Getting Started With yojenkins"
metaDescription: "Getting Started With yojenkins"
sidebar_position: 2
---

# Getting Started With yojenkins

yojenkins is a cross-platform command line interface (CLI) tool to monitor, manage, and have fun with a Jenkins server. It makes it possible to interact with a Jenkins server without using the browser based Jenkins UI.

This tool is able to be integrated into a script as middleware in order to automate Jenkins related tasks or enable Jenkins configuration as code.

**`yojenkins` will liberate you and your browser from the Jenkins Web UI**

With `yojenkins` you can manage:

- **Authentication**: _Authentication structure similar to AWS CLI_
- **Server**: _Create, shutdown, view queue, and more_
- **User accounts**: _Create, delete, add/remove permission, and more_
- **Nodes/agents:** _Create, delete, shut down server, and more_
- **Credentials**: _Create, update, delete, list, and more_
- **Folders:** _Create items, delete items, disable, enable, and more_
- **Jobs:** _Create, delete, diff, trigger, monitor, search, and more_
- **Builds:** _Monitor, diff, abort, tail logs, follow logs, and more_
- **Stages:** _Get info, get logs, view steps, view status_
- **Steps:** _Get info_
- **Other tools and functions:** _Run groovy scripts remotely, run custom REST calls, setup a shared library, view command usage history, and more_

See the CLI command outline for `yojenkins`: [CLI Outline](cli_outline.md)

:::caution Remember
This project is in **alpha** release phase. Please report any issues, odd behavior, or suggestions.
Read more about the [release cycle](https://en.wikipedia.org/wiki/Software_release_life_cycle).
See [Bug Reports](bug_report.md) and [Feature Requests](feature_request.md)

This does not mean that this project is not usable. It just means that the project is still in development.

:::

### Overview Video

This video presents an overview of yojenkins, while demonstrating a few basic funcitonalities and workflow.

<iframe width="560" height="315" src="https://www.youtube.com/embed/w1p-eMzKuLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Quick Start

The following is a quick start guide to get going with the `yojenkins` command line tool.
This guide assumes that `yojenkins` is installed and available on your system.

1. **(Optional)** Start up a containerized local Jenkins server using Docker
   ```bash
   yojenkins server server-deploy
   ```
2. Configure your first profile. Profiles are stored in the home directory in `.yojenkins`
   - `yojenkins auth configure`
3. Generate a Jenkins server API token and add it to your first profile
   - `yojenkins auth token --profile <PROFILE NAME>`
4. Verify that you can access the Jenkins server
   - `yojenkins auth verify`
5. Now start trying some things ...

```sh
Get sever info:       yojenkins server info
Get your user info:   yojenkins auth user --pretty
Search a job:         yojenkins job search some-job-name --fullname --yaml --list
Monitor a build:      yojenkins build monitor some-job-name --latest --sound
```
