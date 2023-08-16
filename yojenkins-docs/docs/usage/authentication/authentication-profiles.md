---
title: "Authentication Profiles"
metaTitle: "Authentication Profiles"
metaDescription: "Authentication Profiles"
sidebar_position: 2
---

# Authentication Profiles

`yojenkins` has the ability to store and manage authentication profiles. You are able to
store and manage different authentication credentials and use them to authenticate with the Jenkins
server as you need them, without having to enter them each time you need to interact with each
Jenkins server.

Different authentication profiles can be used for different Jenkins servers. For example, you can
have a profile for your local development server and a profile for your production Jenkins server.

You can also have different authentication profiles for different Jenkins user accounts. For example,
you may have a profile for an Jenkins administrator and a profile for a regular user.

Authentication profiles are stored in your local `~/.yojenkins` directory inside the `credentials`
file. The `credentials` file is a TOML file that contains a list of authentication profiles.
Remember that the `~` is a shorthand for the user's home directory.

!!! note
Authentication profiles work very similar to that of AWS CLI, storing credentials locally inside
the `~/.aws/credentials` file.

The `~/.yojenkins` directory and the `credentials` file can be manually created, however, `yojenkins`
will create these files for you if they do not exist.

An example of the contents of the `credentials` file looks like this:

```toml
[default]
jenkins_server_url = "https://cool-company.jenkins.com"
username = "id236"
api_token = "11fb9cb61d34edfe73f82763cf8879c79a"
active = true

[test-server]
jenkins_server_url = "http://localhost:8080"
username = "admin"
api_token = "55fg9cb61d34edfe83f82763cf8879c70v"
active = true
```

Note the different profile names in the `credentials` file. The first profile is `default`.
This is the profile that is used when no other profile is specified. If available, the `default` profile is
automatically activated when the `yojenkins` command is run.

The profile sections are as follows:

- `jenkins_server_url`: The full URL of the Jenkins server's home page.
- `username`: The username of the Jenkins user account.
- `api_token`: The API token of the Jenkins user account. This can be fetched through the Jenkins
  server UI, or through `yojenkins`. If this has no value assigned to it, you will be prompted to
  enter your password or API token at each command.
- `active`: Whether the profile can be used or not. This can be useful if you want to temporarily disable
  a profile and ensure that you don't accidentally use it.

!!! caution
The `api_token` can be the account password, however it is **highly recommended** that you use
an API token. You do not want to store a Jenkins account password in plain text.
