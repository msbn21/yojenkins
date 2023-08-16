---
title: "Configuring a Profile"
metaTitle: "Configuring a Profile"
metaDescription: "Configuring a Profile"
sidebar_position: 3
---

# Configuring a Profile

To use an authentication profile you need to first create a profile. For example, to create a profile
for your local development server, you can do one of the following two methods.

### Run `yojenkins auth configure` _(Recommended)_

Running this command will prompt you for the required information, The prompt will look something
like the following:

```txt
❯ yojenkins auth configure

Credentials profile file found in current user home directory:
/home/user/.yojenkins/credentials
Adding a new profile to the current credentials profile file ...
Please enter the following information to add a profile:

[ OPTIONAL ] Enter PROFILE NAME (default):  demo-profile
[ REQUIRED ] Enter Jenkins SERVER BASE URL:  http://demo.jenkins.com
[ REQUIRED ] Enter USERNAME:  demo_user
[ OPTIONAL ] Enter API TOKEN:

Successfully configured credentials file
```

You can leave the API token blank since you can use `yojenkins` to add the API token later.

!!! caution
The profile name is optional because if you do not enter anything for this item, the profile
will be named `default` and overwrite any existing `default` profile with the same name.

### Manually edit the `~/.yojenkins/credentials` file directly

You can manually edit the `~/.yojenkins/credentials` file directly. The file is in
TOML file format. Each profile will have the following information structure:

```toml
[demo-profile]
jenkins_server_url = "http://demo.jenkins.com"
username = "demo_user"
api_token = ""
active = true
```

The `active` field is used to determine whether the profile can be used or not. If you want to
temporarily disable a profile, you can set the `active` field to `false`.

You can leave the API token blank since you can use `yojenkins` to add the API token later.

### Using a JSON file

If you need to configure profiles without terminal prompts or manually adding tokens to the
credentials file, you can use a predefined JSON file to configure profiles. This method allows
you to simultaneously configure multiple profiles at once.

The predefined JSON file can be specified with the `--auth-file` option.

The following is an example of the JSON file used to set up two authentication profiles:

```json
{
  "server_1": {
    "active": true,
    "api_token": "11fb9cb61d34edfe73f82763cf8879c79a",
    "jenkins_server_url": "https://server_1.jenkins.com",
    "username": "my_user_id_1"
  },
  "server_2": {
    "active": true,
    "api_token": "48fb9cb61d34edfe73f82763cf8879u79y",
    "jenkins_server_url": "https://server_2.jenkins.com",
    "username": "my_user_id_2"
  }
}
```

These profiles would then be configured with

```bash
yojenkins auth configure --auth-file my_auth_file.json
```
