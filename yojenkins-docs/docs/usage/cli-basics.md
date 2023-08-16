---
title: CLI Basics
metaTitle: CLI Basics
metaDescription: CLI Basics
sidebar_position: 1
---

# CLI Basics

As with other command line interface (CLI) tools, the format of a typical `yojenkins` CLI
interaction looks like this:

```text
yojenkins <command> <subcommand> [options] [ARGUMENTS]
```

Here `[optoins]` are flags that do not have to be specified. For example, `--yaml` is a common
option. `[ARGUMENTS]` are documneted as uppder case and must be specified for the command.
For example, `yojenkins folder info [OPTIONS] FOLDER`, where folder name/URL are required.

To look up any command and sub-command help documentation, supplement the command with `--help`.
For example, `yojenkins auth configure --help`

!!! tip
To troubleshoot any issues or to see what `yojenkins` is doing behind the scenes, use the `--debug` option
