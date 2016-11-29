module.exports = {
    api: '/mock/my-tabs',

    response: function (req, res) {
        res.json({
            Responsible: 128,
            Completed: 38,
            Created: 497,
            Followed: 23,
            Blocked: 25,
            Verified: 3
        });
    }
};
