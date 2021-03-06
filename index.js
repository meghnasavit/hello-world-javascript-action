const core = require('@actions/core');
const github = require('@actions/github');
import { Octokit } from '@octokit/rest';

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  const octokit = new github.GitHub();
  const { owner, repo } = github.context.repo;
  const event_type = 'custom';
  octokit.repos.createDispatchEvent({
      owner,
      repo,
      event_type,
      client_payload: {"hi":"meghna"},
  });
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
