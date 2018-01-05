# Contributing to compretend

🙌 Much thanks for taking the time to contribute!🙌

The following is a set of guidelines for contributing to compretend's repositories, which are hosted in the [compretend organization](https://github.com/compretend) on GitHub. Use your best judgment, and propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)
[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

## Code of Conduct

This project and everyone participating in it is governed by the [compretend Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [a maintainer]()not involved in the behavior behing reported.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for compretend. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* **Check if you can reproduce the problem.
* **Determine which repository the problem should be reported in**.
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Acompretend)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](https://github.com/compretend) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. When listing steps, **include what you did, and explain how you did it**.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/atom/keybinding-resolver) shown**. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for compretend, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Determine [which repository the enhancement should be suggested in](https://github.com/compretend).**
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Acompretend)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](https://github.com/compretend) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most compretend users.**
* **List some other text editors or applications where this enhancement exists.**

### Your First Code Contribution

If you have never created a pull request before, [check out this tutorial](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)
on how to send one.

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/<repo-name>
   # Navigate to the newly cloned directory
   cd <repo-name>
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/hoodiehq/<repo-name>
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Make sure to update, or add to the tests when appropriate. Patches and
   features will not be accepted without tests. Run `npm test` to check that
   all tests pass after you've made changes. Look for a `Testing` section in
   the project’s README for more information.

5. If you added or changed a feature, make sure to document it accordingly in
   the `README.md` file.

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.

### For compretend contributors

1. Clone the repo and create a branch

   ```bash
   git clone https://github.com/compretend/<repo-name>
   cd <repo-name>
   git checkout -b <topic-branch-name>
   ```

2. Make sure to update, or add to the tests when appropriate. Patches and
   features will not be accepted without tests. Run `npm test` to check that
   all tests pass after you've made changes. Look for a `Testing` section in
   the project’s README for more information.

3. If you added or changed a feature, make sure to document it accordingly in
   the `README.md` file.

4. Push your topic branch up to our repo

   ```bash
   git push origin <topic-branch-name>
   ```

5. Open a Pull Request using your branch with a clear title and description.

Optionally, you can help us with these things. But don’t worry if they are too
complicated, we can help you out and teach you as we go :)

1. Update your branch to the latest changes in the upstream master branch. You
   can do that locally with

   ```bash
   git pull --rebase upstream master
   ```

   Afterwards force push your changes to your remote feature branch.

2. Once a pull request is good to go, you can tidy up your commit messages using
   Git's [interactive rebase](https://help.github.com/articles/interactive-rebase).
   Please follow our commit message conventions shown below, as they are used by
   [semantic-release](https://github.com/semantic-release/semantic-release) to
   automatically determine the new version and release to npm.

**IMPORTANT**: By submitting a patch, you agree to license your work under the
same license as that used by the project.

### Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code), otherwise you risk spending a lot of
time working on something that the project's developers might not want to merge
into the project.
