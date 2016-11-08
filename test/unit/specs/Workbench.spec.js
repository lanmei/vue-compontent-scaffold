const workbench = require('components/workbench.vue');

describe('workbench.vue', function () {
    // asserting JavaScript options
    it('should have correct message', function () {
        expect(workbench.name).to.be.equal('workbench');
    });
});
