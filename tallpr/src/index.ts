import { Probot } from "probot";
import { getHeightAnalog } from "./height";

export = (app: Probot) => {
  app.on("pull_request.ready_for_review", async (context) => {
    let files;
    try {
      const list = context.pullRequest();
      files = await context.octokit.pulls.listFiles(list);
    } catch (e) {
      console.error(e);
      return;
    }

    const linesToReview = files.data.map(f => f.changes).reduce((v, sum) => sum + v)
    if (linesToReview < 1) {
      return
    }

    const a = getHeightAnalog(linesToReview)
    const messageText = `If printed on paper, this pull request would be ` +
      `roughly as ${a.dimension || 'tall'} as ${a.conjunction || 'an'}` +
      ` ${a.name || 'error'}`
    const comment = context.issue({body: messageText})
    await context.octokit.issues.createComment(comment).catch(v => console.log(v))
  });
};
