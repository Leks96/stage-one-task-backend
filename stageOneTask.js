const express = require ('express');

const app = express();
const PORT = 3050;

app.get('/api', (req, res) => {
    //query parameters passed
    const { slack_name, track } = req.query;

    //get current day and utc time

    const today = new Date().toLocaleDateString(('en-US'), {weekday: 'long'});
    const utcDate = new Date().toISOString();

    //the response object

    const response = {
        slack_name,
        current_day: today,
        utc_time: utcDate,
        track,
        github_file_url: 'https://github.com/Leks96/stage-one-task-backend/blob/main/stageOneTask.js',
        github_repo_url: 'https://github.com/Leks96/stage-one-task-backend',
        status_code: 200
    }

    res.json(response);
})

app.listen(PORT, ()=> 
[
    console.log(`you are currently on stageone listening on port ${PORT}`)
])